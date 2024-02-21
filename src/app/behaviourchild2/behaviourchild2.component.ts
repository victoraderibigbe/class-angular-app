import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-behaviourchild2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './behaviourchild2.component.html',
  styleUrl: './behaviourchild2.component.css'
})
export class Behaviourchild2Component {
  constructor(public behavior: BehaviourService) { }

  public behavior_obj: any = {}
  public openEdit: boolean = false

  ngOnInit() {
    this.behavior.behavior.subscribe(res => {
      console.log(res);
      this.behavior_obj = res
      console.log(this.behavior_obj);
    })
  }

  openEditFunc() {
    this.openEdit = true;
  }

  update() {
    localStorage.setItem('user_info', JSON.stringify(this.behavior_obj))
    
  }

}
