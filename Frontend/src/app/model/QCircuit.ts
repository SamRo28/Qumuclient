export class QCircuit {
    id: string = crypto.randomUUID();
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

            if (quirkCode.cols && Array.isArray(quirkCode.cols)) {
                for (let i = 0; i < quirkCode.cols.length; i++) {
                    this.mutableColumns += i + ",";
                }
                if (this.mutableColumns.endsWith(",")) {
                    this.mutableColumns = this.mutableColumns.substring(0, this.mutableColumns.length - 1);
                }

                let numQubits = quirkCode.qubits;
                const calculatedQubits = QCircuit.calculateQubits(quirkCode);
                if (!numQubits || numQubits < calculatedQubits) {
                    numQubits = calculatedQubits;
                }

                for (let i = 0; i < numQubits; i++) {
                    this.mutableRows += i + ",";
                }
                if (this.mutableRows.endsWith(",")) {
                    this.mutableRows = this.mutableRows.substring(0, this.mutableRows.length - 1);
                }
            }
        }


    }


    calculateMutableColumns(): string {
        if (!this.quirkCode) {
            return "";
        }
        let mutableColumns = "";
        for (let i = 0; i < this.quirkCode.cols.length; i++) {
            mutableColumns += i + ",";
        }
        if (mutableColumns.endsWith(",")) {
            mutableColumns = mutableColumns.substring(0, mutableColumns.length - 1);
        }
        return mutableColumns;
    }

    calculateMutableRows(): string {
        if (!this.quirkCode) {
            return "";
        }
        let numQubits = 0;
        const calculatedQubits = QCircuit.calculateQubits(this.quirkCode);
        if (this.quirkCode.qubits) {
            numQubits = Math.max(this.quirkCode.qubits, calculatedQubits);
        } else {
            numQubits = calculatedQubits;
        }

        let mutableRows = "";
        for (let i = 0; i < numQubits; i++) {
            mutableRows += i + ",";
        }
        if (mutableRows.endsWith(",")) {
            mutableRows = mutableRows.substring(0, mutableRows.length - 1);
        }
        return mutableRows;
    }

    static calculateQubits(quirkCode: any): number {
        if (!quirkCode || !Array.isArray(quirkCode.cols)) {
            return 0;
        }

        const customGatesMap = new Map<string, any>();
        if (Array.isArray(quirkCode.gates)) {
            for (const gate of quirkCode.gates) {
                if (gate && typeof gate.id === 'string') {
                    customGatesMap.set(gate.id, gate);
                }
            }
        }

        const calculatedHeights = new Map<string, number>();
        const calculating = new Set<string>();

        const getCustomGateHeight = (customGate: any): number => {
            const id = customGate.id;
            if (calculatedHeights.has(id)) {
                return calculatedHeights.get(id)!;
            }
            if (calculating.has(id)) {
                return 1;
            }
            calculating.add(id);

            let height = 1;
            if (customGate.matrix) {
                const matrixLength = Array.isArray(customGate.matrix) ? customGate.matrix.length : 0;
                if (matrixLength > 0) {
                    height = Math.round(Math.log2(matrixLength));
                }
            } else if (customGate.circuit) {
                height = getCircuitQubits(customGate.circuit);
            }

            calculating.delete(id);
            calculatedHeights.set(id, height);
            return height;
        };

        const getGateHeight = (gate: any): number => {
            if (gate === null || gate === undefined) {
                return 1;
            }
            let id = "";
            if (typeof gate === 'string') {
                id = gate;
            } else if (typeof gate === 'object' && typeof gate.id === 'string') {
                id = gate.id;
            } else {
                return 1;
            }

            if (id.startsWith('~') && customGatesMap.has(id)) {
                return getCustomGateHeight(customGatesMap.get(id));
            }
            return 1;
        };

        function getCircuitQubits(circuit: any): number {
            if (!circuit || !Array.isArray(circuit.cols)) {
                return 1;
            }
            let maxQubits = 1;
            for (const col of circuit.cols) {
                if (Array.isArray(col)) {
                    for (let i = 0; i < col.length; i++) {
                        const h = getGateHeight(col[i]);
                        if (i + h > maxQubits) {
                            maxQubits = i + h;
                        }
                    }
                }
            }
            return maxQubits;
        }

        return getCircuitQubits(quirkCode);
    }
}