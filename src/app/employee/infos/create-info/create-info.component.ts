import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonnelService } from 'app/services/personnel/personnel.service';

@Component({
  selector: 'app-create-info',
  templateUrl: './create-info.component.html',
  styleUrls: ['./create-info.component.scss']
})
export class CreateInfoComponent implements OnInit {
  employeeForm: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(private fb: FormBuilder, private personnelService: PersonnelService) {
    this.employeeForm = this.fb.group({
      name: ['WALKER', Validators.required],
      firstname: ['Paul'],
      bio: [''],
      email: ['paul.walker@yopmail.com', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      pfp: [''],
      salary: [200000, [Validators.required, Validators.min(0)]]
    });
  }

  openFileInput() {
    document.getElementById('image')?.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Prévisualisation de l'image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.employeeForm.patchValue({ pfp: reader.result });
        this.employeeForm.get('pfp')?.updateValueAndValidity();
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const formData = new FormData();
      formData.append('nom', this.employeeForm.value.name);
      formData.append('prénoms', this.employeeForm.value.firstname);
      formData.append('bio', this.employeeForm.value.bio);
      formData.append('email', this.employeeForm.value.email);
      // formData.append('password', this.employeeForm.value.password);
      formData.append('salaire', this.employeeForm.value.salary);
      if (this.selectedFile) {
        formData.append('pfp', this.selectedFile);
      }

      // alert('Employé ajouté(e) avec succès ! 🎉');

      console.log('Employé:', JSON.stringify(this.employeeForm.value));
      // Appel du service pour créer la réparation
      this.personnelService.registerEmployee(this.employeeForm.value).subscribe(
        response => {
          alert('Succes lors de l\'ajout de personnel.');
          this.resetForm();
        },
        error => {
          console.error('Erreur:', error);
          alert('Erreur lors de l\'ajout de personnel.');
        }
      );

      // Réinitialiser le formulaire
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }

  private resetForm() {
    this.employeeForm.reset();
    this.selectedFile = null;
    this.imagePreview = null;
    const fileInput = document.getElementById('image') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  }

  ngOnInit(): void { }
}
