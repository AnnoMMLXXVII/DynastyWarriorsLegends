import { Component } from '@angular/core';
import { WarriorsLegendsAPIService } from '../_services/warriors-legends-api.service';
import { WarriorsApiEndpoints } from '../_shared/warriors-api-endpoints.enum';
import { WarriorsLegendsBasicStatsComponent } from "./warriors-legends-picture/warriors-legends-basic-stats/warriors-legends-basic-stats.component";
import { WarriorsLegendsListComponent } from "./warriors-legends-picture/warriors-legends-list/warriors-legends-list.component";
import { WarriorsLegendsWeaponsComponent } from "./warriors-legends-picture/warriors-legends-weapons/warriors-legends-weapons.component";
import { WarriorsLegendsPictureComponent } from "./warriors-legends-picture/warrors-legends-picture/warriors-legends-picture.component";
@Component({
  selector: 'dynasty-warriors-legends',
  standalone: true,
  imports: [WarriorsLegendsPictureComponent,
    WarriorsLegendsWeaponsComponent,
    WarriorsLegendsListComponent,
    WarriorsLegendsBasicStatsComponent,
  ],
  templateUrl: './warriors-legends.component.html',
  styleUrl: './warriors-legends.component.scss'
})
export class WarriorsLegendsComponent {

  public allAttributes: any[] = []

  constructor(private apiService: WarriorsLegendsAPIService) {
    // this.getAllAttributes();
  }

  public getAllAttributes() {
    this.apiService.httpGet(WarriorsApiEndpoints.ATTRIBUTES_URL).subscribe(
      (e: any) => {
        this.allAttributes = e;
      });
  }


}
