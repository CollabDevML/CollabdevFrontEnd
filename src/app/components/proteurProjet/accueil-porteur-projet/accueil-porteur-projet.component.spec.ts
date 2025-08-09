import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilPorteurProjetComponent } from './accueil-porteur-projet.component';

describe('AccueilPorteurProjetComponent', () => {
  let component: AccueilPorteurProjetComponent;
  let fixture: ComponentFixture<AccueilPorteurProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilPorteurProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilPorteurProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
