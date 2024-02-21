import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  constructor(public formbuilder: FormBuilder) { }

  public formone = this.formbuilder.group({
    firstname: ['', [Validators.required, Validators.maxLength(20)]],
    lastname: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.minLength(5), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  })

  public firstname: any = ''
  public lastname: any = ''
  public email: any = ''
  public password: any = ''

  ngOnInit() {
    this.firstname = this.formone.value['firstname']
    this.lastname = this.formone.value['lastname']
    this.email = this.formone.value['email']
    this.password = this.formone.value['password']
  }

  register() {
    this.formone.controls['firstname'].setValue('')
    this.formone.controls['lastname'].setValue('')
    this.formone.controls['email'].setValue('')
    this.formone.controls['password'].setValue('')
  }

}
