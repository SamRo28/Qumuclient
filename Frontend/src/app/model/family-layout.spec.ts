import { OperatorFamily } from './OperatorFamily';
import { splitFamiliesForLayout, enabledCount, isWideFamily, WIDE_FAMILY_THRESHOLD } from './family-layout';

describe('family-layout', () => {
  function makeFamily(name: string, count: number, prefix: string = 'Op', enabled: boolean = true): OperatorFamily {
    const ops = [];
    for (let i = 0; i < count; i++) {
      ops.push({ name: `${prefix}_${i}`, enabled });
    }
    return new OperatorFamily(name, ops);
  }

  function createTestFamilies(): OperatorFamily[] {
    return [
      new OperatorFamily('Initialization errors', [
        { name: 'ChangeInitialValue', enabled: true },
        { name: 'FirstGateDuplication', enabled: true }
      ]),
      makeFamily('Control Gates', 2, 'Control'),
      makeFamily('Swap Gates', 12, 'H_X'),
      makeFamily('Position errors', 8, 'Pos'),
      makeFamily('Other operators', 2, 'Other'),
      makeFamily('Phase Gates', 6, 'Z_Z'),
      new OperatorFamily('Noise insertion', [
        { name: 'NoiseInsertionStart', enabled: true },
        { name: 'NoiseInsertionEnd', enabled: true },
        { name: 'NoiseInsertionRandom', enabled: true }
      ]),
      makeFamily('Gate addition', 48, 'AddGateStart_H')
    ];
  }

  it('should classify wide families correctly (Noise insertion and Gate addition)', () => {
    const families = createTestFamilies();
    const { wide } = splitFamiliesForLayout(families);
    expect(wide.map(f => f.name)).toEqual(['Noise insertion', 'Gate addition']);
  });

  it('should sort compact families by enabled count ascending preserving stable order', () => {
    const families = createTestFamilies();
    const { compact } = splitFamiliesForLayout(families);
    expect(compact.map(f => f.name)).toEqual([
      'Initialization errors',
      'Control Gates',
      'Other operators',
      'Phase Gates',
      'Position errors',
      'Swap Gates'
    ]);
  });

  it('should exclude families with zero enabled operators from both arrays', () => {
    const families = createTestFamilies();
    const disabledFamily = makeFamily('Disabled Family', 5, 'Dis', false);
    families.push(disabledFamily);

    const { compact, wide } = splitFamiliesForLayout(families);
    expect(compact.some(f => f.name === 'Disabled Family')).toBeFalse();
    expect(wide.some(f => f.name === 'Disabled Family')).toBeFalse();
  });

  it('should not mutate the input array', () => {
    const families = createTestFamilies();
    const originalNames = families.map(f => f.name);
    splitFamiliesForLayout(families);
    expect(families.map(f => f.name)).toEqual(originalNames);
  });
});
