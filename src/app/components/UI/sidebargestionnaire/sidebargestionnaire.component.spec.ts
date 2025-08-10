import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebargestionnaireComponent } from './sidebargestionnaire.component';

describe('SidebargestionnaireComponent', () => {
  let component: SidebargestionnaireComponent;
  let fixture: ComponentFixture<SidebargestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebargestionnaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebargestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
