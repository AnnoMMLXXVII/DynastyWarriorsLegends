import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WarriorsLegendsAPIService } from '../../../_services/warriors-legends-api.service';
import { KINGDOMS } from '../../../_shared/enums/warriors-constants';
import { WarriorsApiEndpoints } from '../../../_shared/warriors-api-endpoints';
import { WarriorsLegendsDetailsService } from '../warriors-legends-details.service';
@Component({
  selector: 'warriors-legends-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './warriors-legends-list.component.html',
  styleUrl: './warriors-legends-list.component.scss'
})
export class WarriorsLegendsListComponent implements OnInit {

  public officers: any[] = [];
  public filteredOfficers: any[] = [];
  public kingdomSelected: String = "";
  public kingdoms: KINGDOMS[] = []

  constructor(private apiService: WarriorsLegendsAPIService, private legendsDetailsService: WarriorsLegendsDetailsService) {
    this.filteredOfficers = [];
    this.getAllOfficers();
    this.kingdoms = [KINGDOMS.SHU, KINGDOMS.WEI, KINGDOMS.WU, KINGDOMS.JIN, KINGDOMS.OTHER]

  }

  public ngOnInit() {
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
    this.legendsDetailsService.resetOfficerImage();
    this.kingdomSelected = k;
    // console.log(k);
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
    // console.log(this.filteredOfficers);
  }

  displayLegendDetails(legend: any) {
    this.legendsDetailsService.setLegendToDisplay(legend);
  }



}
