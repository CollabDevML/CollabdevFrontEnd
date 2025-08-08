import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardprojetComponent } from './cardprojet.component';

describe('CardprojetComponent', () => {
  let component: CardprojetComponent;
  let fixture: ComponentFixture<CardprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardprojetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
