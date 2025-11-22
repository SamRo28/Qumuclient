import { QProgram } from "./QProgram";
import { MutantCycle } from "./MutantCycle";

export class Project {


    id?: string = crypto.randomUUID();
    name: string = "";
    qProgram: QProgram = new QProgram();
    mutantCycles: MutantCycle[] = [];

    /**
     * Estado de guardado del proyecto (solo frontend, no se persiste en backend)
     * - false: El proyecto tiene cambios sin guardar
     * - true: El proyecto está guardado y sincronizado
     */
    private _saved: boolean = false;

    get saved(): boolean {
        return this._saved;
    }

    set saved(value: boolean) {
        this._saved = value;
    }

    /**
     * Marca el proyecto como modificado (no guardado)
     */
    markAsModified(): void {
        this._saved = false;
    }

    /**
     * Marca el proyecto como guardado
     */
    markAsSaved(): void {
        this._saved = true;
    }

    constructor(id?: string, name?: string, qProgram?: QProgram, mutantCycles?: MutantCycle[], fromServer: boolean = false) {
        if (id) {
            this.id = id;
        }
        if (name) {
            this.name = name;
        }
        if (qProgram) {
            this.qProgram = qProgram;
        }
        if (mutantCycles) {
            this.mutantCycles = mutantCycles;
        }

        // Si viene del servidor, está guardado; si es nuevo, no lo está
        this._saved = fromServer;
    }

    addMutantCycle(mutantCycle: MutantCycle) {
        this.mutantCycles.push(mutantCycle)
    }

    getQubits(): number {
        return this.qProgram.getQubits();
    }

}
