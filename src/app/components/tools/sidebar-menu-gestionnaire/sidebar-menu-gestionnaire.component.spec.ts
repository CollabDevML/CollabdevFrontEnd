import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuGestionnaireComponent } from './sidebar-menu-gestionnaire.component';

describe('SidebarMenuGestionnaireComponent', () => {
  let component: SidebarMenuGestionnaireComponent;
  let fixture: ComponentFixture<SidebarMenuGestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuGestionnaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuGestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
