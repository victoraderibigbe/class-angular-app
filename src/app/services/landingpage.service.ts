import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingpageService {

  constructor() { }

  public item = 'Hello world, this is coming from Landing Page Service'

  returnItem() {
    return this.item
  }
}
