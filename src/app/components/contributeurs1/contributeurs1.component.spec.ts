import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contributeurs1Component } from './contributeurs1.component';

describe('Contributeurs1Component', () => {
  let component: Contributeurs1Component;
  let fixture: ComponentFixture<Contributeurs1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contributeurs1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contributeurs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
