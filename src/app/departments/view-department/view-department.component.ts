import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';

export interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  username: string;
  emailId: string;
  mobileNumber: string;
  department: any;
}

const ELEMENT_DATA: Employee[] = [ ];

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {

  displayedColumns: string[] = [
    'employeeId', 'firstName', 'lastName', 'username', 'emailId', 'mobileNumber'];
  dataSource = ELEMENT_DATA;

  constructor(private employeeService:EmployeeService, private departmentService:DepartmentService, private activatedRoute:ActivatedRoute) {}

  departmentId:any
  departmentDetails:any
  departmentName:any
  listEmployees: Employee[]=[]
  listDepartmentEmployees:Employee[]=[]

  ngOnInit(): void {
    
      this.activatedRoute.params.subscribe(data=>{
        this.departmentId=data['departmentId']
        console.log(this.departmentId)
      })

      this.departmentService.viewdepartment(this.departmentId).subscribe(data=> {
        this.departmentDetails=data
        this.departmentName=this.departmentDetails.departmentName
      })

      this.employeeService.listEmployees().subscribe(data => {
        this.listEmployees=data
        console.log(this.listEmployees)

        // for (let i = 0; i < this.listEmployees.length; i++) {
        //   if(this.listEmployees[i].department.departmentId == this.departmentId) {
        //     this.listDepartmentEmployees.push({...this.listEmployees[i]})
        //   }
        // }
        
        this.listDepartmentEmployees = this.listEmployees.filter((e:Employee) => e.department.departmentId == this.departmentId);

        console.log("this.listDepartmentEmployees= ", this.listDepartmentEmployees)
      })
  }
}
