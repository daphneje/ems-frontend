import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { LogoutAdminComponent } from './admin/logout-admin/logout-admin.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { DeleteDepartmentComponent } from './departments/delete-department/delete-department.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { ListDepartmentComponent } from './departments/list-department/list-department.component';
import { ViewDepartmentComponent } from './departments/view-department/view-department.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './employees/delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';
import { LoginEmployeeComponent } from './employees/login-employee/login-employee.component';
import { ViewEmployeeComponent } from './employees/view-employee/view-employee.component';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { AddProjectComponent } from './projects/add-project/add-project.component';
import { DeleteProjectComponent } from './projects/delete-project/delete-project.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { ListProjectComponent } from './projects/list-project/list-project.component';
import { ViewProjectComponent } from './projects/view-project/view-project.component';

const routes: Routes = [

  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  {
    path: 'home',
    component:MainPageComponent
  },
  {
    path:'admin',
    children:[
        { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
        },
      {
        path: 'login',
        component:LoginAdminComponent 
      },
      {
        path: 'logout',
        component:LogoutAdminComponent 
      },
      {
        path: 'list',
        component:ListEmployeeComponent
      },
      {
        path:'view/:employeeId',
        component:ViewEmployeeComponent
      },
      {
        path:'edit/:employeeId',
        component:EditEmployeeComponent
      },
      {
        path:'delete/:employeeId',
        component:DeleteEmployeeComponent
      },
      {
        path:'create',
        component:AddEmployeeComponent
      }
    ]
  },
  {
    path:'employees',
    children:[
      { 
        path: '', 
        redirectTo: 'list', 
        pathMatch: 'full' 
      },
      {
        path: 'login',
        component:LoginEmployeeComponent // adminlogin
      },
      {
        path: 'list',
        component:ListEmployeeComponent
      },
      {
        path:'view/:employeeId',
        component:ViewEmployeeComponent
      },
      {
        path:'edit/:employeeId',
        component:EditEmployeeComponent
      },
      {
        path:'delete/:employeeId',
        component:DeleteEmployeeComponent
      },
      {
        path:'create',
        component:AddEmployeeComponent
      }
    ]
  },
  {
    path:'departments',
    children:[
      {
        path: '',
        component:ListDepartmentComponent
      },
      {
        path: 'list',
        component:ListDepartmentComponent
      },
      {
        path:'view/:departmentId',
        component:ViewDepartmentComponent
      },
      {
        path:'edit/:departmentId',
        component:EditDepartmentComponent
      },
      {
        path:'delete/:departmentId',
        component:DeleteDepartmentComponent
      },
      {
        path:'create',
        component:AddDepartmentComponent
      }
    ]
  },
  {
    path:'projects',
    children:[
      {
        path: '',
        component:ListProjectComponent
      },
      {
        path: 'list',
        component:ListProjectComponent
      },
      {
        path:'view/:projectId',
        component:ViewProjectComponent
      },
      {
        path:'edit/:projectId',
        component:EditProjectComponent
      },
      {
        path:'delete/:projectId',
        component:DeleteProjectComponent
      },
      {
        path:'create',
        component:AddProjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
