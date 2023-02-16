import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Employee {
  employeeId: number;
  firstName: string;
  lastName: string;
  username: string;
  emailId: string;
  mobileNumber: string;
  department: any;
  projects: any
  // createdBy: string;
  // createdAt: string;
  // updatedBy: string;
  // updatedAt: string;
}

const ELEMENT_DATA: Employee[] = [ ];

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements AfterViewInit {

  displayedColumns: string[] = ['employeeId', 'firstName', 'lastName', 'username', 'emailId', 'mobileNumber', 'departmentName', 
  // 'createdBy', 'createdAt', 'updatedBy', 'updatedAt', 
  'actions'];
  dataSource = ELEMENT_DATA;
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private employeeService:EmployeeService, private _liveAnnouncer: LiveAnnouncer) {}

  listEmployees:Employee[]=[]

  // @ViewChild(MatSort)
  // sort!: MatSort;

  ngAfterViewInit(): void {
      this.employeeService.listEmployees().subscribe(data => {
        this.listEmployees=data

        // this.dataSource.sort = this.sort;

        
      })
  }

  //   announceSortChange(sortState: Sort) {
  //   // This example uses English messages. If your application supports
  //   // multiple language, you would internationalize these strings.
  //   // Furthermore, you can customize the message to add additional
  //   // details about the values being sorted.
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }
  
}
