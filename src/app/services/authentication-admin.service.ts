import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationAdminService {

  constructor() { }

  authenticate(adminUsername: string, adminPassword: string) {
    if (adminUsername == "admin1" && adminPassword == "admin1password") {
      sessionStorage.setItem('adminUsername', adminUsername)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('adminUsername')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('adminUsername')
  }
  
}
