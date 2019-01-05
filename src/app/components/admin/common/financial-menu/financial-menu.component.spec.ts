import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialMenuComponent } from './financial-menu.component';

describe('FinancialMenuComponent', () => {
  let component: FinancialMenuComponent;
  let fixture: ComponentFixture<FinancialMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
