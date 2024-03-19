import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emphasize',
  standalone: true,
})
export class EmphasizePipe implements PipeTransform {
  transform(value: string = '', query: string = 'shark'): any {
    const regex = new RegExp(`(${query})`, 'gi');
    return value.replace(regex, `***${query.toLocaleUpperCase()}***`);
  }
}
