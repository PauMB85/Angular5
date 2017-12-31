import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgifComponent } from './my-ngif.component';

describe('MyNgifComponent', () => {
  let component: MyNgifComponent;
  let fixture: ComponentFixture<MyNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
