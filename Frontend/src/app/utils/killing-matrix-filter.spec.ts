import { Mutant } from '../model/Mutant';
import { MutantResult, Result } from '../model/MutantResult';
import {
    MatrixResultFilter, MatrixRow, availableCategories, countByCategory, filterRows, resultsLabel,
    rowCategory, searchTestCases, toggleResult
} from './killing-matrix-filter';

const mutant = (result?: Result): Mutant => ({ result: result ? new MutantResult({ result }) : undefined } as Mutant);
const cell = (input: string, s: 'K' | 'A' | 'Z') =>
    ({ input, killed: s === 'K', zombie: s === 'Z', error: 0 });
const set = (...f: MatrixResultFilter[]) => new Set<MatrixResultFilter>(f);

describe('killing-matrix-filter', () => {
    // M0 = {00:K, 01:A} (global Killed), M1 = {00:A, 01:A} (Alive), M2 = {00:Z, 01:A} (Zombie), M3 = sin resultados
    const M0: MatrixRow = { mutant: mutant(Result.KILLED), cells: [cell('00', 'K'), cell('01', 'A')] };
    const M1: MatrixRow = { mutant: mutant(Result.ALIVE), cells: [cell('00', 'A'), cell('01', 'A')] };
    const M2: MatrixRow = { mutant: mutant(Result.ZOMBIE), cells: [cell('00', 'Z'), cell('01', 'A')] };
    const M3: MatrixRow = { mutant: mutant(), cells: [] };
    const rows = [M0, M1, M2, M3];

    it('rowCategory', () => {
        expect(rowCategory(M0, null)).toBe('killed');
        expect(rowCategory(M0, '01')).toBe('alive');
        expect(rowCategory(M0, '00')).toBe('killed');
        expect(rowCategory(M2, '00')).toBe('zombie');
        expect(rowCategory(M3, '00')).toBe('pending');
        expect(rowCategory(M3, null)).toBe('pending');
    });

    it('countByCategory', () => {
        expect(countByCategory(rows, null)).toEqual({ killed: 1, alive: 1, zombie: 1, pending: 1 });
        expect(countByCategory(rows, '01')).toEqual({ killed: 0, alive: 3, zombie: 0, pending: 1 });
    });

    it('filterRows: ejemplo "vivos con el caso de prueba 00"', () => {
        expect(filterRows(rows, { results: set('alive'), testCase: '00' })).toEqual([M1]);
        expect(filterRows(rows, { results: set('alive'), testCase: '01' })).toEqual([M0, M1, M2]);
    });

    it('filterRows: unión sin caso de prueba y sin filtro devuelve la misma referencia', () => {
        expect(filterRows(rows, { results: set('alive', 'zombie'), testCase: null })).toEqual([M1, M2]);
        expect(filterRows(rows, { results: set(), testCase: '00' })).toBe(rows);
        expect(filterRows(rows, { results: set(), testCase: null })).toBe(rows);
    });

    describe('toggleResult', () => {
        const available: MatrixResultFilter[] = ['killed', 'alive', 'zombie'];

        it('activa, desactiva y la última vuelve a vacío', () => {
            const on = toggleResult(set(), 'killed', available);
            expect([...on]).toEqual(['killed']);
            expect(toggleResult(on, 'alive', available).size).toBe(2);
            expect(toggleResult(on, 'killed', available).size).toBe(0);
        });

        it('marcar todas las disponibles equivale a All', () => {
            expect(toggleResult(set('killed', 'alive'), 'zombie', available).size).toBe(0);
        });

        it('pending no disponible no cuenta para "todas"', () => {
            expect(toggleResult(set('killed', 'alive'), 'zombie', available).size).toBe(0);
            const four: MatrixResultFilter[] = [...available, 'pending'];
            expect(toggleResult(set('killed', 'alive'), 'zombie', four).size).toBe(3);
        });
    });

    it('availableCategories', () => {
        expect(availableCategories({ killed: 1, alive: 0, zombie: 0, pending: 0 })).toEqual(['killed', 'alive', 'zombie']);
        expect(availableCategories({ killed: 1, alive: 0, zombie: 0, pending: 2 })).toContain('pending');
    });

    it('searchTestCases', () => {
        expect(searchTestCases(['0000', '0001', '0110'], '01')).toEqual(['0001', '0110']);
        expect(searchTestCases(['0000', '0001'], '')).toEqual(['0000', '0001']);
        expect(searchTestCases(['0000', '0001'], ' 0 0 0 1 ')).toEqual(['0001']);
    });

    it('resultsLabel', () => {
        expect(resultsLabel(set())).toBe('All results');
        expect(resultsLabel(set('alive'))).toBe('Alive');
        expect(resultsLabel(set('zombie', 'alive'))).toBe('Alive, Zombie');
    });
});
