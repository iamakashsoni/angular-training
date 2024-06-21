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
    console.log('reader oninit called');
    this.getProductsMission();
    this.service.dataUpdatedObservable.subscribe(() => {
      this.getProductsMission();
    });
  }
  getProductsMission(): any {
    this.service.getMissions().subscribe((data: any) => {
      this.products = data;
    });
  }
  removeMission(id: number): void {
    this.service.removeMission(id).subscribe(() => {
      console.log('delete');
      this.getProductsMission();
    });
  }
}
