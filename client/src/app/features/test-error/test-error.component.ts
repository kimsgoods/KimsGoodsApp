import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-test-error',
  imports: [
    MatButton
  ],
  templateUrl: './test-error.component.html',
  styleUrl: './test-error.component.scss'
})
export class TestErrorComponent {
  baseUrl = "https://localhost:5001/api/buggy/";
  private http = inject(HttpClient);
  validationErrors?: string[];

  get404Error() {
    this.http.get(this.baseUrl + "not-found").subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400Error() {
    this.http.get(this.baseUrl + "bad-request").subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }
  get401Error() {
    this.http.get(this.baseUrl + "unauthorized").subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }
  get500Error() {
    this.http.get(this.baseUrl + "internal-error").subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }
  get400ValidationError() {
    this.http.post(this.baseUrl + "validation-error", {}).subscribe({
      next: response => console.log(response),
      error: error => this.validationErrors = error
    })
  }
}
