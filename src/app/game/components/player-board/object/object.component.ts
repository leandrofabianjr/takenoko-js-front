import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tk-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.scss']
})
export class ObjectComponent implements OnInit {

  @Input() multiplier: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
