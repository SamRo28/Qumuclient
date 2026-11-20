/** "0,2" -> [true,false,true] (ignora espacios e índices fuera de rango). */
export function parseQubits(value: string | null | undefined, qubits: number): boolean[] {
  const selection: boolean[] = new Array(Math.max(qubits, 0)).fill(false);
  if (!value) return selection;
  for (const part of value.split(',')) {
    const t = part.trim();
    if (!/^\d+$/.test(t)) continue;
    const idx = parseInt(t, 10);
    if (idx >= 0 && idx < selection.length) selection[idx] = true;
  }
  return selection;
}

/** [true,false,true] -> "0,2" ("" si no hay ninguno). */
export function formatQubits(selection: boolean[]): string {
  const out: number[] = [];
  selection.forEach((sel, i) => { if (sel) out.push(i); });
  return out.join(',');
}
