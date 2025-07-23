export class QCircuit {
    id: string = "";
    quirkCode: any;
    textQuirkCode: string = "";
    
    
    mutableColumns: string = "-1,";
    mutableRows: string = "";
    

    constructor(id?: string, quirkCode?: any) {
        if (id) {
            this.id = id;
        }
        if (quirkCode) {
            this.quirkCode = quirkCode;
            this.textQuirkCode = JSON.stringify(quirkCode);
            // Initialize mutableColumns and mutableRows based on quirkCode
            if (quirkCode.cols && Array.isArray(quirkCode.cols)) {
                for (let i = 0; i < quirkCode.cols.length; i++) {
                    this.mutableColumns += i + ",";
                }
                if (this.mutableColumns.endsWith(",")) {
                    this.mutableColumns = this.mutableColumns.substring(0, this.mutableColumns.length - 1);
                }

                for (let i = 0; i < quirkCode.qubits; i++) {
                    this.mutableRows += i + ",";
                }
                if (this.mutableRows.endsWith(",")) {
                    this.mutableRows = this.mutableRows.substring(0, this.mutableRows.length - 1);
                }
            }
        }
    }
}