import { Component, Input } from '@angular/core';
import { NoiseAxis, NoiseConfig, isValidNoiseConfig } from '../../model/NoiseConfig';

@Component({
  selector: 'app-noise-config',
  templateUrl: './noise-config.component.html',
  styleUrls: ['./noise-config.component.css']
})
export class NoiseConfigComponent {
  @Input() config!: NoiseConfig;

  public axes: NoiseAxis[] = ['X', 'Y', 'Z'];

  public presets = [
    { label: 'π/16', value: Math.PI / 16 },
    { label: 'π/8', value: Math.PI / 8 },
    { label: 'π/4', value: Math.PI / 4 },
    { label: 'π/2', value: Math.PI / 2 },
    { label: 'π', value: Math.PI }
  ];

  get degrees(): number {
    return this.config && Number.isFinite(this.config.angle)
      ? (this.config.angle * 180) / Math.PI
      : 0;
  }

  get valid(): boolean {
    return isValidNoiseConfig(this.config);
  }

  setAxis(axis: NoiseAxis): void {
    if (this.config) {
      this.config.axis = axis;
    }
  }

  setPreset(value: number): void {
    if (this.config) {
      this.config.angle = Number(value.toFixed(6));
    }
  }
}
