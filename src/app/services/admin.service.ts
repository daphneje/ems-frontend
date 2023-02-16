import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient, private route: ActivatedRoute, private router: Router) { }

  baseUrl:string="http://localhost:8080/api/"

  loggedIn= false;
  admin = false;
  currentAdmin:any

  loginAdmin(loginObj:any){
    const loginCheck = this.http.post(this.baseUrl + "admin/login", loginObj)
    if(loginCheck!=null){
      this.loggedIn = true
      this.admin = true;
      this.currentAdmin = loginObj.username
    }
    return loginCheck
    
  }
}