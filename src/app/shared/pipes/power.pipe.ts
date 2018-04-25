import { Pipe, PipeTransform } from '@angular/core';

// {{ 3 | power:2 }} ==> 8
// {{ 2 | power}} ==> 2  (2^1), exponent is default to 1

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

constructor() {
  console.log("Power Pipe created");
}

transform(value: number, exponent:number = 1): number {
 
  console.log("power transform ", value, exponent);
  
  return Math.pow(value, exponent);
}

}
