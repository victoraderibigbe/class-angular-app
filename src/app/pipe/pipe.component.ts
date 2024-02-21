import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  public time: any = ''

  ngOnInit() {
    this.time = new Date()
    console.log(this.time)
  }
}
