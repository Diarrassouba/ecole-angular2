import {Component, OnInit} from '@angular/core';
import {PersonneServiceService} from "./personne-service.service";
import {Personne} from "./model/personne";


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
  personne:Personne=new Personne;
  newPersonne: boolean;
  selectedPersonne:Personne;
  pers:Personne= new  Personne;


  constructor(public  personneService: PersonneServiceService) {
  }



  ngOnInit() {
    this.personneService.gerPersonnes()
      .subscribe((data) => this.dataPersonnes = data.body);
  }



  showDialogToAdd(){
    this.newPersonne = true;
    this.personne = new Personne();
    this.displayDialog = true;
  }

  save() {
    this.personneService.ajouter(this.personne).subscribe((data)=>this.pers=data.json() );
    this.displayDialog = false;
  }

  delete() {

    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newPersonne = false;
    this.personne = this.clonePersonne(event.data);
    this.displayDialog = true;
  }

  clonePersonne(p: Personne): Personne {
    let personne = new Personne();
    for(let prop in p) {
      personne[prop] = p[prop];
    }
    return personne;
  }

  // findSelectedCarIndex(): number {
  //   return this.dataPersonnes.indexOf(this.selectedPersonne);
  // }
}
