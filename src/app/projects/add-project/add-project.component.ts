import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { _MatOptgroupBase } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit{

  addEmployeeForm:FormGroup = new FormGroup({})
  employees: any;
  listEmployees: any;
  listUsernames: string[] = [];
  departments: any;
  projects: any;

  constructor(private formBuilder:FormBuilder, private employeeService: EmployeeService, private departmentService: DepartmentService, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
      this.getDepartmentList();

      this.addEmployeeForm=this.formBuilder.group({
        'firstName': new FormControl('', [Validators.required, Validators.minLength(2)]),
        'lastName': new FormControl('', [Validators.required, Validators.minLength(2)]),
        'emailId':new FormControl('', [Validators.email]),
        'username': new FormControl('', [Validators.minLength(4), Validators.maxLength(12)]),
        'password': new FormControl('', [Validators.minLength(8), Validators.maxLength(20)]),
        'mobileNumber': new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
        'department': new FormControl('', [Validators.required]),
        'project': new FormControl('',),
        'createdBy': new FormControl(''),
      })

      this.addValidator();
            
      this.employeeService.listEmployees().subscribe(data => {
        this.listEmployees=data
        // console.log(this.listEmployees);
        this.listUsernames=this.getFields(this.listEmployees, "username")
        // console.log(this.listUsernames);
      })
  }

  addValidator(){
    this.addEmployeeForm.controls['username'].setAsyncValidators([this.isValidNameNotInList()]);
  }

  getEmployeeList() {
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

  createEmployee() {
    console.log(this.addEmployeeForm.value)
    this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(data=>{
      this._snackBar.open("The employee is added successfully")
    })
  }
}
