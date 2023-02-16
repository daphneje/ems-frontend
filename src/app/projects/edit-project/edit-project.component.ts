import { ConditionalExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})

export class EditProjectComponent implements OnInit {
  employeeId: any;
  employeeDetails: any;
  editEmployeeForm: FormGroup = new FormGroup({});

  constructor(
    private activatedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    private formBuilder: FormBuilder, private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // this.load = false;

    this.activatedRoute.params.subscribe((data) => {
      this.employeeId = data['id'];
    });

    if (this.employeeId !== '') {
      this.employeeService
        .viewEmployee(this.employeeId)
        .toPromise()
        .then((data) => {
          this.employeeDetails = data;
          console.log(data);

          this.editEmployeeForm = this.formBuilder.group({
            firstName: new FormControl(this.employeeDetails.firstName),
            lastName: new FormControl(this.employeeDetails.lastName),
            emailId: new FormControl(this.employeeDetails.emailId),
          });
        });
    }

  }

  updateEmployee() {
    // console.log(this.editEmployeeForm.value);
    this.employeeService.editEmployee(this.employeeId, this.editEmployeeForm.value).subscribe(data=>{
      this._snackBar.open("Employee edited successfully")
    })
  }
}
