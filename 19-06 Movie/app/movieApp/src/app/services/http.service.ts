import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url = 'http://localhost:3000/movies';

  private data = new BehaviorSubject<any>([]);
  data$ = this.data.asObservable();

  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(this.url);
  }

  addData(data: any): any {
    console.log(data);
    return this.httpClient
      .post(this.url, data)
      .pipe(map((data) => this.data.next(data)));
  }

  removeData(id: number): any {
    return this.httpClient.delete(this.url + `/${id}`);
  }
}
