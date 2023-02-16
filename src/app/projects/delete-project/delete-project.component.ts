import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit{

  employeeId:string=''
  constructor(private activatedRoute:ActivatedRoute, private employeeService:EmployeeService, private router:Router) {}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(data=>{
        this.employeeId=data['id']
      });

      if(this.employeeId){
        this.employeeService.deleteEmployee(this.employeeId).subscribe(data=>{
          console.log("Employee got deleted");
          this.router.navigate(['/employees'])
        })
      }
  }
}
