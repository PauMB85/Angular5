import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNgforTrackByComponent } from './my-ngfor-track-by.component';

describe('MyNgforTrackByComponent', () => {
  let component: MyNgforTrackByComponent;
  let fixture: ComponentFixture<MyNgforTrackByComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNgforTrackByComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNgforTrackByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
