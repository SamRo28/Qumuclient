import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CircuitsConfigurationComponent } from './circuits-configuration/circuits-configuration.component';
import { MutantsInfoComponent } from './mutants-info/mutants-info.component';
import { MutantCycleInfoComponent } from './mutant-cycle-info/mutant-cycle-info.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'project/:projectId', component: CircuitsConfigurationComponent },
    { path: 'project/:projectId/cycle/:cycleId', component: MutantCycleInfoComponent },
    { path: 'project/:projectId/cycle/:cycleId/mutant/:mutantId', component: MutantsInfoComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
