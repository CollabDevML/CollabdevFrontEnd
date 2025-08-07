import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesIdeeProjetComponent } from './mes-idee-projet.component';

describe('MesIdeeProjetComponent', () => {
  let component: MesIdeeProjetComponent;
  let fixture: ComponentFixture<MesIdeeProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesIdeeProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesIdeeProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
