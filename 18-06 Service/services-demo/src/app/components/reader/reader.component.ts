import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-reader',
  standalone: true,
  imports: [],
  templateUrl: './reader.component.html',
  styleUrl: './reader.component.css',
})
export class ReaderComponent implements OnInit {
  // missions: string[] | undefined;
  products: any;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    // this.missions = this.service.getMissions();

    // this.service.missionObservable.subscribe((data) => {
    //   // console.log(data)
    //   this.missions = data;
    // });

    this.service.productObservable.subscribe((data) => {
      // console.log(data)
      this.products = data;
    });

    console.log('reader oninit called');
  }

  removeMission(id: number): void {
    this.service.removeProduct(id);
  }
}
