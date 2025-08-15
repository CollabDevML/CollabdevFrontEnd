import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuSuperAdministrateurComponent } from './sidebar-menu-super-administrateur.component';

describe('SidebarMenuSuperAdministrateurComponent', () => {
  let component: SidebarMenuSuperAdministrateurComponent;
  let fixture: ComponentFixture<SidebarMenuSuperAdministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuSuperAdministrateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuSuperAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
