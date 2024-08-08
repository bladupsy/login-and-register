import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'landing-login',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',})
export class AppComponent {
  title = 'login-and-register';

  formLogin: FormGroup;
  constructor(private fb: FormBuilder){
    this.formLogin = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      },
    );
  }
}
