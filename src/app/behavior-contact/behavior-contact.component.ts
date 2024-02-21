import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-behavior-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './behavior-contact.component.html',
  styleUrl: './behavior-contact.component.css'
})
export class BehaviorContactComponent {
  constructor(public formBuilder: FormBuilder) { }

  public contactform = this.formBuilder.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    phonenumber: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
    address: [''],
    birthday: [''],
    profession: [''],
  })

  public firstname: any = ''
  public lastname: any = ''
  public phonenumber: any = ''
  public email: any = ''
  public address: any = ''
  public birthday: any = ''
  public profession: any = ''

  public allContacts: any[] = []

  ngOnInit() {
    if (localStorage['contacts']) {
      this.allContacts = JSON.parse(localStorage['contacts'])
      console.log(this.allContacts);
    }

    this.firstname = this.contactform.value['firstname']
    this.lastname = this.contactform.value['lastname']
    this.phonenumber = this.contactform.value['phonenumber']
    this.email = this.contactform.value['email']
    this.address = this.contactform.value['address']
    this.birthday = this.contactform.value['birthday']
    this.profession = this.contactform.value['profession']
  }

  clearInputFields() {
    this.contactform.controls['firstname'].setValue('')
    this.contactform.controls['lastname'].setValue('')
    this.contactform.controls['phonenumber'].setValue('')
    this.contactform.controls['email'].setValue('')
    this.contactform.controls['address'].setValue('')
    this.contactform.controls['birthday'].setValue('')
    this.contactform.controls['profession'].setValue('')
  }

  addContact() {
    console.log(this.contactform.value)
    this.allContacts = [...this.allContacts, this.contactform.value]
    console.log(this.allContacts);
    localStorage.setItem('contacts', JSON.stringify(this.allContacts))
    this.clearInputFields()
    window.location.reload()
  }

}
