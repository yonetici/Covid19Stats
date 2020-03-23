import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  today: number = Date.now();
  veri: any;
  country: string;

  constructor(private actRoute: ActivatedRoute, private apiService: ApiService) {
    this.country = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.apiService.sendGetRequest('countries/' + this.country).subscribe((api: any) => {
      console.log(api);
      this.veri = api;
    });
  }
}
