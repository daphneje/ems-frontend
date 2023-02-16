import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../projects/list-project/list-project.component';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  baseUrl: string="http://localhost:8080/api/"

  listProjects():Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl + 'projects')
  }

  viewproject(projectId: string) {
    return this.http.get(this.baseUrl + 'projects/' + projectId)
  }

  addproject(projectObj:any) {
    return this.http.post(this.baseUrl + 'projects', projectObj)
  }

  deleteproject(projectId:any) {
    return this.http.delete(this.baseUrl+'projects/'+ projectId)
  }

  editproject(projectId:any, projectObj:any) {
    return this.http.put(this.baseUrl+'projects/' +projectId, projectObj)
  }
}
