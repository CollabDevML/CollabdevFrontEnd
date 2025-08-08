import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGestionnaireComponent } from './index-gestionnaire.component';

describe('IndexGestionnaireComponent', () => {
  let component: IndexGestionnaireComponent;
  let fixture: ComponentFixture<IndexGestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexGestionnaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
