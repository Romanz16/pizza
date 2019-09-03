import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hryvnia'
})
export class HryvniaPipe implements PipeTransform {
  transform(value: any, age: number, ...args: any[]): any {
    // transform(value: any, ...args: any[]): any {
    //   if (!value) { return ''; }
    //   return value + '₴';
    // }
    // transform(value: any, ...args: any[]): any {
    //   if (!value) { return ''; }
    //   return value
    //     .split(' ')
    //     .map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    //     .join(' ');
    // }
    if (!value) { return ''; };
    return value.filter(user => user.age >= age);
  }
}
