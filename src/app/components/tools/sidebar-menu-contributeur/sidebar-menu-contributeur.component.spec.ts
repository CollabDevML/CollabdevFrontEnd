import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuContributeurComponent } from './sidebar-menu-contributeur.component';

describe('SidebarMenuContributeurComponent', () => {
  let component: SidebarMenuContributeurComponent;
  let fixture: ComponentFixture<SidebarMenuContributeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuContributeurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarMenuContributeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
