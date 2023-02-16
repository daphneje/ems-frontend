import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { _MatOptgroupBase } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { DepartmentService } from 'src/app/services/department.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit {
  employeeId: any;
  employeeDetails: any;
  editEmployeeForm: FormGroup = new FormGroup({});
  listEmployees: any;
  listUsernames: string[] = [];
  listProjects: any
  listProjectNames: string[] = []
  departments: any;
  projects: any;
  hide = true;
  load:boolean = false;
  genericUser = this.employeeService.genericUser
  admin = this.adminService.admin

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private employeeService: EmployeeService, private departmentService: DepartmentService, private projectService: ProjectService, private adminService: AdminService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.getDepartmentList();
    this.getProjectList();

    this.activatedRoute.params.subscribe((data) => {
      this.employeeId = data['employeeId'];
    });

    if (this.employeeId !== '') {
      this.employeeService
        .viewEmployee(this.employeeId)
        .toPromise()
        .then((data) => {
          this.employeeDetails = data;
          console.log(data);

          this.listProjects=this.employeeDetails.projects
          // console.log("listProjects =", this.listProjects);

          for (let i = 0; i < this.listProjects.length; i++) {
          this.listProjectNames.push(this.listProjects[i].projectName)
          }
          // console.log("listProjectNames= ", this.listProjectNames)

          this.editEmployeeForm = this.formBuilder.group({
            'firstName': new FormControl(this.employeeDetails.firstName, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
            'lastName': new FormControl(this.employeeDetails.lastName, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
            'username': new FormControl(this.employeeDetails.username, [Validators.minLength(4), Validators.maxLength(12)]),
            'password': new FormControl(this.employeeDetails.password, [Validators.minLength(8), Validators.maxLength(20)]),
            'emailId': new FormControl(this.employeeDetails.emailId, [Validators.email]),
            'mobileNumber': new FormControl(this.employeeDetails.mobileNumber, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
            'department': new FormControl(this.employeeDetails.department, [Validators.required]),
            'projects': new FormControl(this.employeeDetails.projects),
            'createdBy': new FormControl(this.employeeDetails.createdBy),
            'updatedBy': new FormControl(this.employeeDetails.updatedBy, [Validators.required]),
          });

    this.addUsernameValidator();

        });
    }

  }

  addUsernameValidator(){
    this.editEmployeeForm.controls['username'].setAsyncValidators([this.isValidNameNotInList()]);
  }

  getFields(input: any, field: any){
    let output = [];
    for (let i = 0; i < input.length; ++i)
    output.push(input[i][field]);
    return output;
  }

  getUsernames() {
    this.employeeService.listEmployees().subscribe(data => {
      this.listEmployees=data
      // console.log(this.listEmployees);
      this.listUsernames=this.getFields(this.listEmployees, "username")
      // console.log(this.listUsernames);
    })
  };
  
  isValidNameNotInList(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
        let bReturn: boolean = true;
        for (let i = 0; i < this.listUsernames.length; i++){
          if (this.editEmployeeForm.controls['username'].value == this.listUsernames[i])
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

  updateEmployee() {
    // console.log(this.editEmployeeForm.value);
    this.employeeService.editEmployee(this.employeeId, this.editEmployeeForm.value).subscribe(data=>{
      this._snackBar.open("Employee edited successfully")
    })
  }
}
