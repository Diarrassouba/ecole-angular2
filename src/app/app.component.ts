import {Component, OnInit} from '@angular/core';
import {PersonneServiceService} from "./personne-service.service";
import {Personne} from "./model/personne";
import {Car} from "./car/car";
import {CarService} from "./car/carservice";

class PrimeCar implements  Car{
  // constructor(public vin?, public year?, public brand?, public color?) {}

  vin: string;
  year: string;
  brand: string;
  color: string;

  constructor(vin: string, year: string, brand: string, color: string) {
    this.vin = vin;
    this.year = year;
    this.brand = brand;
    this.color = color;
  }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CarService, PersonneServiceService]
})
export class AppComponent implements OnInit {
  title = 'LES INVITES AUTORISEES!';
  dataPersonnes: Personne[];
  displayDialog: boolean;
  personne:Personne;
  newPersonne: boolean;
  selectedPersonne:Personne;
  pers:Personne;
  car: Car = new PrimeCar('','','','');

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];


  constructor(private carService: CarService) {}



  ngOnInit() {
    this.carService.getCarsMedium()
      .subscribe((data) => this.cars=data.data);
  }



  showDialogToAdd(){
    this.newCar = true;
    this.car = new PrimeCar('','','','');
    this.displayDialog = true;
  }

  save() {
    if(this.newCar)
      this.cars.push(this.car);
    else
      this.cars[this.findSelectedCarIndex()] = this.car;

    this.car = null;
    this.displayDialog = false;
  }

  delete() {
    this.cars.splice(this.findSelectedCarIndex(), 1);
    this.car = null;
    this.displayDialog = false;
  }

  onRowSelect(event) {
    this.newCar = false;
    this.car = this.cloneCar(event.data);
    this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
    let car = new PrimeCar('','','','');
    for(let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }
  findSelectedCarIndex(): number {
    return this.cars.indexOf(this.selectedCar);
  }
}


