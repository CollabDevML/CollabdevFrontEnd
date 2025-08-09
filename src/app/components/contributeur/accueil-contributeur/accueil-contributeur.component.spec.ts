import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilContributeurComponent } from './accueil-contributeur.component';

describe('AccueilContributeurComponent', () => {
  let component: AccueilContributeurComponent;
  let fixture: ComponentFixture<AccueilContributeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilContributeurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilContributeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
