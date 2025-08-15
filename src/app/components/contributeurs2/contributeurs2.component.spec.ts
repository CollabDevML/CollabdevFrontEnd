import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contributeurs2Component } from './contributeurs2.component';

describe('Contributeurs2Component', () => {
  let component: Contributeurs2Component;
  let fixture: ComponentFixture<Contributeurs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contributeurs2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contributeurs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
