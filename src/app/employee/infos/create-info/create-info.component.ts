import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-info',
  templateUrl: './create-info.component.html',
  styleUrls: ['./create-info.component.scss']
})
export class CreateInfoComponent implements OnInit{
  employeeForm: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      firstname: [''],
      description: [''],
      image:[''],
      salary: ['', [Validators.required, Validators.min(0)]]
    });
  }

  openFileInput() {
    document.getElementById('image')?.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.employeeForm.patchValue({ image: file });
      this.employeeForm.get('image')?.updateValueAndValidity();

      // Prévisualisation de l'image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const formData = new FormData();
      formData.append('nom', this.employeeForm.value.name);
      formData.append('prénoms', this.employeeForm.value.firstname);
      formData.append('bio', this.employeeForm.value.description);
      formData.append('salaire', this.employeeForm.value.salary);
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      console.log('Employé ajouté(e):', this.employeeForm.value);
      alert('Employé ajouté(e) avec succès ! 🎉');

      // Réinitialiser le formulaire
      this.resetForm();
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

  ngOnInit(): void {
    
  }
}