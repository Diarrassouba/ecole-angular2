import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Car} from "./car";
/**
 * Created by DDrissa on 09/12/2016.
 */

@Injectable()
export class CarService {

  constructor(private http: Http) {}

  getCarsMedium() {
    return this.http.get('app/data/cars-medium.json')
      .map((res) => res.json());

  }
}
