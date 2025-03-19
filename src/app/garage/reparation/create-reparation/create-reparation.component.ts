import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-reparation',
  templateUrl: './create-reparation.component.html',
  styleUrls: ['./create-reparation.component.scss']
})
export class CreateReparationComponent implements OnInit {

  reparationForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.reparationForm = this.fb.group({
      nom: ['Changement Pare-brise', Validators.required],
      description: ['Description de changement de pare-brise'],
      image: [''],
      duree: ['01:00', [Validators.required]],
      prix: [100_000, [Validators.required, Validators.min(0)]]
    });
  }

  openFileInput() {
    document.getElementById('image')?.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.reparationForm.patchValue({ image: file });
      this.reparationForm.get('image')?.updateValueAndValidity();

      // Prévisualisation de l'image
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.reparationForm.valid) {
      const formData = new FormData();
      formData.append('nom', this.reparationForm.value.nom);
      formData.append('description', this.reparationForm.value.description);
      formData.append('duree', this.reparationForm.value.duree);
      formData.append('prix', this.reparationForm.value.prix);
      if (this.selectedFile) {
        formData.append('image', this.selectedFile);
      }

      console.log('Réparation ajoutée:', this.reparationForm.value);
      alert('Réparation ajoutée avec succès ! 🎉');

      // Réinitialiser le formulaire
      this.reparationForm.reset();
      this.imagePreview = null;
      this.selectedFile = null;
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }

  ngOnInit(): void {
  }

}
