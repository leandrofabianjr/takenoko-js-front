import { BoardComponent } from './components/board/board.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PlayerPlaceComponent } from './components/player-place/player-place.component';
import { GameComponent } from './game.component';
import { TerrainComponent } from './components/terrain/terrain.component';
import { ImprovementComponent } from './components/improvement/improvement.component';
import { BamboosComponent } from './components/bamboos/bamboos.component';
import { PlayerBoardComponent } from './components/player-board/player-board.component';
import { IrrigationComponent } from './components/irrigation/irrigation.component';
import { ObjectComponent } from './components/player-board/object/object.component';


const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    GameComponent,
    PlayerPlaceComponent,
    BoardComponent,
    TerrainComponent,
    ImprovementComponent,
    BamboosComponent,
    PlayerBoardComponent,
    IrrigationComponent,
    ObjectComponent
  ],
  imports: [
    CommonModule,
    SocketIoModule.forRoot(config)
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
