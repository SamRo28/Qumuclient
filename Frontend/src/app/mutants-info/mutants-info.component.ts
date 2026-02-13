import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManagerService } from '../services/manager.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { QumugenService } from '../services/qumugen.service';

@Component({
  selector: 'app-mutants-info',
  templateUrl: './mutants-info.component.html',
  styleUrls: ['./mutants-info.component.css']
})
export class MutantsInfoComponent implements OnInit, OnDestroy {

  isCircuitValid = false;
  selectedTab: 'info' | 'code' | 'visualization' = 'info';
  private subscriptions = new Subscription();

  constructor(public manager: ManagerService, private route: ActivatedRoute, private qumugenService: QumugenService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.paramMap.subscribe(params => {
        const projectId = params.get('projectId');
        const cycleId = params.get('cycleId');
        const mutantId = params.get('mutantId'); // This is mutantIndex

        if (projectId && cycleId && mutantId) {
          this.subscriptions.add(
            this.manager.projects$.subscribe(projects => {
              const project = projects.find(p => p.id === projectId);
              if (project) {
                this.manager.setselectedProject(project);

                const cycle = project.mutantCycles.find(c => c.id == Number(cycleId));
                if (cycle) {
                  // Update cycle selection if needed (though we are focusing on mutant)
                  this.manager.setSelectedMutantCycle(cycle);

                  const mutant = cycle.mutants.find(m => m.mutantIndex == Number(mutantId));
                  if (mutant) {
                    this.manager.setSelectedMutant(mutant);

                    // Check if code is loaded, if not, load it
                    if (!mutant.circuit?.qCodes || mutant.circuit.qCodes.length === 0 || !mutant.circuit.qCodes[0].code) {

                      this.qumugenService.getQiskitCode(project.qProgram!).then(response => {
                        if (!project.qProgram!.qCodes || project.qProgram!.qCodes.length === 0) {
                          const QCodeClass = require('../model/QCode').QCode;
                          project.qProgram!.qCodes = [new QCodeClass(undefined, response.wholeCode, "QuMu")];
                        } else {
                          project.qProgram!.qCodes[0].code = response.wholeCode;
                          project.qProgram!.qCodes[0].platform = "QuMu";
                        }

                      }).catch(err => {
                        console.error("Error loading mutant code", err);
                      });

                      this.qumugenService.getQiskitCode(mutant.circuit!).then(response => {

                        if (mutant.circuit) {
                          const QCodeClass = require('../model/QCode').QCode;
                          if (!mutant.circuit.qCodes || mutant.circuit.qCodes.length === 0) {
                            mutant.circuit.qCodes = [new QCodeClass(undefined, response.wholeCode, "QuMu")];
                          } else {
                            mutant.circuit.qCodes[0].code = response.wholeCode;
                            mutant.circuit.qCodes[0].platform = "QuMu";
                          }
                        }

                        this.manager.clearExecutionStatus();
                        // Re-emit to notify subscribers like code component
                        this.manager.setSelectedMutant(mutant);
                      }).catch(err => {
                        console.error("Error loading mutant code", err);
                        this.manager.clearExecutionStatus();
                      });
                    }
                  }
                }
              }
            })
          );
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  selectTab(tab: 'info' | 'code' | 'visualization') {
    this.selectedTab = tab;
  }
}
