import { Component } from '@angular/core';
import { EventchildComponent } from '../eventchild/eventchild.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventparent',
  standalone: true,
  imports: [EventchildComponent, FormsModule],
  templateUrl: './eventparent.component.html',
  styleUrl: './eventparent.component.css'
})
export class EventparentComponent {

  public text: any = ''
  public newtext = ''
  public data = ''

  send() {
    this.newtext = this.text
    console.log(this.newtext);

  }

  receiveresponse(data: any) {
    this.data = data
    console.log(this.data);
    

  }

}
