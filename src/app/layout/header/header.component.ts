import { Component, OnInit } from '@angular/core';
import { AuthenticationAdminService } from 'src/app/services/authentication-admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(public adminLoginService:AuthenticationAdminService) { }

  ngOnInit() {
    
  }
}
