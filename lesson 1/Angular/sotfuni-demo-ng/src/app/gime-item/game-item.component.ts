import { Component, Input, OnDestroy, OnInit } from "@angular/core";

export interface Game {
    title: string;
    price: number;
    image: string;
  }


@Component({
    selector: 'su-game-item',
    templateUrl: './game-item.component.html',
})

export class GameItemComponent implements OnInit, OnDestroy {
  @Input() game: Game;
  
   ngOnInit(): void {
    console.log('GameItemComponent created!')
   }
   ngOnDestroy(): void {
       console.log('GameItemComponent Destroyed!')
   }
}