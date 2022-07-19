import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string,
            limit: number = 20,
            ellipsis: string = '...'): string {
    return (value as any).replaceAll(/[_-]/g, ' ');
    //return value.length > limit ? value.substring(0, limit) + ellipsis : value;
  }

}
