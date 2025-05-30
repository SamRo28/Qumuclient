import { Mutant } from "./Mutant"

export class MutantProject {
    id : string = ""
    mutants: Mutant[] = []

    
    constructor(id? : string, mutants? : Mutant[]) {
        if (id)
            this.id = id
        if (mutants) {
            this.mutants = [...mutants]   
            
        }
    }
}
