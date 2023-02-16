import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

export interface Project {
  projectId: number;
  projectName: string;
  projectInfo: string;
  createdBy: string;
  createdAt: string;
}

const ELEMENT_DATA: Project[] = [ ];

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})
export class ListProjectComponent implements OnInit {

  displayedColumns: string[] = ['projectId', 'projectName', 'projectInfo', 'createdBy', 'createdAt'
  // ,'actions'
  ];
  dataSource = ELEMENT_DATA;

  constructor(private projectService:ProjectService) {}

  listProjects:Project[]=[]

  ngOnInit(): void {
      this.projectService.listProjects().subscribe(data => {
        this.listProjects=data
      })
  }
}