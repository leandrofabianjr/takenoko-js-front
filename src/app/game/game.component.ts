import { GameService } from './services/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public game: GameService) { }

  ngOnInit(): void {
    this.game.start();
  }

}
