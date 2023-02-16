import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AdminService } from './services/admin.service';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'EMS';
  loggedIn = this.employeeService.loginStatus()

  showSide: boolean = true;

  constructor(private router: Router, private employeeService:EmployeeService, private adminService:AdminService) { }

    // on route change to '/login', set the variable showHead to false
      // router.events.forEach((event) => {
      //   if (event instanceof NavigationStart) {
      //     if (event['url'] == '/login') {
      //       this.showSide = false;
      //     } else {
      //       this.showSide = true;
      //     }
      //   }
      // });
      // }

  ngOnInit(): void {
    
  }

  logoutAction(){
    console.log("logged out")
    if(this.adminService.admin){
      // this.auditService.addAudit({
      //   "action": this.adminService.currentAdmin + " logged out",
      //   "editor": this.adminService.currentAdmin
      // }).subscribe()
    }
    else{
      // this.auditService.addAudit({
      //   "action": this.employeeService.currentEmp + " logged out",
      //   "editor": this.employeeService.currentEmp
      // }).subscribe()
    }
    
    this.employeeService.logoutUser()
  }
}