import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { _MatOptgroupBase } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  addEmployeeForm:FormGroup = new FormGroup({})
  employees: any;
  listEmployees: any;
  listUsernames: string[] = [];
  departments: any;
  projects: any;
  hide = true;

  constructor(private formBuilder:FormBuilder, private employeeService: EmployeeService, private departmentService: DepartmentService, private projectService: ProjectService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
      this.getDepartmentList();
      this.getProjectList();
      this.getUsernames();

      this.addEmployeeForm=this.formBuilder.group({
        'firstName': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
        'lastName': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
        'username': new FormControl('', [Validators.minLength(4), Validators.maxLength(12)]),
        'password': new FormControl('', [Validators.minLength(8), Validators.maxLength(20)]),
        'emailId':new FormControl('', [Validators.email]),
        'mobileNumber': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
        'department': new FormControl('', [Validators.required]),
        'projects': new FormControl('',),
        'createdBy': new FormControl('', [Validators.required]),
      })

      this.addUsernameValidator();
  }

  addUsernameValidator(){
    this.addEmployeeForm.controls['username'].setAsyncValidators([this.isValidNameNotInList()]);
  }

  getFields(input: any, field: any){
    let output = [];
    for (let i = 0; i < input.length; ++i)
    output.push(input[i][field]);
    return output;
  }

  isValidNameNotInList(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        let bReturn: boolean = true;
        for (let i = 0; i < this.listUsernames.length; i++){
          if (this.addEmployeeForm.controls['username'].value == this.listUsernames[i])
          {
              bReturn = false;
          }
        }
        let err: ValidationErrors = { 'exists': true };
        return bReturn ? of(null) : of(err);
    };
  }

  getDepartmentList() {
    this.departments = this.departmentService.listDepartments();
  }

  getProjectList() {
    this.projects = this.projectService.listProjects();
    console.log(this.projects)
  }

  getUsernames() {
    this.employeeService.listEmployees().subscribe(data => {
      this.listEmployees=data
      // console.log(this.listEmployees);
      this.listUsernames=this.getFields(this.listEmployees, "username")
      // console.log(this.listUsernames);
    })
  };

  createEmployee() {
    console.log(this.addEmployeeForm.value)
    this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(data=>{
      this._snackBar.open("The employee is added successfully")
      this.addEmployeeForm.reset();

      this.addEmployeeForm.controls['firstName'].clearValidators();
      this.addEmployeeForm.controls['firstName'].updateValueAndValidity();
      this.addEmployeeForm.controls['lastName'].clearValidators();
      this.addEmployeeForm.controls['lastName'].updateValueAndValidity();
      this.addEmployeeForm.controls['mobileNumber'].clearValidators();
      this.addEmployeeForm.controls['mobileNumber'].updateValueAndValidity();
      this.addEmployeeForm.controls['department'].clearValidators();
      this.addEmployeeForm.controls['department'].updateValueAndValidity();
      this.addEmployeeForm.controls['createdBy'].clearValidators();
      this.addEmployeeForm.controls['createdBy'].updateValueAndValidity();
    })
  }

}
