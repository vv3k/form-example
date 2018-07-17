import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationmenuComponent } from './operationmenu.component';

describe('OperationmenuComponent', () => {
  let component: OperationmenuComponent;
  let fixture: ComponentFixture<OperationmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
