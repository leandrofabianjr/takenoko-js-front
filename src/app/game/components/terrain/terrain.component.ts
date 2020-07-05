import { TerrainSlot } from './../../dtos/terrain-slot';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tk-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.scss']
})
export class TerrainComponent implements OnInit {

  @Input() slot: TerrainSlot;
  @Output() selected = new EventEmitter<{ x: number, y: number }>();

  get terrainTypeClass(): string | string[] {
    switch (true) {
      case !this.slot?.terrain && this.slot?.canBeTerrain:
        return 'can-be-terrain';
      case this.slot?.terrain?.isFountain:
        return 'fountain';
      case this.slot?.terrain && !this.slot.terrain?.isFountain:
        return this.slot?.terrain?.color ? ['terrain', this.slot?.terrain?.color] : 'terrain';
      default:
        return 'empty-terrain';
    }
  }

  get isTerrain() {
    return this.slot?.terrain && !this.slot.terrain?.isFountain;
  }

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.selected.emit(this.slot.position);
  }
}
