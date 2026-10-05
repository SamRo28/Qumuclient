import { Component, Input } from '@angular/core';
import {
  NoiseConfig,
  NoiseAxis,
  MAX_NOISE_ROTATIONS,
  isValidNoiseConfig,
  duplicateIndex,
  nextDefaultRotation,
  rotationLabel
} from '../../model/NoiseConfig';

@Component({
  selector: 'app-noise-rotations',
  templateUrl: './noise-rotations.component.html',
  styleUrls: ['./noise-rotations.component.css']
})
export class NoiseRotationsComponent {
  @Input() rotations: NoiseConfig[] = [];
  @Input() positionsSelected: number = 0;
  @Input() qubitsHint?: number;
  @Input() config?: NoiseConfig;

  public readonly max = MAX_NOISE_ROTATIONS;
  public readonly axes: NoiseAxis[] = ['X', 'Y', 'Z'];

  public readonly presets = [
    { label: 'π/16', value: Math.PI / 16 },
    { label: 'π/8', value: Math.PI / 8 },
    { label: 'π/4', value: Math.PI / 4 },
    { label: 'π/2', value: Math.PI / 2 },
    { label: 'π', value: Math.PI }
  ];

  public add(): void {
    if (this.rotations.length < this.max) {
      this.rotations.push(nextDefaultRotation(this.rotations));
    }
  }

  public remove(i: number): void {
    if (this.rotations.length > 1) {
      this.rotations.splice(i, 1);
    }
  }

  public setAxis(r: NoiseConfig, a: NoiseAxis): void {
    r.axis = a;
  }

  public setPreset(r: NoiseConfig, v: number): void {
    r.angle = Number(v.toFixed(6));
  }

  public isPresetActive(r: NoiseConfig, v: number): boolean {
    return Math.abs(Number(r.angle) - v) < 1e-6;
  }

  public degrees(r: NoiseConfig): number {
    return (Number(r.angle) * 180) / Math.PI;
  }

  public isValid(r: NoiseConfig): boolean {
    return isValidNoiseConfig(r);
  }

  public dupOf(i: number): number {
    return duplicateIndex(this.rotations, i);
  }

  public trackByIndex(index: number): number {
    return index;
  }

  public get mutantsPerQubit(): number {
    return this.positionsSelected * this.rotations.length;
  }

  public preview(r: NoiseConfig): string {
    return rotationLabel(r) + ' ≈ ' + this.degrees(r).toFixed(2) + '°';
  }
}
