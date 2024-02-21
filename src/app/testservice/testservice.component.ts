import { Component } from '@angular/core';
import { LandingpageService } from '../services/landingpage.service';

@Component({
  selector: 'app-testservice',
  standalone: true,
  imports: [],
  templateUrl: './testservice.component.html',
  styleUrl: './testservice.component.css'
})
export class TestserviceComponent {
  constructor(public service:LandingpageService){}

  public message = 'BytesNova'

  ngOnInit() {
    this.message = this.service.returnItem()
    console.log(this.message);
    
  }
}
