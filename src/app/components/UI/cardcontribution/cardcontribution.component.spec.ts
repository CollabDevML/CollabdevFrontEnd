import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcontributionComponent } from './cardcontribution.component';

describe('CardcontributionComponent', () => {
  let component: CardcontributionComponent;
  let fixture: ComponentFixture<CardcontributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardcontributionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardcontributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
