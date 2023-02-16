import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AuthenticationAdminService } from 'src/app/services/authentication-admin.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit{

  adminUsername = ''
  adminPassword = ''
  invalidLogin = false

  adminLoginForm:FormGroup=new FormGroup({})

  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute, private router: Router, private adminService:AdminService, private adminloginservice: AuthenticationAdminService, private snackBar:MatSnackBar) { }

  ngOnInit():void{
    
    this.adminLoginForm=this.formBuilder.group({
      "adminUsername":new FormControl("", Validators.required),
      "adminPassword":new FormControl("", Validators.required)
    })
  }

  checkAdminLogin() {
    console.log(this.adminLoginForm.value)
    console.log(this.adminUsername)
    console.log(this.adminPassword)
    if (this.adminloginservice.authenticate(this.adminUsername, this.adminPassword)
    ) {
      this.router.navigate(['employees/list'])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }
}





























  // adminLoginAction(){
  //   console.log("login button works")
  //   if(this.adminLoginForm.valid){
  //     this.loginError=false
  //     console.log(this.adminLoginForm.value)
  //     this.adminService.loginAdmin(this.adminLoginForm.value).subscribe(data=>{
  //       if(data != null){

  //         this.snackBar.open("Login success!", "Dismiss",{
  //           duration:5000
  //         })
  //         console.log("login success ", data)
  //         // this.auditService.addAudit({
  //         //   "action": this.adminService.currentAdmin + " logged in",
  //         //   "editor": this.adminService.currentAdmin
  //         // }).subscribe()
  //         this.router.navigate(['admin/all']);
  //       }
  //       else{
  //         this.snackBar.open("Username/password incorrect", "Dismiss",{
  //           duration:5000
  //         })
  //         console.log("login failed")
  //       }
  //     })
  //   }
  //   else{
  //     console.log("Login form does not meet requirements")
  //   }
    
  // }

