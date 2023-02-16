import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})

export class ViewEmployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService, private activatedRoute:ActivatedRoute) {}

  employeeId:any
  employeeDetails:any
  listEmployees: any;
  listProjects: any
  listProjectNames: string[] = []

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(data=>{
        this.employeeId=data['employeeId']

        console.log(this.employeeId)
      })

      this.employeeService.viewEmployee(this.employeeId).subscribe(data=>{
        // console.log(data)
        this.employeeDetails=data
        // console.log(this.employeeDetails.username)
        // console.log("employeeDetails = ", this.employeeDetails)

        this.listProjects=this.employeeDetails.projects
        // console.log("listProjects =", this.listProjects);

        for (let i = 0; i < this.listProjects.length; i++) {
        this.listProjectNames.push(this.listProjects[i].projectName)
        }
        // console.log("listProjectNames= ", this.listProjectNames)
        
      })
  }

  getFields(input: any, field: any){
    let output = [];
    for (let i = 0; i < input.length; i++)
    output.push(input[i].field);
    return output;
  }

}

