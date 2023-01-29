import { CharactersService } from 'src/app/modules/characters/services/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {
  page = 1;
  cats: Cat[] = [];

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.charactersService.getCats(this.page).subscribe((cats: Cat[]) => {
      this.cats = cats;
    });
  }

  onScroll(): void {
    this.charactersService.getCats(++this.page).subscribe((cats: Cat[]) => {
      this.cats.push(...cats);
    });
  }
}

export interface Cat {
  name: string;
  temperament: string;
  image: any;
  description: string;
}
