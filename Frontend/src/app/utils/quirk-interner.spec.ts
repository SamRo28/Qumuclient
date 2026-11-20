import { QuirkInterner } from './quirk-interner';

describe('QuirkInterner', () => {
  const make = (second: any) => ({
    cols: [['H', 1], second],
    gates: [{ id: '~g', name: 'g', circuit: { cols: [['H'], ['X']] } }],
    init: [0, 1]
  });

  it('mantiene el JSON', () => {
    const interner = new QuirkInterner();
    for (const q of [make(['X', 1]), make(['Z', 'H'])]) {
      const original = JSON.stringify(q);
      const copy = JSON.parse(original);
      expect(JSON.stringify(interner.intern(copy))).toBe(original);
    }
  });

  it('comparte columnas identicas', () => {
    const interner = new QuirkInterner();
    const q1 = interner.intern(make(['X', 1]));
    const q2 = interner.intern(make(['Z', 1]));
    expect(q1.cols[0]).toBe(q2.cols[0]);
    expect(q1.cols[1]).not.toBe(q2.cols[1]);
  });

  it('congela lo compartido', () => {
    const interner = new QuirkInterner();
    const q1 = interner.intern(make(['X', 1]));
    expect(Object.isFrozen(q1.cols[0])).toBeTrue();
    expect(Object.isFrozen(q1)).toBeFalse();
  });

  it('tolera entradas raras', () => {
    const interner = new QuirkInterner();
    expect(interner.intern(null)).toBeNull();
    expect(interner.intern(undefined)).toBeUndefined();
    expect(interner.intern('{"cols":[]}')).toBe('{"cols":[]}');
    expect(interner.intern({})).toEqual({});
    expect(JSON.stringify(interner.intern({ cols: [1, null, 'H'] }))).toBe('{"cols":[1,null,"H"]}');
  });
});
