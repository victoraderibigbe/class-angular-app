import { Injectable } from '@angular/core';

interface ContactInterface {
  firstname: string,
  lastname: string,
  email: string,
  address: string,
  phonenumber: string,
  gender: string
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  public inputStyles = 'w-full h-16 border border-slate-400 my-5 outline-none px-3 text-xl rounded-lg focus-within:border-2 focus-within:border-slate-800 transition'
  
  inputStyle() {
    return this.inputStyles
  }

  public formBtnStyles = 'w-full bg-slate-800 h-16 text-white text-xl font-semibold rounded-lg transition hover:opacity-80'

  btnStyle() {
    return this.formBtnStyles
  }

  public contactArray: ContactInterface[] = []

  contactArr() {
    return this.contactArray
  }

  public currentuser: any = ''
  
  setCurrentUser(data: any) {
    this.currentuser = data
  }

  getCurrentUser() {
    return this.currentuser
  }
}
