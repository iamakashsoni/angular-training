import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService implements OnInit {
  private missionSubject = new BehaviorSubject<any>([]);
  missionObservable = this.missionSubject.asObservable();

  private url = 'http://localhost:3000/missions';
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions(): any {
    return this.httpClient.get(this.url);
  }
  addMission(data: any): any {
    console.log(data);
    return this.httpClient.post(this.url, data);
  }

  removeMission(id: number): any {
    return this.httpClient.delete(this.url + `/${id}`);
  }
}
