import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { WarriorsLegendsAPIService } from '../../../_services/warriors-legends-api.service';
import { Weapon } from '../../../_shared/models/warriors-legends-models/warriors-legends-models';
import { WarriorsLegendsDetailsService } from '../warriors-legends-details.service';

@Component({
  selector: 'warriors-legends-weapons',
  standalone: true,
  imports: [NgFor],
  templateUrl: './warriors-legends-weapons.component.html',
  styleUrl: './warriors-legends-weapons.component.scss'
})
export class WarriorsLegendsWeaponsComponent implements OnInit, OnDestroy {

  public warriorsWeaponsDetails: Weapon[] = [];
  private subscription: Subscription = new Subscription;

  constructor(private apiService: WarriorsLegendsAPIService, private legendsDetailsService: WarriorsLegendsDetailsService) {

  }

  ngOnInit() {
    this.subscription = this.legendsDetailsService
      .getLegendDisplayDetails().subscribe((e: {
        weapons: Weapon[];
      }) => {
        this.warriorsWeaponsDetails = e.weapons;
      });
  }

  public getWarriorsWeapon() {
    this.warriorsWeaponsDetails;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.warriorsWeaponsDetails = [];
  }

  public resetWarriorsWeaponsDetails() {
    this.warriorsWeaponsDetails = [];
  }

}
