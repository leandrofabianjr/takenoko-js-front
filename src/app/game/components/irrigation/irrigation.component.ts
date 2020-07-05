import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tk-irrigation',
  templateUrl: './irrigation.component.html',
  styleUrls: ['./irrigation.component.scss']
})
export class IrrigationComponent implements OnInit {

  @Input() type: string = 'show';

  constructor() { }

  ngOnInit(): void {
  }

}
