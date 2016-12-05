export class Adresse {
  private _quartier:string;
  private _contact:string[];
  private _email:string;


  get quartier(): string {
    return this._quartier;
  }

  set quartier(value: string) {
    this._quartier = value;
  }


  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
