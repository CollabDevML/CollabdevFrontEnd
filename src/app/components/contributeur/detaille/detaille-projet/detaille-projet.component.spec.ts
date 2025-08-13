import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleProjetComponent } from './detaille-projet.component';

describe('DetailleProjetComponent', () => {
  let component: DetailleProjetComponent;
  let fixture: ComponentFixture<DetailleProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailleProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailleProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
