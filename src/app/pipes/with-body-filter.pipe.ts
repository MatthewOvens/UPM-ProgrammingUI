import { Email } from './../utils/interfaces/Email';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withBodyFilter',
  pure: false 
})
export class WithBodyFilterPipe implements PipeTransform {

  transform(allMails: Email[], withBody: boolean): Email []{
    if (withBody) 
      return allMails.filter(mail => (mail.body != null));
    else 
      return allMails;
  }

}
