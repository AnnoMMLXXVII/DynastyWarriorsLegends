import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KingdomsComponent } from './kingdoms/kingdoms.component';
import { NavMenuBarComponent } from './nav-menu-bar/nav-menu-bar.component';
import { WarriorsLegendsComponent } from './warriors-legends/warriors-legends.component';
import { WeaponsComponent } from './weapons/weapons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavMenuBarComponent, WarriorsLegendsComponent, KingdomsComponent, WeaponsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
