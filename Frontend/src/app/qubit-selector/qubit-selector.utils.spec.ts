import { formatQubits, parseQubits } from './qubit-selector.utils';

describe('qubit-selector utils', () => {
  it('parseQubits de cadena vacía no marca nada', () => {
    expect(parseQubits('', 3)).toEqual([false, false, false]);
    expect(parseQubits(null, 2)).toEqual([false, false]);
  });
  it('parseQubits marca los índices indicados', () => {
    expect(parseQubits('0,2', 3)).toEqual([true, false, true]);
  });
  it('parseQubits ignora fuera de rango, espacios y basura', () => {
    expect(parseQubits(' 0 , 5, x, 1 ', 3)).toEqual([true, true, false]);
  });
  it('formatQubits', () => {
    expect(formatQubits([true, false, true])).toBe('0,2');
    expect(formatQubits([false, false])).toBe('');
  });
});
