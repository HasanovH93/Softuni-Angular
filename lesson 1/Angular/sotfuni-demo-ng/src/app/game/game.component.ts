import { Component } from '@angular/core';
import { Game } from '../gime-item/game-item.component';



@Component({
  selector: 'su-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
    shouldPriceBePurple: boolean = false;
    shouldShowItemComponent : boolean = false;

    searchText: String = "Game 1";
  games: Game[] = [
    { title: 'Minecraft', price: 20, image: 'https://www.minecraft.net/content/dam/games/minecraft/key-art/Minecraft-xbox-one.jpg' },
    { title: 'Candy Crush', price: 30, image: 'https://play-lh.googleusercontent.com/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp1NPpNFTOzSFJDvZ9narFS0' },
    { title: 'Counter-Strike', price: 40, image: 'https://cdn.akamai.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1641233427' },
  ];

  handleExpandContentClick(gamesContainer: HTMLElement): void {
    this.shouldPriceBePurple = this.shouldPriceBePurple ? false : true;
    console.log(gamesContainer.children)
  }

  handleSearchChange(event: Event){
    console.log(event)
  }

  handleCreateOrDestroy(): void {
    this.shouldShowItemComponent = !this.shouldShowItemComponent
  }
}
