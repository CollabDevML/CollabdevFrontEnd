import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';
import 'moment/locale/fr'

@Pipe({
  name: 'elapsedTime'
})
export class ElapsedTimePipe implements PipeTransform {

  transform(value: string): string {
    moment.locale('fr');
    return moment(value).fromNow();
  }

}
