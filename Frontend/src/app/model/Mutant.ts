import { QProgram } from "./QProgram"
import { MutantResult } from "./MutantResult"

export class Mutant {
    mutantIndex? : number
    mutatedColumn? : number
    mutatedRow? : number
    mutationOperator? : string
    circuit? : QProgram
    result? : MutantResult

    constructor(mutant? : any) {
        
        this.mutantIndex = mutant.mutantIndex
        this.mutatedColumn = mutant.mutatedColumn
        this.mutatedRow = mutant.mutatedRow
        this.mutationOperator = mutant.mutationOperator
        this.circuit = new QProgram(undefined, mutant.quirk)
        
        if (mutant.result) {
            this.result = new MutantResult(mutant.result)
        }
    }



}