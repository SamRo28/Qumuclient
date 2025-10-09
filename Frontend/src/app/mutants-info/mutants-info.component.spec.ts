import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantsInfoComponent } from './mutants-info.component';

describe('MutantsInfoComponent', () => {
  let component: MutantsInfoComponent;
  let fixture: ComponentFixture<MutantsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutantsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutantsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
