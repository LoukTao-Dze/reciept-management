import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment.development';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly http = inject(HttpClient);

  constructor() {
    this.http.get(environment.apiUrl, { responseType: 'text' }).subscribe({
      next: (message) => console.log('Backend Response:', message),
      error: (err) => console.error('Failed to reach backend', err),
    });
  }
}
