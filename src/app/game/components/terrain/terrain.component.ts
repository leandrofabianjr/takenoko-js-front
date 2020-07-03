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

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.selected.emit(this.slot.position);
  }
}
