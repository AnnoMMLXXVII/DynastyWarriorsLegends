import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuBarComponent } from './nav-menu-bar/nav-menu-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavMenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
