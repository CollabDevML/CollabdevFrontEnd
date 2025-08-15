import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribeurIdeesprojetsComponent } from './contribeur-ideesprojets.component';

describe('ContribeurIdeesprojetsComponent', () => {
  let component: ContribeurIdeesprojetsComponent;
  let fixture: ComponentFixture<ContribeurIdeesprojetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContribeurIdeesprojetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContribeurIdeesprojetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
