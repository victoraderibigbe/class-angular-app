import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  constructor() { }
  public behavior = new BehaviorSubject({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    address: '',
    birthday: '',
    profession: '',
  })
}
