import { Component, OnInit } from '@angular/core';

import { Match } from '../model/match';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urlShieldHome: string;
  urlShieldAway: string;
  nameHome: string;
  nameAway: string;
  golsHome: number;
  golsAway: number;

  matchs: Match[] = []

  constructor() { 
    this.urlShieldHome = "";
    this.urlShieldAway = "";
    this.nameHome = "";
    this.nameAway = "";
    this.golsHome = 0;
    this.golsAway = 0;
  }

  ngOnInit(): void {}

  createMatch(): void{
    if(this.urlShieldHome === "") return;
    if(this.urlShieldAway === "") return;
    if(this.nameHome === "") return;
    if(this.nameAway === "") return;

    const match = new Match();
    match.urlShieldHome = this.urlShieldHome;
    match.urlShieldAway = this.urlShieldAway;
    match.nameHome = this.nameHome;
    match.nameAway = this.nameAway;
    match.golsHome = this.golsHome;
    match.golsAway = this.golsAway;

    this.matchs.push(match)

    this.urlShieldHome = "";
    this.urlShieldAway = "";
    this.nameHome = "";
    this.nameAway = "";
    this.golsHome = 0;
    this.golsAway = 0;
  }

}
