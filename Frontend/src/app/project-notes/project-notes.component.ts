import { Component, OnInit, OnDestroy } from '@angular/core';
import { ManagerService } from '../manager.service';
import { ProjectNote } from '../model/ProjectNote';
import { Project } from '../model/Project';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-project-notes',
    templateUrl: './project-notes.component.html',
    styleUrls: ['./project-notes.component.css']
})
export class ProjectNotesComponent implements OnInit, OnDestroy {

    // Estado del componente
    isPanelOpen: boolean = false;
    isModalOpen: boolean = false;
    currentProject?: Project;
    selectedNote?: ProjectNote;
    isEditMode: boolean = false;

    // Formulario de nota
    noteForm = {
        title: '',
        text: ''
    };

    private subscriptions = new Subscription();

    constructor(public manager: ManagerService) { }

    ngOnInit(): void {
        // Suscribirse a cambios en el proyecto seleccionado
        this.subscriptions.add(
            this.manager.selectedProject$.subscribe(project => {
                this.currentProject = project || undefined;
                // Cerrar panel si no hay proyecto
                if (!this.currentProject) {
                    this.isPanelOpen = false;
                    this.isModalOpen = false;
                }
            })
        );
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    /**
     * Verifica si hay un proyecto cargado
     */
    get hasProject(): boolean {
        return !!this.currentProject;
    }

    /**
     * Obtiene las notas ordenadas por timestamp descendente (más reciente primero)
     */
    get sortedNotes(): ProjectNote[] {
        if (!this.currentProject?.projectNotes) {
            return [];
        }
        return [...this.currentProject.projectNotes].sort((a, b) => {
            return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
        });
    }

    /**
     * Abre/cierra el panel de notas
     */
    togglePanel(): void {
        if (!this.hasProject) return;
        this.isPanelOpen = !this.isPanelOpen;
        if (!this.isPanelOpen) {
            // Cerrar modal también si se cierra el panel
            this.isModalOpen = false;
        }
    }

    /**
     * Abre el modal para crear una nueva nota
     */
    openCreateNoteModal(): void {
        this.isEditMode = false;
        this.selectedNote = undefined;
        this.noteForm = {
            title: '',
            text: ''
        };
        this.isModalOpen = true;
    }

    /**
     * Abre el modal para editar una nota existente
     */
    openEditNoteModal(note: ProjectNote): void {
        this.isEditMode = true;
        this.selectedNote = note;
        this.noteForm = {
            title: note.title,
            text: note.text
        };
        this.isModalOpen = true;
    }

    /**
     * Cierra el modal
     */
    closeModal(): void {
        this.isModalOpen = false;
        this.selectedNote = undefined;
        this.noteForm = {
            title: '',
            text: ''
        };
    }

    /**
     * Guarda la nota (crear o editar)
     */
    saveNote(): void {
        if (!this.currentProject) return;

        // Validación básica
        if (!this.noteForm.title.trim()) {
            alert('El título es obligatorio');
            return;
        }

        if (this.isEditMode && this.selectedNote) {
            // Editar nota existente
            this.selectedNote.title = this.noteForm.title;
            this.selectedNote.text = this.noteForm.text;
            this.selectedNote.updateTimestamp();
        } else {
            // Crear nueva nota
            const newNote = new ProjectNote(
                this.noteForm.title,
                this.noteForm.text,
                'QuMu' // Siempre QuMu para notas creadas desde la interfaz
            );
            this.currentProject.projectNotes.push(newNote);
        }

        // Marcar proyecto como modificado
        this.manager.markProjectAsModified();

        // Cerrar modal
        this.closeModal();
    }

    /**
     * Elimina una nota
     */
    deleteNote(): void {
        if (!this.currentProject || !this.selectedNote) return;

        const confirmDelete = confirm(`¿Estás seguro de que quieres eliminar la nota "${this.selectedNote.title}"?`);
        if (!confirmDelete) return;

        const index = this.currentProject.projectNotes.findIndex(n => n.id === this.selectedNote!.id);
        if (index !== -1) {
            this.currentProject.projectNotes.splice(index, 1);
            this.manager.markProjectAsModified();
            this.closeModal();
        }
    }

    /**
     * Formatea la fecha para mostrar
     */
    formatDate(date: Date): string {
        const d = new Date(date);
        const now = new Date();
        const diffMs = now.getTime() - d.getTime();
        const diffMins = Math.floor(diffMs / 60000);
        const diffHours = Math.floor(diffMs / 3600000);
        const diffDays = Math.floor(diffMs / 86400000);

        if (diffMins < 1) return 'Ahora mismo';
        if (diffMins < 60) return `Hace ${diffMins} min`;
        if (diffHours < 24) return `Hace ${diffHours}h`;
        if (diffDays < 7) return `Hace ${diffDays}d`;

        return d.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }

    /**
     * Previene el cierre del modal al hacer click dentro del contenido
     */
    stopPropagation(event: Event): void {
        event.stopPropagation();
    }
}
