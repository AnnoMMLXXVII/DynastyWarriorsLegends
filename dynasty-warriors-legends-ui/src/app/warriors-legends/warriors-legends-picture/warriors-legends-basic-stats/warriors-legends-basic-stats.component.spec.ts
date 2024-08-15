import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorsLegendsBasicStatsComponent } from './warriors-legends-basic-stats.component';

describe('WarriorsLegendsBasicStatsComponent', () => {
  let component: WarriorsLegendsBasicStatsComponent;
  let fixture: ComponentFixture<WarriorsLegendsBasicStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarriorsLegendsBasicStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarriorsLegendsBasicStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
