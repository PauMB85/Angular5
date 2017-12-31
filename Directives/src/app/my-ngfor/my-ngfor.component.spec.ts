import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgforComponent } from './my-ngfor.component';

describe('MyNgforComponent', () => {
  let component: MyNgforComponent;
  let fixture: ComponentFixture<MyNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
