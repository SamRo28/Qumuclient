import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantsGeneralComponent } from './mutants-general.component';

describe('MutantsGeneralComponent', () => {
  let component: MutantsGeneralComponent;
  let fixture: ComponentFixture<MutantsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutantsGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutantsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
