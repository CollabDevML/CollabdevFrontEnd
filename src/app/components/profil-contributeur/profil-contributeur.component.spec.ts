import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilContributeurComponent } from './profil-contributeur.component';

describe('ProfilContributeurComponent', () => {
  let component: ProfilContributeurComponent;
  let fixture: ComponentFixture<ProfilContributeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilContributeurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilContributeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
