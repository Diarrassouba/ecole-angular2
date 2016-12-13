/**
 * Created by DDrissa on 09/12/2016.
 */
export  class  ModifPersonne{
  private id:number;
  private titre:string;
  private nom:string;
  private prenom:string;
  private numCni:string;
  private email: string;
  private codePostal:string;
  private quartier:string;


  constructor(id:number,titre: string, nom: string, prenom: string, numCni: string, email: string, codePostal: string, quartier: string) {
   this.id=id;
    this.titre = titre;
    this.nom = nom;
    this.prenom = prenom;
    this.numCni = numCni;
    this.email = email;
    this.codePostal = codePostal;
    this.quartier = quartier;
  }



}
