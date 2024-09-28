import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarriorsLegendsPictureComponent } from './warriors-legends-picture.component';

describe('warriorsLegendsPictureComponent', () => {
  let component: WarriorsLegendsPictureComponent;
  let fixture: ComponentFixture<WarriorsLegendsPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarriorsLegendsPictureComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WarriorsLegendsPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
