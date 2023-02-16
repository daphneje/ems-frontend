import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({})
  loginError=false

  constructor(private formBuilder:FormBuilder, private route: ActivatedRoute, private router: Router, private employeeService:EmployeeService, private snackBar:MatSnackBar) { }

  ngOnInit():void{
    this.loginForm=this.formBuilder.group({
      "username":new FormControl("", Validators.required),
      "password":new FormControl("", Validators.required)
    })
  }

  get loginFormControl(){
    return this.loginForm.controls
  }

  loginAction(){
    console.log("login button works")
    if(this.loginForm.valid){
      this.loginError=false
      console.log(this.loginForm.value)
      this.employeeService.loginUser(this.loginForm.value).subscribe(data=>{
        if(data != null){

          this.snackBar.open("Login success!", "Dismiss",{
            duration:5000
          })
          console.log("login success")
          // this.auditService.addAudit({
          //   "action": this.employeeService.currentEmp + " logged in",
          //   "editor": this.employeeService.currentEmp
          // }).subscribe()
          this.router.navigate(['view', data], { relativeTo: this.route });
        }
        else{
          this.snackBar.open("Username/password incorrect", "Dismiss",{
            duration:5000
          })
          console.log("login failed")
        }
      })
    }
    else{
      console.log("Login form does not meet requirements")
    }
    
  }

  

}