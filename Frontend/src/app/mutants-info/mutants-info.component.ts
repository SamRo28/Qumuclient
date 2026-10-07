import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
  loadingMutant = false;
  private subscriptions = new Subscription();

  constructor(
    public manager: ManagerService,
    private route: ActivatedRoute,
    private qumugenService: QumugenService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.route.paramMap.subscribe(params => {
        const projectId = params.get('projectId');
        const cycleId = params.get('cycleId');
        const mutantId = params.get('mutantId'); // This is mutantIndex

        if (projectId !== null && cycleId !== null && mutantId !== null) {
          this.subscriptions.add(
            this.manager.projects$.subscribe(projects => {
              const project = projects.find(p => p.id === projectId);
              if (project) {
                if (this.manager.selectedProject !== project) {
                  this.manager.setselectedProject(project);
                }

                const cycle = project.mutantCycles.find(c => c.id == Number(cycleId));
                if (cycle) {
                  this.manager.setSelectedMutantCycle(cycle);

                  const currentSelected = this.manager.selectedMutant;
                  if (currentSelected && currentSelected.mutantIndex == Number(mutantId) && currentSelected.circuit?.qCircuit?.quirkCode) {
                    return;
                  }

                  this.loadingMutant = true;
                  this.manager.loadMutant(cycle, Number(mutantId)).then(mutant => {
                    if (!mutant) {
                      this.manager.showNotification('Mutant not found', 'error', 5000);
                      return;
                    }
                    this.manager.setSelectedMutant(mutant);

                    // Check if code is loaded, if not, load it
                    if (!mutant.circuit?.qCodes || mutant.circuit.qCodes.length === 0 || !mutant.circuit.qCodes[0].code) {

                      if (project.qProgram) {
                        this.qumugenService.getQiskitCode(project.qProgram).then(response => {
                          if (!project.qProgram!.qCodes || project.qProgram!.qCodes.length === 0) {
                            const QCodeClass = require('../model/QCode').QCode;
                            project.qProgram!.qCodes = [new QCodeClass(undefined, response.wholeCode, "QuMu")];
                          } else {
                            project.qProgram!.qCodes[0].code = response.wholeCode;
                            project.qProgram!.qCodes[0].platform = "QuMu";
                          }

                        }).catch(err => {
                          console.error("Error loading project code", err);
                        });
                      }

                      if (mutant.circuit) {
                        this.qumugenService.getQiskitCode(mutant.circuit).then(response => {

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
                  }).catch(err => {
                    console.error("Error loading mutant", err);
                    this.manager.showNotification('Error loading mutant', 'error', 5000);
                  }).finally(() => {
                    this.loadingMutant = false;
                    this.cdr.detectChanges();
                  });
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
