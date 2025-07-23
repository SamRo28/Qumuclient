import { Mutant } from "./Mutant"
import { MutantCycle } from "./MutantCycle"
import { QCode } from "./QCode"

export class QProgram {
    id : number = 0
    name? : string
    qCode?: QCode
    qubits : number = -1
    outputQubits? : string
    inputQubits? : string

    
    quirkCode : any
    textQuirkCode : string = ""
    qiskitCode : string[] = []
    
   
    mutableColumns : string = "-1,"
    mutableRows : string = ""
    mutantsProjects: MutantCycle[] = []

    constructor(id? : number, quirkCode? : any) {
        if (id)
            this.id = id
        if (quirkCode) {
            this.quirkCode = quirkCode
            this.textQuirkCode = JSON.stringify(quirkCode)
            this.qubits = this.getQubits()
            
            // Solo procesar columnas y filas si quirkCode tiene la estructura correcta
            if (quirkCode.cols && Array.isArray(quirkCode.cols)) {
                for (let i=0; i<quirkCode.cols.length; i++)
                    this.mutableColumns = this.mutableColumns + i + "," 
                if (this.mutableColumns.endsWith(","))
                    this.mutableColumns = this.mutableColumns.substring(0, this.mutableColumns.length-1)

                for (let i=0; i<this.qubits; i++)
                    this.mutableRows = this.mutableRows + i + "," 
                if (this.mutableRows.endsWith(","))
                    this.mutableRows = this.mutableRows.substring(0, this.mutableRows.length-1)
            }
        }
        this.qCode = new QCode();
    }

    getNumberOfInputQubits() : number {
        return this.inputQubits!.split(",").length
    }


    getColumns() {
        if (this.quirkCode && this.quirkCode.cols)
            return this.quirkCode.cols.length
        return 0 // Retornar 0 en lugar de -1 para circuitos sin código
    }

    getQubits() {
        if (this.qubits==-1) {
            // Verificar si quirkCode existe y tiene la estructura correcta
            if (!this.quirkCode || !this.quirkCode.cols || this.quirkCode.cols.length == 0)
                return 0; // Retornar 0 en lugar de -1 para circuitos sin código
            let columns = this.quirkCode.cols
            for (let i=0; i<columns.length; i++)
                if (columns[i].length>this.qubits)
                    this.qubits = columns[i].length
        }
        return this.qubits
    }

    buildFromQiskitCode(code : string) {
        let tokenStart = "q = QuantumRegister("
        let tokenEnd = ", 'q')"
        let start = code.indexOf(tokenStart) + tokenStart.length
        let end = code.indexOf(tokenEnd)
        let qubits = parseInt(code.substring(start, end))
        this.qubits = qubits

        tokenStart = "qc.add_register(c)"
        start = code.indexOf(tokenStart) + tokenStart.length
        tokenEnd = "qc.measure("
        end = code.indexOf(tokenEnd)

        let gatesCode = code.substring(start, end).trim()
        let gates = gatesCode.split("\n")
        let cols = []
        for (let i=0; i<gates.length; i++) {
            let gate = gates[i]
            gate = gate.substring(3)
            let gateName = gate.substring(0, gate.indexOf("("))
            let gateQubits = this.getGateQubits(gate)
            let col = []
            if (gateQubits.length==1) {
                for (let j=0; j<gateQubits[0]; j++)
                    col.push(1)
                col.push(gateName.toUpperCase())
            } else {
                for (let j=0; j<gateQubits.length-1; j++) {
                    if (gateName=="ccx")
                        col.push("•")
                }
                if (gateName=="ccx")
                    col.push("X")
            }
            cols.push(col)
        }
        let result = {
            cols : cols
        }
        this.quirkCode = result
        this.textQuirkCode = JSON.stringify(this.quirkCode)

        tokenStart = "qc.measure("
        tokenEnd = "job = "
        start = code.indexOf(tokenStart)
        end = code.indexOf(tokenEnd)
        let measures = code.substring(start, end).trim().split("\n")
        this.outputQubits = ""
        for (let i=0; i<measures.length; i++) {
            let measure = measures[i]
            let posIzdo = measure.indexOf("q[")
            let posDcho = measure.indexOf("],")
            let qubit = measure.substring(posIzdo+3, posDcho-1)
            this.outputQubits = this.outputQubits + qubit + ","
        }
        this.outputQubits = this.outputQubits.substring(0, this.outputQubits.length-1)
    }

    private getGateQubits(gate : string) {
        let posIzdo = []
        let posDcho = []
        for (let i=0; i<gate.length; i++) {
            if (gate[i]=="[")
                posIzdo.push(i)
            else if (gate[i]=="]")
                posDcho.push(i)
        }
        let qubits = []
        for (let i=0; i<posIzdo.length; i++) {
            let qubit = gate.substring(posIzdo[i]+1, posDcho[i])
            qubits.push(parseInt(qubit))
        }
        return qubits
    }

    addMutantCycle(MutantCycle : MutantCycle) {
        this.mutantsProjects.push(MutantCycle)
    }

    setMutableColumns() {
        if (this.quirkCode && this.quirkCode.cols && Array.isArray(this.quirkCode.cols)) {
            this.mutableColumns = "-1,"; // Reiniciar
            for (let i=0; i<this.quirkCode.cols.length; i++)
                this.mutableColumns = this.mutableColumns + i + "," 
            if (this.mutableColumns.endsWith(","))
                this.mutableColumns = this.mutableColumns.substring(0, this.mutableColumns.length-1)
        }
    }

    setMutableRows() {
        if (this.qubits > 0) {
            this.mutableRows = ""; // Reiniciar
            for (let i=0; i<this.qubits; i++)
                this.mutableRows = this.mutableRows + i + "," 
            if (this.mutableRows.endsWith(","))
                this.mutableRows = this.mutableRows.substring(0, this.mutableRows.length-1)
        }
    }
}