import { Mutant } from "./Mutant"

export class MutantProject {
    id : number = -1
    mutants: Mutant[] = []

    
    constructor( mutants? : Mutant[]) {
        if (mutants) {
            this.mutants = [...mutants]   
            
        }
    }

    addMutant(mutant: Mutant) {
        this.mutants.push(mutant);
    }

}
