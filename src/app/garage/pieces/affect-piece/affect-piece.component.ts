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

  onAffect(reparation: Reparation) {
    console.log('reparation to affect: ', reparation);

  }

}
