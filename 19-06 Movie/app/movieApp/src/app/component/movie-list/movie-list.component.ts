import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: any;
  searchTerm = '';
  sortBy = 'title';
  reverse = false;
  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.getMoviesData();
  }

  getMoviesData(): any {
    this.service.getData().subscribe((data: any) => {
      this.movies = data;
    });
  }
}



// // Filter and Sort Functions
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'sort'
// })
// export class SortPipe implements PipeTransform {
//   transform(movies: any[], sortBy: string, reverse: boolean): any[] {
//     return movies.sort((a, b) => {
//       if (sortBy === 'title') {
//         return a.title.localeCompare(b.title);
//       } else if (sortBy === 'rating') {
//         return a.rating - b.rating;
//       } else if (sortBy === 'language') {
//         return a.language.localeCompare(b.language);
//       }
//     }).reverse(reverse);
//   }
// }

// // Component
// import { Component } from '@angular/core';
// import { SortPipe } from './sort.pipe';

// @Component({
//   selector: 'app-movies',
//   templateUrl: './movies.component.html',
//   styleUrls: ['./movies.component.css']
// })
// export class MoviesComponent {
//   movies = [
//     // Movie Data
//   ];
//   searchTerm = '';
//   sortBy = 'title';
//   reverse = false;

//   constructor() { }

//   ngAfterViewInit() {
//     // Initialize the filtered movies
//     this.filteredMovies = this.movies;
//   }
// }