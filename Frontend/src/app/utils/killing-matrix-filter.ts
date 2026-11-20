import { Mutant } from '../model/Mutant';
import { Result } from '../model/MutantResult';

export type MatrixResultFilter = 'killed' | 'alive' | 'zombie' | 'pending';
export const ALL_RESULT_FILTERS: MatrixResultFilter[] = ['killed', 'alive', 'zombie', 'pending'];

export interface MatrixCell { input: string; killed: boolean; zombie: boolean; error: number; }
export interface MatrixRow { mutant: Mutant; cells: MatrixCell[]; }
export interface MatrixFilter { results: ReadonlySet<MatrixResultFilter>; testCase: string | null; }

export const RESULT_LABELS: Record<MatrixResultFilter, string> = {
    killed: 'Killed', alive: 'Alive', zombie: 'Zombie', pending: 'Pending'
};
export const RESULT_BADGE_TEXT: Record<MatrixResultFilter, string> = {
    killed: 'K', alive: 'A', zombie: 'Z', pending: '–'
};
export const RESULT_BADGE_CLASS: Record<MatrixResultFilter, string> = {
    killed: 'killed', alive: 'alive', zombie: 'zombie', pending: 'not-executed'
};

/** Categoría global de un mutante (Result -> filtro; sin resultado -> 'pending'). */
export function resultCategory(mutant: Mutant): MatrixResultFilter {
    switch (mutant.result?.result) {
        case Result.KILLED: return 'killed';
        case Result.ALIVE: return 'alive';
        case Result.ZOMBIE: return 'zombie';
        default: return 'pending';
    }
}

/**
 * Categoría de una fila: resultado global si testCase es null; si no, el de su celda en esa
 * columna (K -> killed, Z -> zombie, A -> alive; sin celda -> 'pending').
 */
export function rowCategory(row: MatrixRow, testCase: string | null): MatrixResultFilter {
    if (testCase === null) return resultCategory(row.mutant);
    const cell = row.cells.find(c => c.input === testCase);
    if (!cell) return 'pending';
    return cell.killed ? 'killed' : (cell.zombie ? 'zombie' : 'alive');
}

/** Recuento por categoría (según testCase). */
export function countByCategory(rows: MatrixRow[], testCase: string | null): Record<MatrixResultFilter, number> {
    const counts: Record<MatrixResultFilter, number> = { killed: 0, alive: 0, zombie: 0, pending: 0 };
    for (const row of rows) {
        counts[rowCategory(row, testCase)]++;
    }
    return counts;
}

/** Categorías que se ofrecen: killed, alive y zombie siempre; pending solo si su recuento > 0. */
export function availableCategories(counts: Record<MatrixResultFilter, number>): MatrixResultFilter[] {
    return ALL_RESULT_FILTERS.filter(f => f !== 'pending' || counts.pending > 0);
}

/**
 * Filas que cumplen el filtro, en el orden original. Sin filtro de resultado devuelve `rows`
 * (misma referencia) aunque haya testCase: en ese caso solo se resalta la columna.
 */
export function filterRows(rows: MatrixRow[], filter: MatrixFilter): MatrixRow[] {
    if (filter.results.size === 0) return rows;
    return rows.filter(row => filter.results.has(rowCategory(row, filter.testCase)));
}

/** Conjunto tras marcar/desmarcar una categoría; si quedan marcadas todas las disponibles, devuelve vacío (= All). */
export function toggleResult(active: ReadonlySet<MatrixResultFilter>, f: MatrixResultFilter,
                             available: MatrixResultFilter[]): Set<MatrixResultFilter> {
    const next = new Set(active);
    if (next.has(f)) {
        next.delete(f);
    } else {
        next.add(f);
    }
    if (available.length > 0 && available.every(a => next.has(a))) {
        return new Set();
    }
    return next;
}

/** Casos de prueba que contienen `query` (sin espacios); query vacía -> todos. */
export function searchTestCases(headers: string[], query: string): string[] {
    const q = (query || '').replace(/\s+/g, '');
    return q ? headers.filter(h => h.includes(q)) : headers;
}

/** Texto del activador del desplegable Result. */
export function resultsLabel(active: ReadonlySet<MatrixResultFilter>): string {
    if (active.size === 0) return 'All results';
    return ALL_RESULT_FILTERS.filter(f => active.has(f)).map(f => RESULT_LABELS[f]).join(', ');
}
