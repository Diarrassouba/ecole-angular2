import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Personne} from "./model/personne";

@Injectable()
export class PersonneServiceService {

  constructor(public  http: Http) {
  }

  gerPersonnes() {
   return this.http.get('http://localhost:8080/personnes')
      .map(res => res.json());
  }

  ajouter(personne:Personne){
    return this.http.post('http://localhost:8080/personnes',personne)
      .map(res => res.json());
  }

}
