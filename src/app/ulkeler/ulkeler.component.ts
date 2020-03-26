import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ApiService} from '../api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

export interface PeriodicElement {
  country: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
}



/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-ulkeler',
  templateUrl: './ulkeler.component.html',
  styleUrls: ['./ulkeler.component.css']
})
export class UlkelerComponent implements OnInit {
  datas = [];
  dataSource: MatTableDataSource<PeriodicElement>;
  // tslint:disable-next-line:max-line-length
  displayedColumns: string[] = ['country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'active', 'critical', 'casesPerOneMillion', 'deathsPerOneMillion'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.sendGetRequest('countries').subscribe((api: any[]) => {
      console.log(api);
      this.datas = api;
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.datas);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
