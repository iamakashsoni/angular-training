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
  id: string = '';
  name: string = '';
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    console.log('Writer oninit called');
  }

  addMission() {
    let data = { id: this.id, name: this.name };
    this.service.addMission(data).subscribe(() => {
      console.log('Added'); 
    });
  }
}
