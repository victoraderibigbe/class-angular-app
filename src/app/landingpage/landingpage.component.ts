import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ContactService } from '../services/contact.service';

interface ContactInterface {
  firstname: string,
  lastname: string,
  email: string,
  address: string,
  phonenumber: string,
  gender: string
}

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})

export class LandingpageComponent {

  constructor(public contactRoutes: Router, public service:ContactService) { }

  public first_name = ''
  public last_name = ''
  public email = ''
  public address = ''
  public phone_number = ''
  public gender = ''

  public formInputStyle = ''
  public formBtnStyle = ''

  public contactArray: ContactInterface[] = []

  ngOnInit() {
    this.formInputStyle = this.service.inputStyle()
    this.formBtnStyle = this.service.btnStyle()
    this.contactArray = this.service.contactArr()

    if (localStorage['contacts']) {
      let userContacts = JSON.parse(localStorage['contacts'])
      this.contactArray = userContacts
    }
    else {
      console.log('no data found');
    }
  }

  addContact() {
    if (localStorage['contacts']) {
      let userContacts = JSON.parse(localStorage['contacts'])
      this.contactArray = userContacts
    }

    let contactObj = {
      firstname: this.first_name,
      lastname: this.last_name,
      email: this.email,
      address: this.address,
      phonenumber: this.phone_number,
      gender: this.gender,
    }

    console.log(contactObj);

    this.contactArray.push(contactObj)
    console.log(this.contactArray);
    localStorage.setItem('contacts', JSON.stringify(this.contactArray))

  }

  edit(i: number) {
    console.log(i);

  }

  del(i: number) {
    console.log(i);
    // this.contactArray=this.contactArray.filter((item:any, id:number)=> i==id)
    let x = this.contactArray.filter((contact, index) => index != i)
    console.log(x);
    this.contactArray = x
    
    localStorage.setItem('contacts', JSON.stringify(this.contactArray))
  }

}
