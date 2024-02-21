import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { log } from 'node:console';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { initFlowbite } from 'flowbite';

interface ObjectName {
  firstname: string,
  lastname: string,
  age: number
}

interface ObjectName2 {
  firstname: string,
  lastname: string,
  age: number,
  address: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingpageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'first-class';

  public firstname = 'Samuel'; // Can be used outside the current class component
  private lastname = 'Sunday'; // Can only be used within the current class component
  public age = 30;
  public bool = true;
  public address: string = 'No 10, Adenike, Ogbomoso, Oyo state, Nigeria';
  public email: string = 'elonmusk@gmail.com';

  // Declare an object with interface 'ObjectName'
  public obj1: ObjectName = {
    firstname: 'Daniel',
    lastname: 'Segun',
    age: 56
  }

  public arrary1: number[] = [45, 23, 43, 56] // Accept only data type 'number'
  public array2: string[] = ['Sola', 'Moyin', 'Kola', 'Lola'] // Accept only data type 'string'
  public array3: (string | number | boolean)[] = ['String', 34, true, 'Agba Dev'] // Accept only specified data types
  public array: any[] = ['Kemi', 23, false] // Accept any data type

  // Array of Objects
  public array4: ObjectName2[] = [
    {
      firstname: 'Doyin',
      lastname: 'Samsudeen',
      age: 56,
      address: 'Iwo'
    },
    {
      firstname: 'Toyin',
      lastname: 'Tobiloba',
      age: 16,
      address: 'Ogbomoso'
    },
  ]

  public special = true
  public librarystyling = 'w-96 h-16 border border-slate-400 m-5 outline-none px-3'

  check() {
    this.special = !this.special
  }

  checkIndex(index: number) {
    console.log(index);

  }

  ngOnInit(): void {
    initFlowbite();
    for (let index = 0; index < this.array4.length; index++) {
      console.log(this.array4[index].firstname);
    }

  };
  // Union, inference, interface
}
