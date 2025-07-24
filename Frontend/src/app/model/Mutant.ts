import { QProgram } from "./QProgram"
import { MutantResult } from "./MutantResult"

export class Mutant {
    mutantIndex? : number
    mutatedColumn? : number
    mutatedRow? : number
    mutationOperator? : string
    circuit? : QProgram
    result? : MutantResult

    constructor(mutantIndex? : number, mutatedColumn? : number, mutatedRow? : number, mutationOperator? : string, circuit? : QProgram) {

        this.mutantIndex = mutantIndex;
        this.mutatedColumn = mutatedColumn;
        this.mutatedRow = mutatedRow;
        this.mutationOperator = mutationOperator;
        this.circuit = circuit;

    }



}