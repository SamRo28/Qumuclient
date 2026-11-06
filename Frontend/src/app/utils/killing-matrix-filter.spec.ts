import { Mutant } from '../model/Mutant';
import { MutantResult, Result } from '../model/MutantResult';
import {
    countByCategory, filterRows, MatrixResultFilter, resultCategory, toggleFilter
} from './killing-matrix-filter';

const mutant = (result?: Result): Mutant => ({ result: result ? new MutantResult({ result }) : undefined } as Mutant);
const row = (id: string, result?: Result) => ({ id, mutant: mutant(result) });

describe('killing-matrix-filter', () => {
    const rows = [
        row('a', Result.KILLED), row('b', Result.ALIVE), row('c', Result.ZOMBIE),
        row('d', Result.KILLED), row('e')
    ];

    it('resultCategory', () => {
        expect(resultCategory(mutant(Result.KILLED))).toBe('killed');
        expect(resultCategory(mutant(Result.ALIVE))).toBe('alive');
        expect(resultCategory(mutant(Result.ZOMBIE))).toBe('zombie');
        expect(resultCategory(mutant())).toBe('pending');
    });

    it('countByCategory', () => {
        expect(countByCategory(rows)).toEqual({ killed: 2, alive: 1, zombie: 1, pending: 1 });
    });

    it('filterRows: vacío devuelve la misma referencia', () => {
        expect(filterRows(rows, new Set())).toBe(rows);
    });

    it('filterRows: un solo filtro mantiene el orden', () => {
        expect(filterRows(rows, new Set<MatrixResultFilter>(['killed'])).map(r => r.id)).toEqual(['a', 'd']);
    });

    it('filterRows: unión de categorías', () => {
        expect(filterRows(rows, new Set<MatrixResultFilter>(['alive', 'zombie'])).map(r => r.id)).toEqual(['b', 'c']);
    });

    describe('toggleFilter', () => {
        const available: MatrixResultFilter[] = ['killed', 'alive', 'zombie'];

        it('activa y desactiva', () => {
            const on = toggleFilter(new Set(), 'killed', available);
            expect([...on]).toEqual(['killed']);
            expect(toggleFilter(on, 'alive', available).size).toBe(2);
        });

        it('desactivar la última vuelve a vacío', () => {
            expect(toggleFilter(new Set<MatrixResultFilter>(['killed']), 'killed', available).size).toBe(0);
        });

        it('activar todas las disponibles equivale a All (vacío)', () => {
            const two = new Set<MatrixResultFilter>(['killed', 'alive']);
            expect(toggleFilter(two, 'zombie', available).size).toBe(0);
        });

        it('pending fuera de available no cuenta para "todas"', () => {
            const all = new Set<MatrixResultFilter>(['killed', 'alive']);
            expect(toggleFilter(all, 'zombie', available).size).toBe(0);
            // con pending disponible hacen falta las cuatro
            const four: MatrixResultFilter[] = ['killed', 'alive', 'zombie', 'pending'];
            expect(toggleFilter(new Set<MatrixResultFilter>(['killed', 'alive']), 'zombie', four).size).toBe(3);
        });
    });
});
