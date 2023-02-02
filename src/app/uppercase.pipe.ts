import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
  name : 'uppercase'
})
export class UppercasePipe implements PipeTransform {
  transform(val : String) : String {
    return val.toUpperCase();
  }
}
