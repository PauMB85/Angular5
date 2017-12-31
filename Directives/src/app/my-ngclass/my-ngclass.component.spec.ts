import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgclassComponent } from './my-ngclass.component';

describe('MyNgclassComponent', () => {
  let component: MyNgclassComponent;
  let fixture: ComponentFixture<MyNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
