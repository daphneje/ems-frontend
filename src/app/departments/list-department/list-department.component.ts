import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

export interface Department {
  departmentId: number;
  departmentName: string;
  createdBy: string;
  createdAt: string;
}

const ELEMENT_DATA: Department[] = [ ];

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

  displayedColumns: string[] = ['departmentId', 'departmentName','createdBy', 'createdAt','actions'];
  dataSource = ELEMENT_DATA;

  constructor(private departmentService:DepartmentService) {}

  listDepartments:Department[]=[]

  ngOnInit(): void {
      this.departmentService.listDepartments().subscribe(data => {
        this.listDepartments=data
      });
  }
}
