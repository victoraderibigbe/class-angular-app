import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

interface StudentInterface {
  firstname: string,
  lastname: string,
  email: string,
  password: string
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  constructor(public routes: Router, public service: ContactService) { }

  public formInputStyle = ''
  public formBtnStyle = ''

  public first_name = ''
  public last_name = ''
  public email = ''
  public password = ''

  public message = ''
  public studentArray: StudentInterface[] = []

  ngOnInit() {
    this.formInputStyle = this.service.inputStyle()
    this.formBtnStyle = this.service.btnStyle()

    this.studentArray = JSON.parse(localStorage['students'])
    console.log(this.studentArray);

  }

  add() {
    // console.log(this.first_name);
    
    console.log('active')
    let studentObj: StudentInterface = {
      firstname: this.first_name,
      lastname: this.last_name,
      email: this.email,
      password: this.password
    }
    console.log(studentObj);
    this.studentArray.push(studentObj)

    localStorage.setItem('students', JSON.stringify(this.studentArray))
    console.log(this.studentArray);


    if (this.studentArray.push(studentObj)) {
      this.routes.navigate(['/signin'])
    }
    else {
      this.message = 'Registration failed'
    }
  }

}
