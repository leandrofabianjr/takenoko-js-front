import { GameService } from './../../services/game.service';
import { Board } from '../../dtos/board';

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tk-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board: Board;

  constructor(public game: GameService) {
    game.board$.subscribe(b => this.board = b);
  }

  ngOnInit(): void {
  }

  selected(pos: { x: number, y: number }) {
    console.log(pos);
    this.game.addTerrain(pos);
  }
}
