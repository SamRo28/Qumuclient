export class OperatorFamily {
    name? : string
    operators : Operator[] = []

    constructor(name : string, operators : any[]) {
        this.name = name
        for (let i=0; i<operators.length; i++)
            this.operators.push(new Operator(operators[i]))
    }

    select() {
        this.operators.forEach(op => op.selected=!op.selected)
    }
}

export class Operator {
    id? : number
    name? : string
    enabled? : boolean
    selected : boolean = false
    description? : string
    
    constructor(operator : any) {
        this.name = operator.name
        this.id = operator.id
        this.enabled = operator.enabled
        this.description = operator.description
        this.selected = operator.selected || false
    }
}