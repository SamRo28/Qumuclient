import { OperatorFamily } from './OperatorFamily';
import { isNoiseOperator } from './NoiseConfig';

export const WIDE_FAMILY_THRESHOLD = 12;

export function enabledCount(family: OperatorFamily): number {
  return (family?.operators || []).filter(op => op.enabled).length;
}

export function isWideFamily(family: OperatorFamily): boolean {
  return enabledCount(family) > WIDE_FAMILY_THRESHOLD
    || (family?.operators || []).some(op => isNoiseOperator(op.name));
}

/** Reparte las familias para que la rejilla quede cuadrada: pequeñas ordenadas por tamaño y anchas aparte. */
export function splitFamiliesForLayout(families: OperatorFamily[]): { compact: OperatorFamily[]; wide: OperatorFamily[] } {
  const compact: OperatorFamily[] = [];
  const wide: OperatorFamily[] = [];
  (families || []).filter(f => enabledCount(f) > 0).forEach(f => (isWideFamily(f) ? wide : compact).push(f));
  const order = new Map(compact.map((f, i) => [f, i]));
  compact.sort((a, b) => enabledCount(a) - enabledCount(b) || order.get(a)! - order.get(b)!);
  return { compact, wide };
}
