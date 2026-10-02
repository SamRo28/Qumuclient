import { Pipe, PipeTransform } from '@angular/core';
import { operatorLabel } from '../model/operator-labels';

@Pipe({
  name: 'operatorLabel'
})
export class OperatorLabelPipe implements PipeTransform {
  transform(v?: string | null): string {
    return operatorLabel(v);
  }
}
