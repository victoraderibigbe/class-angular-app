import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

interface StudentInterface {
  email: string,
  password: string
}

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
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

  login() {
    let currentUser = this.studentArray.find((student, index) => this.email === student.email && this.password === student.password)
    // console.log(currentUser);

    if (currentUser) {
      // this.service.setCurrentUser(currentUser)
      localStorage.setItem('curent_user', JSON.stringify(currentUser))
      this.routes.navigate(['/dashboard'])
    }
    else {
      this.message = 'User not found'
    }

  }

}
