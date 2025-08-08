import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPorteurProjetComponent } from './index-porteur-projet.component';

describe('IndexPorteurProjetComponent', () => {
  let component: IndexPorteurProjetComponent;
  let fixture: ComponentFixture<IndexPorteurProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexPorteurProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPorteurProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
