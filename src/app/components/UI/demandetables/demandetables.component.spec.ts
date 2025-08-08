import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandetablesComponent } from './demandetables.component';

describe('DemandetablesComponent', () => {
  let component: DemandetablesComponent;
  let fixture: ComponentFixture<DemandetablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandetablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
