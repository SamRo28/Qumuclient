import { operatorLabel, mutationDetailLabel, gateParts } from './operator-labels';
import { areValidNoiseRotations, nextDefaultRotation, NoiseConfig } from './NoiseConfig';

describe('operatorLabel', () => {
  it('should format AddGate operators', () => {
    expect(operatorLabel('AddGateStart_H')).toBe('Add H at start');
    expect(operatorLabel('AddGateRandom_Z^-¼')).toBe('Add Z^-¼ at random position');
  });

  it('should format NoiseInsertion operators', () => {
    expect(operatorLabel('NoiseInsertionEnd')).toBe('Noise at end');
  });

  it('should format swap operators', () => {
    expect(operatorLabel('H_X')).toBe('H → X');
    expect(operatorLabel('Z_Z^½')).toBe('Z → Z^½');
  });

  it('should format fixed operators', () => {
    expect(operatorLabel('MoveGateUpAdj')).toBe('Move gate up (adjacent)');
  });

  it('should format camelCase fallback operators', () => {
    expect(operatorLabel('UnknownOperatorName')).toBe('Unknown operator name');
  });

  it('should return empty string for empty or null/undefined', () => {
    expect(operatorLabel('')).toBe('');
    expect(operatorLabel(undefined)).toBe('');
    expect(operatorLabel(null)).toBe('');
  });

  it('should format mutationDetailLabel correctly', () => {
    const formatted = mutationDetailLabel('Rx(0.1)');
    expect(formatted).toContain('Rx(0.1 rad)');
    expect(formatted).toContain('5.73°');
    expect(mutationDetailLabel(null)).toBe('');
    expect(mutationDetailLabel('')).toBe('');
    expect(mutationDetailLabel('CustomDetail')).toBe('CustomDetail');
  });

  it('should split gateParts correctly', () => {
    expect(gateParts('Z^¼')).toEqual({ base: 'Z', exp: '¼' });
    expect(gateParts('H')).toEqual({ base: 'H', exp: '' });
    expect(gateParts('X^-½')).toEqual({ base: 'X', exp: '-½' });
  });

  it('should get nextDefaultRotation correctly', () => {
    expect(nextDefaultRotation([])).toEqual({ axis: 'X', angle: 0.1 });
    expect(nextDefaultRotation([{ axis: 'X', angle: 0.1 }])).toEqual({ axis: 'Y', angle: 0.1 });
  });

  it('should validate areValidNoiseRotations correctly', () => {
    expect(areValidNoiseRotations([])).toBe(false);

    const seven: NoiseConfig[] = [
      { axis: 'X', angle: 0.1 },
      { axis: 'X', angle: 0.2 },
      { axis: 'X', angle: 0.3 },
      { axis: 'X', angle: 0.4 },
      { axis: 'X', angle: 0.5 },
      { axis: 'X', angle: 0.6 },
      { axis: 'X', angle: 0.7 }
    ];
    expect(areValidNoiseRotations(seven)).toBe(false);

    const duplicates: NoiseConfig[] = [
      { axis: 'X', angle: 0.1 },
      { axis: 'X', angle: 0.1 }
    ];
    expect(areValidNoiseRotations(duplicates)).toBe(false);

    const valid: NoiseConfig[] = [
      { axis: 'X', angle: 0.1 },
      { axis: 'Z', angle: 0.5 }
    ];
    expect(areValidNoiseRotations(valid)).toBe(true);
  });
});
