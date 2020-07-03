import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tk-improvement',
  templateUrl: './improvement.component.html',
  styleUrls: ['./improvement.component.scss']
})
export class ImprovementComponent implements OnInit {

  @Input() type: 'enclosure' | 'watershed' | 'fertilizer';

  constructor() { }

  ngOnInit(): void {
  }

}
