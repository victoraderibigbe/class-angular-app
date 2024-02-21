import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-templatedrivenform',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './templatedrivenform.component.html',
  styleUrl: './templatedrivenform.component.css'
})
export class TemplatedrivenformComponent {
  constructor(public formService:ContactService){}

  public first_name = ''
  public city = ''

  public formInputStyle = ''
  public formBtnStyle = ''

  public is_valid = 'w-full h-16 border border-slate-400 my-5 outline-none px-3 text-xl rounded-lg focus-within:border-2 focus-within:border-slate-800 transition'

  public is_invalid = 'w-full h-16 border border-red-500 my-5 outline-none px-3 text-xl rounded-lg focus-within:border-2 focus-within:border-red-500 transition'

  ngOnInit(){
    this.formInputStyle = this.formService.inputStyle()
    this.formBtnStyle = this.formService.btnStyle()
  }

}
