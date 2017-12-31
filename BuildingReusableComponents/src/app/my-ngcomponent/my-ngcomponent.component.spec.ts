import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgcomponentComponent } from './my-ngcomponent.component';

describe('MyNgcomponentComponent', () => {
  let component: MyNgcomponentComponent;
  let fixture: ComponentFixture<MyNgcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
