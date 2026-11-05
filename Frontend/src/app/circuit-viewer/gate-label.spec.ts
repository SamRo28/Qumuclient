import { computeColumnLayout, displayLabel, labelWidth, maxCharsForWidth, DEFAULT_LAYOUT_OPTIONS } from './gate-label';

describe('gate-label', () => {
    it('labelWidth escala con la longitud', () => {
        expect(labelWidth('')).toBe(0);
        expect(labelWidth('H')).toBeCloseTo(7.3);
        expect(labelWidth('1234567890')).toBeCloseTo(73);
    });

    it('displayLabel recorta con puntos suspensivos', () => {
        expect(displayLabel('H', 5)).toBe('H');
        expect(displayLabel('abcde', 5)).toBe('abcde');
        expect(displayLabel('abcdefghij', 5)).toBe('abcd…');
        expect(displayLabel('abcdefghij', 1)).toBe('…');
    });

    it('maxCharsForWidth nunca baja de 1', () => {
        expect(maxCharsForWidth(0)).toBe(1);
        expect(maxCharsForWidth(73)).toBe(10);
    });

    it('con etiquetas cortas mantiene columnas uniformes de 70', () => {
        const l = computeColumnLayout([['H'], ['X'], []]);
        expect(l.colWidths).toEqual([70, 70, 70]);
        expect(l.gateWidths).toEqual([38, 38, 38]);
        // El centro de la primera columna es paddingX, igual que el layout anterior
        expect(l.colX[0]).toBe(DEFAULT_LAYOUT_OPTIONS.paddingX);
        expect(l.colX[1] - l.colX[0]).toBe(70);
        expect(l.totalColsWidth).toBe(210);
    });

    it('un nombre largo ensancha su columna hasta el máximo', () => {
        const long = 'x'.repeat(30); // 219 px -> topado en 160
        const l = computeColumnLayout([['H'], [long], ['X']]);
        expect(l.gateWidths[1]).toBe(160);
        expect(l.colWidths[1]).toBe(192);
        // Las columnas siguientes se desplazan
        expect(l.colStart[2]).toBe(l.colStart[1] + 192);
        expect(l.colX[2]).toBeGreaterThan(l.colX[1]);
        // y el texto recortado cabe en la caja
        const chars = maxCharsForWidth(l.gateWidths[1] - DEFAULT_LAYOUT_OPTIONS.textPadding);
        expect(displayLabel(long, chars).length).toBeLessThanOrEqual(chars);
        expect(displayLabel(long, chars).endsWith('…')).toBeTrue();
    });

    it('un nombre mediano ensancha sin recortar', () => {
        const l = computeColumnLayout([['abcdefghij']]); // 73 + 16 = 89
        expect(l.gateWidths[0]).toBeCloseTo(89);
        expect(l.colWidths[0]).toBeCloseTo(121);
    });
});
