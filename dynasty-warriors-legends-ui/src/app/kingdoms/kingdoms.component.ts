import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'dynasty-warriors-kingdoms',
  standalone: true,
  imports: [],
  templateUrl: './kingdoms.component.html',
  styleUrl: './kingdoms.component.scss'
})
export class KingdomsComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(e => {
      e.get("/kingdoms");
    })
  }

}
