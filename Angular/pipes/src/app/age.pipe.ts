import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let curYear = new Date().getFullYear();
    let birthYear = new Date(value).getFullYear();

    let curMonth = new Date().getMonth();
    let birthMonth = new Date(value).getMonth();
  

    return [(curYear - birthYear)+ "Years " + (birthMonth - curMonth) + "Months"] ;
  }

}
