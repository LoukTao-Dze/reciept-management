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
    this.http.get(`${environment.apiUrl}/health`, { responseType: 'text' }).subscribe({
      next: (res) => {
        console.log('NEXT:=>', res);
      },
      error: (err) => {
        console.warn('ERROR:', err);
      },
    });
  }
}
