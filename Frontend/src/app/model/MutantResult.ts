export enum Result {
    KILLED = 'Killed',
    ALIVE = 'Alive',
    ZOMBIE = 'Zombie'
}

export class MutantResult {
    id? : number
    result?: Result

    constructor(MutantResult? : any) {
        this.id = MutantResult.id
        this.result = MutantResult.result
    }
}
