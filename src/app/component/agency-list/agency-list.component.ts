import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AgencyDataService } from 'src/app/services/agency-data.service';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.css']
})
export class AgencyListComponent implements OnInit {

  title = 'Agency List';
  agencyList: String[];
  order: string = 'title';
  searchfilter: any;
  reverse: boolean = false;
  p: number = 1;
  constructor(private agencyService: AgencyDataService) { }
  ngOnInit(): void {
    this.agencyService.getMovieList().subscribe(data => {
      this.agencyList = data as String[];
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }
 
  sort(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
