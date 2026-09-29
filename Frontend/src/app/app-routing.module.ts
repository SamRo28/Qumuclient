import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CircuitsConfigurationComponent } from './circuits-configuration/circuits-configuration.component';
import { MutantsInfoComponent } from './mutants-info/mutants-info.component';
import { MutantCycleInfoComponent } from './mutant-cycle-info/mutant-cycle-info.component';
import { StatisticsVisualizerComponent } from './statistics-visualizer/statistics-visualizer.component';
import { ExperimentsDashboardComponent } from './experiments-dashboard/experiments-dashboard.component';
import { ExperimentWizardComponent } from './experiment-wizard/experiment-wizard.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'experiments', component: ExperimentsDashboardComponent },
    { path: 'experiments/create', component: ExperimentWizardComponent },
    { path: 'project/:projectId', component: CircuitsConfigurationComponent },
    { path: 'project/:projectId/cycle/:cycleId', component: MutantCycleInfoComponent },
    { path: 'project/:projectId/cycle/:cycleId/mutant/:mutantId', component: MutantsInfoComponent },
    { path: 'statistics', component: StatisticsVisualizerComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
