import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformServiceComponent } from './platform-service.component';

describe('PlatformServiceComponent', () => {
  let component: PlatformServiceComponent;
  let fixture: ComponentFixture<PlatformServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
