import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeesProjetComponent } from './idees-projet.component';

describe('IdeesProjetComponent', () => {
  let component: IdeesProjetComponent;
  let fixture: ComponentFixture<IdeesProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeesProjetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeesProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
