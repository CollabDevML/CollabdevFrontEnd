import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributionTacheComponent } from './attribution-tache.component';

describe('AttributionTacheComponent', () => {
  let component: AttributionTacheComponent;
  let fixture: ComponentFixture<AttributionTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributionTacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributionTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
