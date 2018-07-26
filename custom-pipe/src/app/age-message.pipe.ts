import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageMessage',
  pure: true
})
export class AgeMessagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value) {
      if(value<14) 
        return 'You are a teenager'; 
      else if(value<22) 
        return 'You are a College boy';
      else if(value<31) 
        return 'Enjoy your brotherhood'; 
      else
        return 'You are an Old man'; 
    }else {
      return 'Enter your age';
    }
  }
}
