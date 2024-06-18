import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  // private missions: string[] = [
    // 'Mission 1',
    // 'Mission 2',
    // 'Mission 3',
    // 'Mission 4',
  // ];

  // private missionSubject = new BehaviorSubject<string[]>([
  //   'Mission 1',
  //   'Mission 2',
  //   'Mission 3',
  //   'Mission 4',
  // ]);
  // missionObservable = this.missionSubject.asObservable();

  private productSubject = new BehaviorSubject<any>([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]);

  productObservable = this.productSubject.asObservable();
  constructor() {}

  // getMissions(): string[] {
  //   console.log('service getMissions called');
  //   return this.missions;
  // }

  // addMission(data: string): void {
  //   console.log('service addMission called');
  //   this.missions.push(data);
  // }

  // addMission(data: string): void {
  //   this.missionSubject.next([...this.missionSubject.value, data]);
  //   // console.log(this.missionSubject.value);
  // }

  // removeMission(id: number): void {
  //   let cloneMission = [...this.missionSubject.value];
  //   cloneMission.splice(id, 1);
  //   this.missionSubject.next(cloneMission);
  //   // console.log(this.missionSubject.value);
  // }

  addProduct(data: any): void {
    this.productSubject.next([...this.productSubject.value, data]);
    // console.log(this.missionSubject.value);
  }
  removeProduct(id: number): void {
    let cloneMission = [...this.productSubject.value];
    cloneMission = cloneMission.filter((item) => item.id != id);
    this.productSubject.next(cloneMission);
    // console.log(this.missionSubject.value);
  }
}
