import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit{

  addEmployeeForm:FormGroup = new FormGroup({})

  constructor(private formBuilder:FormBuilder, private employeeService: EmployeeService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
      this.addEmployeeForm=this.formBuilder.group({
        'firstName': new FormControl('', [Validators.required, Validators.minLength(2)]),
        'lastName': new FormControl('', [Validators.required, Validators.minLength(2)]),
        'emailId':new FormControl('', [Validators.email]),
        'mobileNumber': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
        'departmentId': new FormControl('', [Validators.required]),
        // 'projectId': new FormControl('',),
        'createdBy': new FormControl(''),
      })
  }

  createEmployee() {
    // console.log(this.addEmployeeForm.value)
    this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(data=>{
      this._snackBar.open("The employee is added successfully")
    })
  }
}
