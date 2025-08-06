import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeIdeeProjetComponent } from './liste-idee-projet.component';

describe('ListeIdeeProjetComponent', () => {
  let component: ListeIdeeProjetComponent;
  let fixture: ComponentFixture<ListeIdeeProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeIdeeProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeIdeeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
