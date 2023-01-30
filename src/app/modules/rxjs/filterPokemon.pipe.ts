import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemon',
})
export class FilterPokemonPipe implements PipeTransform {
  transform(items: any[], searchPokemon: string) {
    if (items && items.length) {
      return items.filter((item: any) => {
        if (searchPokemon && item.name.indexOf(searchPokemon) === -1) {
          return false;
        }
        return true;
      });
    } else {
      return items;
    }
  }
}
