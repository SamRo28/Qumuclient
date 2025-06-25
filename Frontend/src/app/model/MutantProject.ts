import { Mutant } from "./Mutant"

export class MutantProject {
    id : number = 0
    mutants: Mutant[] = []

    
    constructor( mutants? : Mutant[], id? : number) {
        if (mutants) {
            this.mutants = [...mutants]   
            
        }
        if (id) {
            this.id = id
        }
    }

    addMutant(mutant: Mutant) {
        this.mutants.push(mutant);
    }

}
