import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuPorteurComponent } from './sidebar-menu-porteur.component';

describe('SidebarMenuPorteurComponent', () => {
  let component: SidebarMenuPorteurComponent;
  let fixture: ComponentFixture<SidebarMenuPorteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuPorteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuPorteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
