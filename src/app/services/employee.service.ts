import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employees/list-employee/list-employee.component';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient, private route: ActivatedRoute, private router: Router, private adminService: AdminService) { }

  baseUrl: string="http://localhost:8080/api/"

  loggedIn= false;
  genericUser = false;
  currentEmp:any

  loginUser(loginObj:any){
    const loginCheck = this.http.post(this.baseUrl + "employees/login", loginObj)
    console.log(loginCheck)
    if(loginCheck != null){
      this.loggedIn = true
      this.genericUser = true
      this.currentEmp = loginObj.username
      return loginCheck
    }
    return loginCheck
    
  }

  loginStatus(){
    return this.loggedIn
  }

  logoutUser(){
    this.loggedIn = false
    this.adminService.admin = false
    this.router.navigate(["employees"], { relativeTo: this.route })
  }
  
  listEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + 'employees')
  }

  viewEmployee(employeeId: string) {
    return this.http.get(this.baseUrl + 'employees/' + employeeId)
  }

  addEmployee(employeeObj:any) {
    return this.http.post(this.baseUrl + 'employees', employeeObj)
  }

  deleteEmployee(employeeId:any) {
    return this.http.delete(this.baseUrl+'employees/'+ employeeId)
  }

  editEmployee(employeeId:any, employeeObj:any) {
    return this.http.put(this.baseUrl+'employees/' +employeeId, employeeObj)
  }

}
