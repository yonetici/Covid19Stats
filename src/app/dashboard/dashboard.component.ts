import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {formatNumber} from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  veri: any;
  today: number = Date.now();
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.sendGetRequest('all').subscribe((api: any) => {
      console.log(api);
      this.veri = api;
    });
  }

  RakamDuzelt(rakam):string {
    return formatNumber(rakam,'tr');
  }
}
