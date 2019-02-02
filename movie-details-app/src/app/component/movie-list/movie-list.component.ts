import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MovieDetailsService } from 'src/app/services/movie-details.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  title = 'Movie List';
  searchfilter: any;
  movieList: String[];
  key: any = 'title';
  reverse: boolean = false;
  p: number = 1;
  constructor(private movieService: MovieDetailsService) { }
  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(data => {
      this.movieList = data as String[];
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse;
  }
}
