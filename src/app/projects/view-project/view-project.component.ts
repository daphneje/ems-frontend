import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/services/department.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectService } from 'src/app/services/project.service';

export interface Department {
  departmentId: number;
  departmentName: string;
}

export interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  username: string;
  emailId: string;
  mobileNumber: string;
  department: any;
  projects: any
}

const ELEMENT_DATA: Employee[] = [ ];

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {

  displayedColumns: string[] = [
    'employeeId', 'firstName', 'lastName', 'username', 'emailId', 'mobileNumber'];
  dataSource = ELEMENT_DATA;

  constructor(private employeeService:EmployeeService, private departmentService:DepartmentService, private projectService:ProjectService, private activatedRoute:ActivatedRoute) {}

  projectId:any
  projectDetails:any
  projectName:any
  listEmployees: Employee[]=[]
  listDepartments: Department[]=[]
  listProjectDepartments:Department[]=[]
  listProjectEmployees:Employee[]=[]

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(data=>{
      this.projectId=data['projectId']
      console.log(this.projectId)
    })

    this.projectService.viewproject(this.projectId).subscribe(data=> {
      this.projectDetails=data
      this.projectName=this.projectDetails.projectName
    })

    this.departmentService.listDepartments().subscribe(data => {
      this.listDepartments=data
      console.log(this.listDepartments)
    })

    this.employeeService.listEmployees().subscribe(data => {
      this.listEmployees=data
      console.log(this.listEmployees)
    })
    
    for (let i = 0; i < this.listEmployees.length; i++) {
       for (let j = 0; j < this.listEmployees[i].projects.length; j++) {
        if(this.listEmployees[i].projects[j].projectId == this.projectId) {
        this.listProjectEmployees.push(this.listEmployees[i])

        console.log("this.listProjectEmployees= ", this.listProjectEmployees)
        }
      }
    }

    // this.listProjectEmployees = this.listEmployees.filter((e:Employee) => e.projects.projectId == this.projectId);
  }
}
