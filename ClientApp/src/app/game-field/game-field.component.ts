import { Component } from '@angular/core';
import { GameFieldService } from 'src/services/GameFieldService';
import { GameFieldStateDto } from 'src/models/GameFieldStateDto';
import { GameCardDto } from 'src/models/GameCardDto';
import { ZoneParams } from 'src/models/ZoneParams';
import { PlayerLabelDto } from 'src/models/PlayerLabelDto';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent {
  state: GameFieldStateDto = <GameFieldStateDto>{ cards: [] };

  personalZoneParams: ZoneParams;
  throwZoneParams: ZoneParams;

  get gameCards(): GameCardDto[] {
    return this.state.cards;
  }

  get playerLabels(): PlayerLabelDto[] {
    return this.state.playerLabels;
  }

  constructor(gameFieldService: GameFieldService) {
    gameFieldService.startConnection();
    gameFieldService.stateUpdated.subscribe(newState => this.state = newState);
    gameFieldService.getState().subscribe(newState => this.state = newState);
  }

  trackCardsById(index: number, item: GameCardDto): number | undefined {
    return item ? item.id : undefined;
  }

  trackPlayerLabelByName(index: number, item: PlayerLabelDto): string | undefined {
    return item ? item.name : undefined;
  }

  updatePersonalZoneParams(event: ZoneParams): void {
    this.personalZoneParams = event;
  }

  updateThrowZoneParams(event: ZoneParams): void {
    this.throwZoneParams = event;
  }
}
