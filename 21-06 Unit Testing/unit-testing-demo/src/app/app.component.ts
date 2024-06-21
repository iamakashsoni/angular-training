import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpyingService } from './services/spying.service';
import { MyDirectivesDirective } from './directives/my-directives.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyDirectivesDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  implements OnInit{
  title = 'unit-testing-demo';
  newTitle = 'new Title';

  products: any;
  constructor(private service: SpyingService) {}

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
