import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorsLegendsComponent } from './warriors-legends.component';

describe('WarriorsLegendsComponent', () => {
  let component: WarriorsLegendsComponent;
  let fixture: ComponentFixture<WarriorsLegendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarriorsLegendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarriorsLegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
