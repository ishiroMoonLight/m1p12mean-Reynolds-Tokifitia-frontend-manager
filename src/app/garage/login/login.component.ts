import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['john.doe@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log('Form submitted');

    if (this.loginForm.valid) {
      console.log('Login successful', this.loginForm.value);
      // Après soumission réussie du formulaire, rediriger vers "dashboard"
      this.router.navigate(['/accueil']);
    } else {
      console.log('Form is invalid');
    }
  }
}
