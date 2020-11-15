import { Component, OnInit, Input } from '@angular/core';

import { Match } from '../model/match'

@Component({
  selector: 'spa-card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['./card-match.component.css']
})
export class CardMatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() match:Match = new Match()

}
