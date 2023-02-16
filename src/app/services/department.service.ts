import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../departments/list-department/list-department.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  baseUrl: string="http://localhost:8080/api/"
  
  listDepartments():Observable<Department[]> {
    return this.http.get<Department[]>(this.baseUrl + 'departments')
  }

  viewdepartment(departmentId: string) {
    return this.http.get(this.baseUrl + 'departments/' + departmentId)
  }

  adddepartment(departmentObj:any) {
    return this.http.post(this.baseUrl + 'departments', departmentObj)
  }

  deletedepartment(departmentId:any) {
    return this.http.delete(this.baseUrl+'departments/'+ departmentId)
  }

  editdepartment(departmentId:any, departmentObj:any) {
    return this.http.put(this.baseUrl+'departments/' +departmentId, departmentObj)
  }
}
