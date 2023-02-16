import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationAdminService } from 'src/app/services/authentication-admin.service';

@Component({
  selector: 'app-logout-admin',
  templateUrl: './logout-admin.component.html',
  styleUrls: ['./logout-admin.component.css']
})
export class LogoutAdminComponent implements OnInit{

  constructor(
    private authentocationService: AuthenticationAdminService,
    private router: Router) {
  }

  ngOnInit(): void {
      this.authentocationService.logOut();
      this.router.navigate(['']);
  }

}
