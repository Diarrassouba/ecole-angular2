import {Component, OnInit} from '@angular/core';
import {PersonneServiceService} from "./personne-service.service";
import {Personne} from "./model/personne";
import {NewPersonne} from "./model/newPersonne";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonneServiceService]
})
export class AppComponent implements OnInit {
  title = 'LES INVITES AUTORISEES!';
  dataPersonnes: Personne[];
  displayDialog: boolean;
  displayDialog2: boolean;
  personne:Personne;
  newPersonne: boolean;
  newPers: NewPersonne;
  selectedPersonne:Personne;
  pers:Personne;


  constructor(public  personneService: PersonneServiceService) {
  }



  ngOnInit() {
    this.personneService.gerPersonnes()
      .subscribe((data) => this.dataPersonnes = data.body);
  }



  showDialogToAdd(){
    this.newPersonne = true;
    this.newPers = new NewPersonne('','','','','','','');
    this.displayDialog = true;
  }

  save(newPers) {
    this.personneService.ajouter(newPers).subscribe((data)=>this.pers=data.json() );
    this.displayDialog = false;
  }

  delete() {

    this.displayDialog2 = false;
  }
  modfier() {

    this.displayDialog2 = false;
  }
  annuler() {

    this.displayDialog2 = false;
  }

  onRowSelect(event) {
    this.newPersonne = false;
    this.personne = this.clonePersonne(event.data);
    this.displayDialog2 = true;
  }

  clonePersonne(p: Personne): Personne {
    let newPers = new Personne('','','','',null);
    for(let prop in p) {
      newPers[prop] = p[prop];
    }
    return newPers;
  }

  // findSelectedCarIndex(): number {
  //   return this.dataPersonnes.indexOf(this.selectedPersonne);
  // }
}
