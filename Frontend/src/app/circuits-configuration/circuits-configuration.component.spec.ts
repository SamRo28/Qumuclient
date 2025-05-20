import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitsConfigurationComponent } from './circuits-configuration.component';

describe('CircuitsConfigurationComponent', () => {
  let component: CircuitsConfigurationComponent;
  let fixture: ComponentFixture<CircuitsConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitsConfigurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitsConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
