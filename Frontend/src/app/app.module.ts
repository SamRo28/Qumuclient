import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OperatorsComponent } from './operators/operators.component';
import { CircuitComponent } from './circuit/circuit.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CircuitsConfigurationComponent } from './circuits-configuration/circuits-configuration.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MutantsInfoComponent } from './mutants-info/mutants-info.component';
import { MutantsCodeComponent } from './mutants-code/mutants-code.component';
import { MutantsVisualComponent } from './mutants-visual/mutants-visual.component';
import { MutantsGeneralComponent } from './mutants-general/mutants-general.component';
import { MutantCycleInfoComponent } from './mutant-cycle-info/mutant-cycle-info.component';
import { SaveButtonComponent } from './save-button/save-button.component';
import { ProjectNotesComponent } from './project-notes/project-notes.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { StatisticsVisualizerComponent } from './statistics-visualizer/statistics-visualizer.component';
import { ChatSideBarComponent } from './chat-side-bar/chat-side-bar.component';
import { CircuitViewerComponent } from './circuit-viewer/circuit-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorsComponent,
    CircuitComponent,
    SpinnerComponent,
    CircuitsConfigurationComponent,
    HomeComponent,
    SideBarComponent,
    MutantsInfoComponent,
    MutantsCodeComponent,
    MutantsVisualComponent,
    MutantsGeneralComponent,
    MutantCycleInfoComponent,
    SaveButtonComponent,
    ProjectNotesComponent,
    ThemeToggleComponent,
    ConfirmationModalComponent,
    StatisticsVisualizerComponent,
    ChatSideBarComponent,
    CircuitViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
