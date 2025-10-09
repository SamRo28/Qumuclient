import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutantsVisualComponent } from './mutants-visual.component';

describe('MutantsVisualComponent', () => {
  let component: MutantsVisualComponent;
  let fixture: ComponentFixture<MutantsVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutantsVisualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutantsVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
