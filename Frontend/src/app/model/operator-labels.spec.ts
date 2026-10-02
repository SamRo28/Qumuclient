import { operatorLabel } from './operator-labels';

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
});
