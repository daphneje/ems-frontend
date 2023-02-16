import { Component, OnInit } from '@angular/core';
import { AuthenticationAdminService } from 'src/app/services/authentication-admin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(private adminLoginService:AuthenticationAdminService) {}

  ngOnInit(): void {
      
  }
}
