import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDepartmentComponent } from './delete-department.component';

describe('DeleteComponent', () => {
  let component: DeleteDepartmentComponent;
  let fixture: ComponentFixture<DeleteDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
