import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
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

    const id = this.route.snapshot.paramMap.get('id');  // Get the ID from URL
    console.log('idreparation : ', id);

    // if (id) {
    //   this.reparationService.getReparationById(id).subscribe((data) => {
    //     this.reparation = data;
    //     this.editForm.patchValue(data);  // Populate form with fetched data
    //   });
    // }

  }

  openFileInput() {
    document.getElementById('image')?.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.editForm.patchValue({ image: file });
      this.editForm.get('image')?.updateValueAndValidity();

      // Prévisualisation de l'image
      const reader = new FileReader();
      reader.onload = () => {
        this.previewImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Fonction pour gérer l'upload d'image
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImage = e.target?.result; // Met à jour l’aperçu
        this.editForm.patchValue({ image: this.previewImage }); // Stocke l’image
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      console.log("Données modifiées : ", this.editForm.value);
      // this.router.navigate(['/reparations']); // Redirection après modification
    }
  }

}
