import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemManagementMenuComponent } from './system-management-menu.component';

describe('SystemManagementMenuComponent', () => {
  let component: SystemManagementMenuComponent;
  let fixture: ComponentFixture<SystemManagementMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemManagementMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemManagementMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
