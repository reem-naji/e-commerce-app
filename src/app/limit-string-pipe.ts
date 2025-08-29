import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitString',
  standalone:true
})
export class LimitStringPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (!value)
        return null;

    let defaultLimit = 62;
    if (value.length < defaultLimit)
      return value;
    else
      return value.substring(0, defaultLimit) + '...';
  }

}