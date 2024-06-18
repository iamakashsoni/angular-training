import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-writer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './writer.component.html',
  styleUrl: './writer.component.css',
})
export class WriterComponent implements OnInit {
  // newMission: string = '';
  id: number = 0;
  name: string = '';
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    console.log('Writer oninit called');
  }

  // addMission() {
  //   this.service.addMission(this.newMission);
  //   this.newMission = '';
  // }

  addProduct() {
    let data = { id: this.id, name: this.name };
    this.service.addProduct(data);
  }
}
