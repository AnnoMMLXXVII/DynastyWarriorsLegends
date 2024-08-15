import { Component } from '@angular/core';
import { WarriorsLegendsPictureComponent } from "./warriors-legends-picture/warrors-legends-picture/warriors-legends-picture.component";
import { WarriorsLegendsWeaponsComponent } from "./warriors-legends-picture/warriors-legends-weapons/warriors-legends-weapons.component";
import { WarriorsLegendsListComponent } from "./warriors-legends-picture/warriors-legends-list/warriors-legends-list.component";
import { WarriorsLegendsBasicStatsComponent } from "./warriors-legends-picture/warriors-legends-basic-stats/warriors-legends-basic-stats.component";

@Component({
  selector: 'dynasty-warriors-legends',
  standalone: true,
  imports: [WarriorsLegendsPictureComponent, WarriorsLegendsWeaponsComponent, WarriorsLegendsListComponent, WarriorsLegendsBasicStatsComponent],
  templateUrl: './warriors-legends.component.html',
  styleUrl: './warriors-legends.component.scss'
})
export class WarriorsLegendsComponent {

}
