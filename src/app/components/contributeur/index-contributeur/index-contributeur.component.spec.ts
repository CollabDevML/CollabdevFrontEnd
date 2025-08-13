import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexContributeurComponent } from './index-contributeur.component';

describe('IndexContributeurComponent', () => {
  let component: IndexContributeurComponent;
  let fixture: ComponentFixture<IndexContributeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexContributeurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexContributeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
