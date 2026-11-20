import { Pipe, PipeTransform } from '@angular/core';
import { operatorLabel, mutationDetailLabel } from '../model/operator-labels';

@Pipe({
  name: 'operatorLabel'
})
export class OperatorLabelPipe implements PipeTransform {
  transform(v?: string | null): string {
    return operatorLabel(v);
  }
}

@Pipe({
  name: 'mutationDetail'
})
export class MutationDetailPipe implements PipeTransform {
  transform(v?: string | null): string {
    return mutationDetailLabel(v);
  }
}
