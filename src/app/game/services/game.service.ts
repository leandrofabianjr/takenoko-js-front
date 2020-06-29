import { Board } from './../dtos/board';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private _board: Board;
  board$ = new BehaviorSubject<Board>(null);

  constructor(private socket: Socket) {
    this.startSocketListeners();
  }

  private startSocketListeners() {
    this.socket.fromEvent<Board>('board')
      .subscribe(b => this.receiveBoard(b));
  }

  private receiveBoard(b: Board): void {
    this._board = b;
    this.printBoard(b);
    this.board$.next(this._board);
  }

  printBoard(b: Board) {
    console.log(b);
    let mtx = b?.slots
      ?.map((line, i) => {
        let lineStr = i % 2 ? '' : ' ';
        lineStr += line
          ?.map(slot => {
            if (slot?.terrain) {
              return slot.terrain?.isFountain ? 'O' : '#';
            } else if (slot?.canBeTerrain) {
              return '*'
            }
            return '-';
          })
          .join(' ');
        return lineStr;
      })
      .join("\n");
    console.log(mtx);
  }

  start() {
    this.socket.emit('start');
  }

  addTerrain(pos: { x: number; y: number; }) {
    this.socket.emit('board add terrain', pos);
  }
}
