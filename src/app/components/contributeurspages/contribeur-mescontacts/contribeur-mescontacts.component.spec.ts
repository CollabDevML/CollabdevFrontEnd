import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribeurMescontactsComponent } from './contribeur-mescontacts.component';

describe('ContribeurMescontactsComponent', () => {
  let component: ContribeurMescontactsComponent;
  let fixture: ComponentFixture<ContribeurMescontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContribeurMescontactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContribeurMescontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
