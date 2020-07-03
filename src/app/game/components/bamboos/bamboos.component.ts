import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tk-bamboos',
  templateUrl: './bamboos.component.html',
  styleUrls: ['./bamboos.component.scss']
})
export class BamboosComponent implements OnInit {

  @Input() color: 'green' | 'pink' | 'yellow';
  @Input() quantity: number = 0;

  get qttArray() {
    return  Array.apply(null, { length: this.quantity });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
