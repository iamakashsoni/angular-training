import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityFilter',
  standalone: true,
})
export class PriorityFilterPipe implements PipeTransform {
  transform(value: any[], ...args: string[]): unknown {
    return value.filter((value) => value[args[0]] == args[1]);
  }
}
