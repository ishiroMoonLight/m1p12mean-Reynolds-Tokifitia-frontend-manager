import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReparationService } from 'app/services/reparation/reparation.service';

// Définition du type Reparation
interface Reparation {
  id: string;
  nom: string;
  description: string;
  image: string;
  duree: string;
  prix: number;
}

@Component({
  selector: 'app-edit-reparation',
  templateUrl: './edit-reparation.component.html',
  styleUrls: ['./edit-reparation.component.scss']
})
export class EditReparationComponent implements OnInit {

  editForm: FormGroup;
  reparation: Reparation;
  previewImage: string | ArrayBuffer | null = null; // Aperçu de l’image
  selectedFile: File | null = null;
  idReparation = this.route.snapshot.paramMap.get('id');  // Get the ID from URL

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private reparationService: ReparationService
  ) {
    // Récupération de la réparation depuis le state
    const navigation = this.router.getCurrentNavigation();
    this.reparation = navigation?.extras.state?.['reparation'];
    console.log('reparation to edit : ', this.reparation);


    // Initialisation du formulaire
    this.editForm = this.fb.group({
      nom: ['', Validators.required],
      description: [''],
      duree: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(0)]],
      image: [''] // Lien de l'image
    });

    this.previewImage = this.reparation?.image || null;
  }

  ngOnInit() {

    console.log('idreparation : ', this.idReparation);

    if (this.idReparation) {
      this.reparationService.getReparationById(this.idReparation).subscribe((data) => {
        this.reparation = data;
        this.editForm.patchValue(data);  // Populate form with fetched data
      });
    }

  }

  openFileInput() {
    document.getElementById('image')?.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImage = e.target?.result; // Met à jour l’aperçu de l’image
        // Assigner l'image en base64 au formulaire
        this.editForm.patchValue({ image: this.previewImage }); // Stocke l’image en base64 dans le formulaire
      };
      reader.readAsDataURL(file); // Conversion en base64
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      console.log("Données modifiées : ", this.editForm.value);

      // Appel au service pour mettre à jour la réparation
      this.reparationService.updateReparation(this.idReparation, this.editForm.value).subscribe(response => {
        console.log('Réparation mise à jour avec succès!', response);
        this.router.navigate(['/reparations']); // Redirection après modification
      }, error => {
        console.error('Erreur lors de la mise à jour', error);
      });

      // this.router.navigate(['/reparations']); // Redirection après modification
    }
  }

}
