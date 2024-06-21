import { TestBed } from '@angular/core/testing';
import { AboutLegendsComponent } from './about-legends.component';


describe('AboutLegendsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutLegendsComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AboutLegendsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'dynasty-warriors-legends-ui' title`, () => {
    const fixture = TestBed.createComponent(AboutLegendsComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dynasty-warriors-legends-ui');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AboutLegendsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, dynasty-warriors-legends-ui');
  });
});
