import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantCycleInfoComponent } from './mutant-cycle-info.component';

describe('MutantCycleInfoComponent', () => {
  let component: MutantCycleInfoComponent;
  let fixture: ComponentFixture<MutantCycleInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutantCycleInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutantCycleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
