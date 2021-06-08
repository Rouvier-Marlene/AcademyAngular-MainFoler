import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten'
})

export class ShortenPipe implements PipeTransform {
  //transform(value: any) {
  //  if (value.length > 15) {
  //    return value.substr(0, 15) + ' ...';
  //  }
  //  return value;
  //}
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.substr(0, limit) + ' ...';
    }
    return value;
  }
}
