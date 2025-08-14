import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetgestionnairedetailComponent } from './projetgestionnairedetail.component';

describe('ProjetgestionnairedetailComponent', () => {
  let component: ProjetgestionnairedetailComponent;
  let fixture: ComponentFixture<ProjetgestionnairedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetgestionnairedetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetgestionnairedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
