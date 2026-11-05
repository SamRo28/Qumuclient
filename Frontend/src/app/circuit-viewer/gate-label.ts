/** Ancho aproximado de un carácter en JetBrains Mono a 0.75rem. */
export const CHAR_WIDTH = 7.3;

export interface ColumnLayoutOptions {
    /** Ancho mínimo de una columna */
    colWidth: number;
    /** Tamaño base (cuadrado) de una puerta */
    gateSize: number;
    /** Ancho máximo de la caja de una puerta */
    maxGateWidth: number;
    /** Margen horizontal interior de la caja alrededor del texto */
    textPadding: number;
    /** Margen libre a cada lado de la caja dentro de su columna */
    colMargin: number;
    /** Posición x del centro de la primera columna */
    paddingX: number;
}

export interface ColumnLayout {
    /** Ancho de cada columna */
    colWidths: number[];
    /** Ancho de la caja de las puertas de cada columna */
    gateWidths: number[];
    /** x donde empieza cada columna */
    colStart: number[];
    /** x del centro de cada columna */
    colX: number[];
    /** Suma de todos los anchos de columna */
    totalColsWidth: number;
}

export const DEFAULT_LAYOUT_OPTIONS: ColumnLayoutOptions = {
    colWidth: 70,
    gateSize: 38,
    maxGateWidth: 160,
    textPadding: 16,
    colMargin: 16,
    paddingX: 90
};

/** Ancho estimado del texto de una etiqueta. */
export function labelWidth(label: string): number {
    return (label ?? '').length * CHAR_WIDTH;
}

/** Nº máximo de caracteres que caben en `width` píxeles. */
export function maxCharsForWidth(width: number): number {
    return Math.max(1, Math.floor(width / CHAR_WIDTH));
}

/** Recorta con "…" para que quepan como mucho `maxChars` caracteres. */
export function displayLabel(label: string, maxChars: number): string {
    const text = label ?? '';
    if (text.length <= maxChars) {
        return text;
    }
    if (maxChars <= 1) {
        return '…';
    }
    return text.slice(0, maxChars - 1) + '…';
}

/**
 * Calcula el ancho de cada columna a partir de las etiquetas de las puertas que contiene.
 * Con etiquetas cortas reproduce el layout uniforme anterior (columnas de `colWidth`).
 */
export function computeColumnLayout(
    labelsPerColumn: string[][],
    options: ColumnLayoutOptions = DEFAULT_LAYOUT_OPTIONS
): ColumnLayout {
    const o = options;
    const colWidths: number[] = [];
    const gateWidths: number[] = [];
    const colStart: number[] = [];
    const colX: number[] = [];

    let cursor = o.paddingX - o.colWidth / 2;
    for (const labels of labelsPerColumn) {
        const widest = labels.reduce((m, l) => Math.max(m, labelWidth(l)), 0);
        const gateWidth = Math.max(o.gateSize, Math.min(o.maxGateWidth, widest + o.textPadding));
        const colWidth = Math.max(o.colWidth, gateWidth + 2 * o.colMargin);
        colWidths.push(colWidth);
        gateWidths.push(gateWidth);
        colStart.push(cursor);
        colX.push(cursor + colWidth / 2);
        cursor += colWidth;
    }
    return {
        colWidths,
        gateWidths,
        colStart,
        colX,
        totalColsWidth: colWidths.reduce((a, b) => a + b, 0)
    };
}
