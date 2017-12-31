import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgstyleComponent } from './my-ngstyle.component';

describe('MyNgstyleComponent', () => {
  let component: MyNgstyleComponent;
  let fixture: ComponentFixture<MyNgstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
