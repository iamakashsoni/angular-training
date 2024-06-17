import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigateByUrl(`/${route}`);
    // this.router.navigate([`/${route}`]);
  }
}
