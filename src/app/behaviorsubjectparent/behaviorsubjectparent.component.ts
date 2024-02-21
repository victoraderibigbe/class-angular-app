import { Component } from '@angular/core';
import { Behaviourchild1Component } from '../behaviourchild1/behaviourchild1.component';
import { Behaviourchild2Component } from '../behaviourchild2/behaviourchild2.component';
import { BehaviourService } from '../services/behaviour.service';
import { CommonModule } from '@angular/common';
import { BehaviorContactComponent } from '../behavior-contact/behavior-contact.component';

@Component({
  selector: 'app-behaviorsubjectparent',
  standalone: true,
  imports: [Behaviourchild1Component, Behaviourchild2Component, BehaviorContactComponent, CommonModule],
  templateUrl: './behaviorsubjectparent.component.html',
  styleUrl: './behaviorsubjectparent.component.css'
})
export class BehaviorsubjectparentComponent {
  constructor(public behavior: BehaviourService) { }

  public behavior_obj: any = {}
  public isEmpty: boolean = true;
  public openAddContact: boolean = false;

  ngOnInit() {
    this.behavior.behavior.subscribe(res => {
      console.log(res);
      this.behavior_obj = res
      console.log(this.behavior_obj);

      if (this.behavior_obj.firstname != '' && this.behavior_obj.lastname != '' && this.behavior_obj.email != '' && this.behavior_obj.password != '') {
        this.isEmpty = false

      }
    })
    console.log(this.isEmpty);
  }

  openAddContactFunc() {
    this.openAddContact = true;
  }

  createContact() { }

  deleteAllContacts() { }

}
