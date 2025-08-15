import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuAdministrateurComponent } from './sidebar-menu-administrateur.component';

describe('SidebarMenuAdministrateurComponent', () => {
  let component: SidebarMenuAdministrateurComponent;
  let fixture: ComponentFixture<SidebarMenuAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuAdministrateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
