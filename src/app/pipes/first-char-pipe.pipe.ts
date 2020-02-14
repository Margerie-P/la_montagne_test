import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharPipe'
})
export class FirstCharPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const nameTab = value.split(' ');
    let stringReturn = '';
    nameTab.forEach((word: string) => {
      if ( word[0] ) {
        stringReturn += word[0];
      }
    });
    return stringReturn;
  }
}
