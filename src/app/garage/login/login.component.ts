import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ManagerService } from 'app/services/manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  alertMessage: string = '';  
  alertType: string = 'error'; 
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private managerService: ManagerService) {
    this.loginForm = this.fb.group({
      email: ['jane.doe@mail.co', [Validators.required, Validators.email]],
      password: ['eatthis', [Validators.required, Validators.minLength(6)]],
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log('Form submitted', this.loginForm.value);

    if (this.loginForm.valid) {
      this.managerService.logManagerIn(this.loginForm.value).subscribe(
        (response) => {
          console.log('Login successful', response);
          this.router.navigate(['/accueil']);
        },
        (error) => {
          console.log(error.error.message);
          if (error.error.message === 'Invalid credentials , no email found') {
            this.alertMessage = 'Erreur lors de la connexion. Veuillez vérifier votre email.';
            this.alertType = 'error'; // You can customize this based on the type of error
          }
          if (error.error.message === 'Invalid credentials , wrong password') {
            this.alertMessage = 'Erreur lors de la connexion. Veuillez vérifier votre mot de passe.';
            this.alertType = 'error';
          }
        }
      );
    } else {
      console.log('Form is invalid');
      this.alertMessage = 'Le formulaire est invalide. Veuillez vérifier les informations saisies.';
      this.alertType = 'error';
    }
  }
  

}
