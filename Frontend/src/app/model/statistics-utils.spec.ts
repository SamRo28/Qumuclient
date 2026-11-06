import { Subsumption } from './StatisticsResponse';
import { classTestNames, killRateGroupLabel, pageOf, subsumptionIsEmpty } from './statistics-utils';

const sub: Subsumption = {
    summary: { killed_mutants: 3, redundant: 1, minimal: 2, redundancy_rate: 0.33, classes: 2 },
    tests: ['00000000', '00000001', '00000002'],
    classes: [
        { id: 0, killed_by: [0, 1], num_tests: 2, size: 2, redundant: 1, subsumed_by: '7', subsumed_by_tests: 2, mutants: ['7', '8'] },
        { id: 1, killed_by: [2, 99], num_tests: 2, size: 1, redundant: 0, subsumed_by: '9', subsumed_by_tests: 2, mutants: ['9'] }
    ],
    by_operator: []
};

describe('statistics-utils', () => {
    it('classTestNames lista, trunca e ignora índices fuera de rango', () => {
        expect(classTestNames(sub, sub.classes[0])).toBe('00000000, 00000001');
        expect(classTestNames(sub, sub.classes[0], 1)).toBe('00000000 +1');
        expect(classTestNames(sub, sub.classes[1])).toBe('00000002');
    });

    it('killRateGroupLabel', () => {
        const r = killRateGroupLabel({ killed: 1, percentage: 0.5, mutants: ['82', '1639'] }, 2);
        expect(r.label).toBe('Killed by 1/2 tests');
        expect(r.displayValue).toBe('50.0% · 2 mutants');
        expect(r.tooltip).toBe('2 mutants killed by 1 of 2 tests');
    });

    it('pageOf', () => {
        const items = Array.from({ length: 450 }, (_, i) => i);
        expect(pageOf(items, 200)).toEqual({ visible: items.slice(0, 200), remaining: 250 });
        const all = pageOf(items, 600);
        expect(all.visible.length).toBe(450);
        expect(all.remaining).toBe(0);
    });

    it('subsumptionIsEmpty', () => {
        expect(subsumptionIsEmpty(null)).toBeTrue();
        expect(subsumptionIsEmpty({ ...sub, classes: [] })).toBeTrue();
        expect(subsumptionIsEmpty(sub)).toBeFalse();
    });
});
