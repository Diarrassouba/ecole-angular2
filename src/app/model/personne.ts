import {Adresse} from "./adresse";
export class Personne  {
  private _id:number;
  private _titre:string;
  private _nom:string;
  private _prenom:string;
  private _numCni:string;
  private _adresse: Adresse=new  Adresse();



  constructor(id:number=0, titre: string='', nom: string='', prenom: string='', numCni: string='', adresse:Adresse) {
   this._id=id;
    this._titre = titre;
    this._nom = nom;
    this._prenom = prenom;
    this._numCni = numCni;
    this._adresse=adresse;
  }


  get adresse(): Adresse {
    return this._adresse;
  }

  set adresse(value: Adresse) {
    this._adresse = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
}
