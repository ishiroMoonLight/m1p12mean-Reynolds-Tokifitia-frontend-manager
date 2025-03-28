import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-affect-piece',
  templateUrl: './affect-piece.component.html',
  styleUrls: ['./affect-piece.component.scss']
})
export class AffectPieceComponent implements OnInit {

  pieceForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.pieceForm = this.fb.group({
      nom: ['pieceForm de test'],
      quantite: [5, [Validators.required, Validators.min(1)]],
      reparation: [[]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');  // Get the ID from URL
    console.log('idpiece : ', id);

    // if (id) {
    //   this.reparationService.getReparationById(id).subscribe((data) => {
    //     this.reparation = data;
    //     this.editForm.patchValue(data);  // Populate form with fetched data
    //   });
    // }
  }

  onSubmit() {

  }

  unaffectReparation(reparation: Reparation) {
    console.log('reparation to unaffect : ', reparation);

    const reparations = this.pieceForm.get('reparation')?.value || [];

    // Filtrer pour retirer l'élément
    const updatedReparations = reparations.filter((rep: Reparation) => rep !== reparation);
    console.log('updatedReparations : ', updatedReparations);


    // Mettre à jour le formulaire
    this.pieceForm.patchValue({ reparation: updatedReparations });
    this.pieceForm.get('reparation')?.updateValueAndValidity();
  }

  onAffect(reparation: Reparation) {
    console.log('reparation to affect: ', reparation);
    const reparations = this.pieceForm.get('reparation').value;
    reparations.push(reparation);
    this.pieceForm.patchValue({ reparation: reparations });
    this.pieceForm.get('reparation')?.updateValueAndValidity();
    console.log("pieceForm : ", this.pieceForm);
  }

}
