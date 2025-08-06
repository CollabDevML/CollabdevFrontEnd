import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionIdeeProjetComponent } from './proposition-idee-projet.component';

describe('PropositionIdeeProjetComponent', () => {
  let component: PropositionIdeeProjetComponent;
  let fixture: ComponentFixture<PropositionIdeeProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropositionIdeeProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropositionIdeeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
