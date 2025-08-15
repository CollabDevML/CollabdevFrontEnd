import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribeurMesprojetsComponent } from './contribeur-mesprojets.component';

describe('ContribeurMesprojetsComponent', () => {
  let component: ContribeurMesprojetsComponent;
  let fixture: ComponentFixture<ContribeurMesprojetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContribeurMesprojetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContribeurMesprojetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
