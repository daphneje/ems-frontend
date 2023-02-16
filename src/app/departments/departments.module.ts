import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { ListDepartmentComponent } from './list-department/list-department.component';
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
import { ViewDepartmentComponent } from './view-department/view-department.component';

@NgModule({
  declarations: [
    AddDepartmentComponent,
    EditDepartmentComponent,
    DeleteDepartmentComponent,
    ListDepartmentComponent,
    ViewDepartmentComponent
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
    MatSelectModule
  ],
  providers:[{
    provide:MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue:{duration:3000}
  }]
})
export class DepartmentsModule { }
