import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeurssComponent } from './contributeurss.component';

describe('ContributeurssComponent', () => {
  let component: ContributeurssComponent;
  let fixture: ComponentFixture<ContributeurssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributeurssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributeurssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
