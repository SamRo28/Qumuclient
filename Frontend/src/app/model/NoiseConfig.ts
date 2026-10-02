export type NoiseAxis = 'X' | 'Y' | 'Z';

export interface NoiseConfig {
  axis: NoiseAxis;
  angle: number;
}

export const DEFAULT_NOISE_CONFIG: NoiseConfig = {
  axis: 'X',
  angle: 0.1
};

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
