import { KillRateGroup, Subsumption, SubsumptionClass } from './StatisticsResponse';

/** Nombres de los tests que matan a una clase, truncados a `max` con sufijo " +N". */
export function classTestNames(s: Subsumption, c: SubsumptionClass, max = 5): string {
    const names = (c.killed_by || [])
        .map(i => s.tests[i])
        .filter(n => n !== undefined);
    const shown = names.slice(0, max).join(', ');
    return names.length > max ? `${shown} +${names.length - max}` : shown;
}

export function killRateGroupLabel(g: KillRateGroup, total: number): { label: string; displayValue: string; tooltip: string } {
    const count = g.mutants.length;
    return {
        label: `Killed by ${g.killed}/${total} tests`,
        displayValue: `${(g.percentage * 100).toFixed(1)}% · ${count} mutants`,
        tooltip: `${count} mutants killed by ${g.killed} of ${total} tests`
    };
}

export function pageOf<T>(items: T[], shown: number): { visible: T[]; remaining: number } {
    const visible = items.slice(0, shown);
    return { visible, remaining: Math.max(0, items.length - visible.length) };
}

export function subsumptionIsEmpty(s?: Subsumption | null): boolean {
    return !s || !Array.isArray(s.classes) || s.classes.length === 0;
}
