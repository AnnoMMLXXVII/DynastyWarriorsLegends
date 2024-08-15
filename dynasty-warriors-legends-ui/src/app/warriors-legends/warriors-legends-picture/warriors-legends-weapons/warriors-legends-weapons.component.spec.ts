import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorsLegendsWeaponsComponent } from './warriors-legends-weapons.component';

describe('WarriorsLegendsWeaponsComponent', () => {
  let component: WarriorsLegendsWeaponsComponent;
  let fixture: ComponentFixture<WarriorsLegendsWeaponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarriorsLegendsWeaponsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarriorsLegendsWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
