import { NgFor } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { WarriorsLegendsAPIService } from '../../../_services/warriors-legends-api.service';
import { KINGDOMS } from '../../../_shared/enums/warriors-kingdom-enums';
import { WarriorsApiEndpoints } from '../../../_shared/warriors-api-endpoints.enum';
@Component({
  selector: 'warriors-legends-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './warriors-legends-list.component.html',
  styleUrl: './warriors-legends-list.component.scss'
})
export class WarriorsLegendsListComponent implements AfterViewInit {

  public officers: any[] = [];
  public filteredOfficers: any[] = [];
  public kingdomSelected: String = "";
  public kingdoms: KINGDOMS[] = []
  constructor(private apiService: WarriorsLegendsAPIService) {
    this.filteredOfficers = [];
    this.getAllOfficers();
    this.kingdoms = [KINGDOMS.SHU, KINGDOMS.WEI, KINGDOMS.WU, KINGDOMS.JIN, KINGDOMS.OTHER]

  }

  // actions after page loads
  public ngAfterViewInit() {
    this.selectedKingdom(KINGDOMS.SHU);
  }


  public getAllKingdoms() {
    return this.kingdoms;
  }

  public getAllOfficers() {
    this.apiService.httpGet(WarriorsApiEndpoints.OFFICERS_URL).subscribe(
      (e: any) => {
        this.officers = e;
      });
  }

  public selectedKingdom(k: any) {
    this.kingdomSelected = k;
    console.log(k);
    this.updateFilteredOfficers();
  }

  private updateFilteredOfficers() {
    if (this.filteredOfficers.length > 0) {
      this.filteredOfficers = []; // clear any existing list;
    }
    this.officers.forEach(e => {
      if (e.kingdom === this.kingdomSelected.toUpperCase()) {
        this.filteredOfficers.push(e);
      }
    });
    console.log(this.filteredOfficers);
  }



}
