import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit{

  employeeId:string=''
  constructor(private activatedRoute:ActivatedRoute, private employeeService:EmployeeService, private router:Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(data=>{
        this.employeeId=data['employeeId']
        console.log(this.employeeId)
      });

      if(this.employeeId){
        if(confirm('Confirm to proceed with the deletion of employee record')) {
          this.employeeService.deleteEmployee(this.employeeId).subscribe(data=>{
            // console.log("Employee got deleted");
            this._snackBar.open("The employee is deleted successfully")
            this.router.navigate(['/employees'])
          })
        } else {
          this._snackBar.open("Deletion cancelled")
          this.router.navigate(['/employees'])
        }

      }
  }
}
