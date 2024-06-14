import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], ...args: string[]): unknown {
    return value.filter((value) => value[args[0]] == args[1]);
  }
}
