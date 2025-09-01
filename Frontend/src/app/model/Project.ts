import { QProgram } from "./QProgram";
import { MutantCycle } from "./MutantCycle";

export class Project {
    

    id?: string = crypto.randomUUID();
    name: string = "";
    qProgram: QProgram = new QProgram();
    mutantCycles: MutantCycle[] = [];



    constructor(id?: string, name?: string, qProgram?: QProgram, mutantCycles?: MutantCycle[]) {
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

    getQubits(): number {
      return this.qProgram.getQubits();
    }

}
