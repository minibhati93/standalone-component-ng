import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalCase',
  standalone: true,
})
export class CapitalCasePipe implements PipeTransform {
  transform(value: string): string {
    return value
      .split(/\s+/g)
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(' ');
  }
}
