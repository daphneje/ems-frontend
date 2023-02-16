import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AddEmployeeComponent,
    ViewEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    ListEmployeeComponent,
    LoginEmployeeComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
  ],
  providers:[{
    provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:3000}
  }]
})
export class EmployeesModule { }
