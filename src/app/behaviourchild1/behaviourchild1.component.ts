import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-behaviourchild1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviourchild1.component.html',
  styleUrl: './behaviourchild1.component.css'
})
export class Behaviourchild1Component {
  constructor(public behavior: BehaviourService) { }

  public firstname: any = ''
  public lastname: any = ''
  public phonenumber: any = ''
  public email: any = ''
  public address: any = ''
  public birthday: any = ''
  public profession: any = ''

  // public behaviour_array: any = [
  //   {
  //     firstname: 'Johnson',
  //     lastname: 'Israel',
  //     email: 'johnson@gmail.com',
  //     password: 'fish'
  //   },
  //   {
  //     firstname: 'John',
  //     lastname: 'Doe',
  //     email: 'johndoe@gmail.com',
  //     password: 'fish'
  //   },
  //   {
  //     firstname: 'Jeffrey',
  //     lastname: 'Benson',
  //     email: 'jeff@gmail.com',
  //     password: 'fish'
  //   },
  //   {
  //     firstname: 'Pablo',
  //     lastname: 'Richie',
  //     email: 'richie@gmail.com',
  //     password: 'fish'
  //   },
  // ]

  public allContacts: any[] = []

  ngOnInit() {
    if (localStorage['contacts']) {
      this.allContacts = JSON.parse(localStorage['contacts'])
      console.log(this.allContacts);

    }
  }

  sendList(list: any) {
    // console.log(list);
    this.behavior.behavior.next(list) // Update behavior subject with current list
  }
}
