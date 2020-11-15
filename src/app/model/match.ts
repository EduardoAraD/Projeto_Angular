export class Match {
    urlShieldHome: string;
    urlShieldAway: string;
    nameHome: string;
    nameAway: string;
    golsHome: number;
    golsAway: number;

    constructor(){
        this.urlShieldHome = '../../assets/botaagua.jpg';
        this.urlShieldAway = "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d0/Ferrovi%C3%A1rioAC2019.png/120px-Ferrovi%C3%A1rioAC2019.png"
        this.nameHome = 'Botaagua FC';
        this.nameAway = 'Ferroviário';
        this.golsAway = 0;
        this.golsHome = 0;
    }
}
