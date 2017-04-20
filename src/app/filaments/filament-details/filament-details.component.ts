import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FilamentDetailView } from '../services/mockfilaments/mockfilaments.service';

@Component({
  selector: 'app-filament-details',
  templateUrl: './filament-details.component.html',
  styleUrls: ['../../common/css/details/details.css', './filament-details.component.css']
})
export class FilamentDetailsComponent implements OnInit {

  filament: FilamentDetailView;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: {filament: FilamentDetailView}) => {
        this.filament = data.filament;
      })
  }

}
