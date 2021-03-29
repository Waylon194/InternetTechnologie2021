import { Injectable } from '@angular/core';
import { gebruiker } from '../model/gebruiker';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  gebruikersLijst: gebruiker[] = [];

  constructor() {
    //Gebruikers aanmaken
    let eersteGebruiker = { naam: "Waylon", balans: 2000 };
    let tweedeGebruiker = { naam: "Maurice", balans: 500 };
    let derdeGebruiker = { naam: "Ricky", balans: 1000 }

    //Gebruikers toevoegen
    this.gebruikersLijst.push(eersteGebruiker);
    this.gebruikersLijst.push(tweedeGebruiker);
    this.gebruikersLijst.push(derdeGebruiker);
  }

  betaal(zender: string, ontvanger: string, bedrag: number): boolean {
    //Checks of de klant bestaat
    var zenderGevonden = this.gebruikersLijst.find(f => f.naam === zender);
    var ontvangerGevonden = this.gebruikersLijst.find(f => f.naam === ontvanger);
    //Undefined checks en op / af afschrijven
    if(zenderGevonden != undefined && ontvangerGevonden != undefined) {
      ontvangerGevonden.balans += bedrag;
      zenderGevonden.balans -= bedrag;

      console.log(zenderGevonden);
      console.log(ontvangerGevonden);
      return true;
    }
    else {
      console.log('Gebruiker niet gevonden in de lijst!');
      return false;
    }
  }
}