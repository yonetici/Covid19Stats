import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  datas = [];
  p: number = 1;
    constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.sendGetRequest('countries').subscribe((api: any[])=>{
      console.log(api);
      this.datas = api;
    });
  }

}
