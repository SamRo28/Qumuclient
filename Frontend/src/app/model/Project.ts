import { QProgram } from "./QProgram";
import { MutantCycle } from "./MutantCycle";

export class Project {

    id?: number = -1;
    name?: string = "";
    qProgram: QProgram = new QProgram();
    mutantCycles: MutantCycle[] = [];



    constructor(id?: number, name?: string, qProgram?: QProgram, mutantCycles?: MutantCycle[]) {
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
    }

    addMutantCycle(mutantCycle: MutantCycle) {
        this.mutantCycles.push(mutantCycle)
    }



}
