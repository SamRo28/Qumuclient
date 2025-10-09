export class ExecConfiguration {
    id? : number
    executionDate? : Date
    machine? : string
    execAlgorithm? : string

    constructor(execConfiguration?: any) {
        this.id = execConfiguration?.id
        this.executionDate = execConfiguration?.executionDate ? new Date(execConfiguration.executionDate) : undefined
        this.machine = execConfiguration?.machine
        this.execAlgorithm = execConfiguration?.execAlgorithm
    }

}