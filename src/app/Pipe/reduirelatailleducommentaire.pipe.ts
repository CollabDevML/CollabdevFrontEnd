import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduirelataille'
  
})
export class ReduirelatailleducommentairePipe implements PipeTransform {

  transform(value:string ,limite:number, point='...'): string {
    if(!value) return '';
    return value.length>limite?value.substring(0,limite)+point:value
  }

}
