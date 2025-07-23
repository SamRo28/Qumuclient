import { ExecConfiguration } from "./ExecConfiguration"
import { Mutant } from "./Mutant"

export class MutantCycle {
    id : number = 0
    mutants: Mutant[] = []
    execConfiguration? : ExecConfiguration

    
    constructor( mutants? : Mutant[], id? : number, execConfiguration? : ExecConfiguration) {
        if (mutants) {
            this.mutants = [...mutants]   
            
        }
        if (id) {
            this.id = id
        }
        if(execConfiguration){
            this.execConfiguration = execConfiguration ;
        }
        else {
            this.execConfiguration = new ExecConfiguration();
        }
    }

    addMutant(mutant: Mutant) {
        this.mutants.push(mutant);
    }

}
