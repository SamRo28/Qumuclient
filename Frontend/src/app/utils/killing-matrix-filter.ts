import { Mutant } from '../model/Mutant';
import { Result } from '../model/MutantResult';

export type MatrixResultFilter = 'killed' | 'alive' | 'zombie' | 'pending';
export const ALL_RESULT_FILTERS: MatrixResultFilter[] = ['killed', 'alive', 'zombie', 'pending'];

/** Categoría global de un mutante (Result -> filtro; sin resultado -> 'pending'). */
export function resultCategory(mutant: Mutant): MatrixResultFilter {
    switch (mutant.result?.result) {
        case Result.KILLED: return 'killed';
        case Result.ALIVE: return 'alive';
        case Result.ZOMBIE: return 'zombie';
        default: return 'pending';
    }
}

/** Recuento por categoría sobre todas las filas. */
export function countByCategory<T extends { mutant: Mutant }>(rows: T[]): Record<MatrixResultFilter, number> {
    const counts: Record<MatrixResultFilter, number> = { killed: 0, alive: 0, zombie: 0, pending: 0 };
    for (const row of rows) {
        counts[resultCategory(row.mutant)]++;
    }
    return counts;
}

/** Filas que cumplen el filtro; conjunto vacío = sin filtro (devuelve `rows` tal cual). Mantiene el orden. */
export function filterRows<T extends { mutant: Mutant }>(rows: T[], active: ReadonlySet<MatrixResultFilter>): T[] {
    if (active.size === 0) return rows;
    return rows.filter(row => active.has(resultCategory(row.mutant)));
}

/**
 * Nuevo conjunto tras pulsar una categoría. Si quedan activas todas las categorías disponibles
 * devuelve el conjunto vacío (= All).
 */
export function toggleFilter(active: ReadonlySet<MatrixResultFilter>, f: MatrixResultFilter,
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
