import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuBarComponent } from './nav-menu-bar.component';

describe('NavMenuBarComponent', () => {
  let component: NavMenuBarComponent;
  let fixture: ComponentFixture<NavMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuBarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
