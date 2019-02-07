import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgencyDataService {

  constructor(private httpService: HttpClient) { }
  getMovieList() {
    return this.httpService.get('./assets/agency-data.json');
  }
}
