import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgswitchCaseComponent } from './my-ngswitch-case.component';

describe('MyNgswitchCaseComponent', () => {
  let component: MyNgswitchCaseComponent;
  let fixture: ComponentFixture<MyNgswitchCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgswitchCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgswitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
