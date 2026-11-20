export class ExecConfiguration {
    id?: string
    executionDate?: Date
    machine?: string
    execAlgorithm?: string
    testSuiteId?: string
    toleratedError?: number
    zombieError?: number
    shots?: number

    constructor(execConfiguration?: any) {
        this.id = execConfiguration?.id || crypto.randomUUID()
        this.executionDate = execConfiguration?.executionDate ? new Date(execConfiguration.executionDate) : undefined
        this.machine = execConfiguration?.machine
        this.execAlgorithm = execConfiguration?.execAlgorithm
        this.testSuiteId = execConfiguration?.testSuiteId
        this.toleratedError = execConfiguration?.toleratedError
        this.zombieError = execConfiguration?.zombieError
        this.shots = execConfiguration?.shots
    }

}