import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlisingInputPropertiesComponent } from './alising-input-properties.component';

describe('AlisingInputPropertiesComponent', () => {
  let component: AlisingInputPropertiesComponent;
  let fixture: ComponentFixture<AlisingInputPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlisingInputPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlisingInputPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
