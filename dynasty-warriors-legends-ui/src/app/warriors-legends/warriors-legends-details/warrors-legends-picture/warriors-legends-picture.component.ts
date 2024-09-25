import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WarriorsLegendsDetailsService } from '../warriors-legends-details.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'warriors-legends-picture',
  standalone: true,
  imports: [NgIf],
  templateUrl: './warriors-legends-picture.component.html',
  styleUrl: './warriors-legends-picture.component.scss'
})
export class WarriorsLegendsPictureComponent implements OnInit, OnDestroy {
  public image: any;
  public altImage: any;
  private subscription: Subscription = new Subscription;
  constructor(private legendsDetailsService: WarriorsLegendsDetailsService) {

  }

  ngOnInit() {
    this.subscription = this.legendsDetailsService
      .getLegendDisplayDetails().subscribe((e: {
        name: any; image: any;
      }) => {
        this.image = e.image;
        this.altImage = e.name
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.image = "";
  }

  resetImage() {
    this.image = null;
    this.altImage = null;
  }


}
