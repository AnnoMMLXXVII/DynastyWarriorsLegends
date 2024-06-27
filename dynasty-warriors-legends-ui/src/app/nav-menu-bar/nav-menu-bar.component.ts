import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'warriors-nav-menu-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-menu-bar.component.html',
  styleUrl: './nav-menu-bar.component.scss'
})
export class NavMenuBarComponent {


};

