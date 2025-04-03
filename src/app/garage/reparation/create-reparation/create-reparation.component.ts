import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReparationService } from 'app/services/reparation/reparation.service';

@Component({
  selector: 'app-create-reparation',
  templateUrl: './create-reparation.component.html',
  styleUrls: ['./create-reparation.component.scss']
})
export class CreateReparationComponent implements OnInit {

  reparationForm: FormGroup;
  imagePreview: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  imageBase64: string | null = null;

  constructor(private fb: FormBuilder, private reparationService: ReparationService) {
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
        this.convertToBase64(file);
      };
      reader.readAsDataURL(file);
    }
  }

  // Convertir le fichier en base64
  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.imageBase64 = reader.result as string; // La chaîne base64 de l'image
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (this.reparationForm.valid) {
      const reparationData = {
        nom: this.reparationForm.value.nom,
        description: this.reparationForm.value.description,
        duree: this.reparationForm.value.duree,
        prix: this.reparationForm.value.prix,
        image: this.imageBase64
      };

      // Appel du service pour créer la réparation
      this.reparationService.createReparation(reparationData).subscribe(
        response => {
          console.log('Réparation ajoutée avec succès:', response);
          alert('Réparation ajoutée avec succès ! 🎉');

          // Réinitialiser le formulaire
          this.reparationForm.reset();
          this.imagePreview = null;
          this.selectedFile = null;
          this.imageBase64 = null;
        },
        error => {
          console.error('Erreur lors de la création de la réparation:', error);
          alert('Erreur lors de l\'ajout de la réparation.');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }

  ngOnInit(): void {
  }

}
