import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { FormsModule } from '@angular/forms';

interface ContactInterface {
  firstname: string,
  lastname: string,
  email: string,
  address: string,
  phonenumber: string,
  gender: string
}

@Component({
  selector: 'app-displaycontact',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './displaycontact.component.html',
  styleUrl: './displaycontact.component.css'
})

export class DisplaycontactComponent {
  constructor(public activated: ActivatedRoute, public routes: Router, public service: ContactService) { }

  public userIndex: number = 0

  public first_name = ''
  public last_name = ''
  public email = ''
  public address = ''
  public phone_number = ''
  public gender = ''

  contactObj: ContactInterface = {
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phonenumber: '',
    gender: '',
  }

  public formInputStyle = ''
  public formBtnStyle = ''

  public contactArray: ContactInterface[] = []

  ngOnInit() {
    this.contactArray = JSON.parse(localStorage['contacts'])
    // console.log(contactArray);
    // console.log(this.activated.snapshot.params['index']);
    this.userIndex = this.activated.snapshot.params['index']

    this.contactObj = this.contactArray[this.userIndex]

    this.first_name = this.contactObj.firstname
    this.last_name = this.contactObj.lastname
    this.email = this.contactObj.email
    this.address = this.contactObj.address
    this.phone_number = this.contactObj.phonenumber
    this.gender = this.contactObj.gender

    this.formInputStyle = this.service.inputStyle()
    this.formBtnStyle = this.service.btnStyle()

  }

  edit(userIndex: number) {
    // console.log(this.first_name)

    let updateContactObj: ContactInterface = {
      firstname: this.first_name,
      lastname: this.last_name,
      email: this.email,
      address: this.address,
      phonenumber: this.phone_number,
      gender: this.gender
    }
    console.log(updateContactObj)
    this.contactArray.splice(userIndex, 1, updateContactObj)
    localStorage.setItem('contacts', JSON.stringify(this.contactArray))

  }

  del(userIndex: number) {
    console.log(userIndex);
    let x = this.contactArray.filter((contact, index) => index != userIndex)
    console.log(x);
    this.contactArray = x
    localStorage.setItem('contacts', JSON.stringify(this.contactArray))
  }
}
