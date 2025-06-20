import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantsCodeComponent } from './mutants-code.component';

describe('MutantsCodeComponent', () => {
  let component: MutantsCodeComponent;
  let fixture: ComponentFixture<MutantsCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutantsCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutantsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
