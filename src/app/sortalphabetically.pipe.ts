import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortalphabetically"
})
export class SortalphabeticallyPipe implements PipeTransform {
  transform(value: any) {
    return this.sortalphabetically(value);
  }
  sortalphabetically(arr: any) {
    return arr.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }
}
