export type NoiseAxis = 'X' | 'Y' | 'Z';

export interface NoiseConfig {
  axis: NoiseAxis;
  angle: number;
}

export const DEFAULT_NOISE_CONFIG: NoiseConfig = {
  axis: 'X',
  angle: 0.1
};

export const MAX_NOISE_ROTATIONS = 6;

export function isValidNoiseConfig(c: NoiseConfig): boolean {
  return (
    !!c &&
    ['X', 'Y', 'Z'].includes(c.axis) &&
    Number.isFinite(c.angle) &&
    c.angle > 0 &&
    c.angle <= 2 * Math.PI + 1e-9
  );
}

export function isNoiseOperator(name?: string): boolean {
  return !!name && name.startsWith('NoiseInsertion');
}

export function sameRotation(a: NoiseConfig, b: NoiseConfig): boolean {
  return !!a && !!b && a.axis === b.axis && Math.abs(Number(a.angle) - Number(b.angle)) < 1e-9;
}

export function duplicateIndex(list: NoiseConfig[], i: number): number {
  if (!list || i < 0 || i >= list.length) return -1;
  for (let j = 0; j < i; j++) {
    if (sameRotation(list[j], list[i])) {
      return j;
    }
  }
  return -1;
}

export function areValidNoiseRotations(list: NoiseConfig[]): boolean {
  return (
    Array.isArray(list) &&
    list.length >= 1 &&
    list.length <= MAX_NOISE_ROTATIONS &&
    list.every(c => isValidNoiseConfig(c)) &&
    list.every((_, i) => duplicateIndex(list, i) === -1)
  );
}

export function nextDefaultRotation(list: NoiseConfig[]): NoiseConfig {
  const angles = [0.1, Math.PI / 16, Math.PI / 8, Math.PI / 4, Math.PI / 2, Math.PI];
  const axes: NoiseAxis[] = ['X', 'Y', 'Z'];

  for (const angle of angles) {
    for (const axis of axes) {
      const candidate: NoiseConfig = { axis, angle: Number(angle.toFixed(6)) };
      if (!list.some(existing => sameRotation(existing, candidate))) {
        return candidate;
      }
    }
  }
  return { axis: 'X', angle: 0.1 };
}

export function formatAngle(angle: number): string {
  const fixed = Number(angle).toFixed(4);
  return parseFloat(fixed).toString();
}

export function rotationLabel(c: NoiseConfig): string {
  return `R${c.axis.toLowerCase()}(${formatAngle(c.angle)} rad)`;
}
