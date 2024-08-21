import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorsLegendsListComponent } from './warriors-legends-list.component';

describe('WarriorsLegendsListComponent', () => {
  let component: WarriorsLegendsListComponent;
  let fixture: ComponentFixture<WarriorsLegendsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarriorsLegendsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarriorsLegendsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
