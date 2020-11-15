import { Component, OnInit } from '@angular/core';

import { Match } from '../model/match';

import {
  MatSnackBar
} from '@angular/material/snack-bar';

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

  matchs: Match[] = [];

  constructor(private _snackBar: MatSnackBar) { 
    this.urlShieldHome = "";
    this.urlShieldAway = "";
    this.nameHome = "";
    this.nameAway = "";
    this.golsHome = 0;
    this.golsAway = 0;
  }

  ngOnInit(): void {}

  validadeValues(): boolean {
    if(this.urlShieldHome === "") {
      this.openSnackBar("Link do escudo do clube mandante é requerido.", "error_snackbar")
      return false;
    }
    if(this.urlShieldAway === "") {
      this.openSnackBar("Link do escudo do clube visitante é requerido.", "error_snackbar")
      return false;
    }
    if(this.nameHome === "") {
      this.openSnackBar("Nome do clube mandante é requerido.", "error_snackbar")
      return false;
    }
    if(this.urlShieldAway === "") {
      this.openSnackBar("Nome do clube visitante é requerido.", "error_snackbar")
      return false;
    }
    if(this.golsHome <= -1 || this.golsAway <= -1) {
      this.openSnackBar("Valor numérico inválido, somente positivos.", "error_snackbar")
      return false;
    }
    
    return true;
  }

  createMatch(): void{
    if(!this.validadeValues()) return;

    const match = new Match();
    match.urlShieldHome = this.urlShieldHome === "botaagua.jpg" ?
      "../../assets/botaagua.jpg" : this.urlShieldHome;
    match.urlShieldAway = this.urlShieldAway  === "botaagua.jpg" ?
      "../../assets/botaagua.jpg" : this.urlShieldAway;
    match.nameHome = this.nameHome;
    match.nameAway = this.nameAway;
    match.golsHome = this.golsHome;
    match.golsAway = this.golsAway;

    this.matchs.push(match)

    this.openSnackBar("Partida Adicionada.", "done_snackbar")

    this.urlShieldHome = "";
    this.urlShieldAway = "";
    this.nameHome = "";
    this.nameAway = "";
    this.golsHome = 0;
    this.golsAway = 0;
  }

  openSnackBar(message: string, classStyle: string) {
    this._snackBar.open(message, "", {
      duration: 3000,
      panelClass: [classStyle],
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

}
