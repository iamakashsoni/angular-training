import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, filter, Subject, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpyingService {
  private url = 'http://localhost:3000/missions';

  private dataUpdated = new BehaviorSubject<any>([]);
  dataUpdatedObservable = this.dataUpdated.asObservable();

  constructor(private httpClient: HttpClient) {}

  getMissions() {
    return this.httpClient.get(this.url);
  }

  addMission(data: any): any {
    console.log(data);
    return this.httpClient
      .post(this.url, data)
      .pipe(map((data) => this.dataUpdated.next(data)));
  }

  removeMission(id: number): any {
    return this.httpClient.delete(this.url + `/${id}`);
  }
}
