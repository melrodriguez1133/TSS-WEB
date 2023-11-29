import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  redireccionar(): void {
    this.router.navigate(['/simulacion']); 
  }
}
