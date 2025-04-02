import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


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
  selector: 'app-list-reparation',
  templateUrl: './list-reparation.component.html',
  styleUrls: ['./list-reparation.component.scss']
})
export class ListReparationComponent implements OnInit {

  @Input() isAffectPiece:boolean | null = false;
  @Input() isAffectEmployee:boolean | null = false;
  @Output() affectElement = new EventEmitter<Reparation>();

  reparations: Reparation[] = [
    {
      id: "1",
      nom: 'Réparation moteur',
      description: 'Remplacement des pièces défectueuses et entretien.',
      image: 'assets/images/moteur.jpg',
      duree: '03:00',
      prix: 250_000
    },
    {
      id: "2",
      nom: 'Changement de pneus',
      description: 'Remplacement des pneus usés par des neufs.',
      image: 'assets/images/pneus.jpg',
      duree: '01:00',
      prix: 100_000
    },
    {
      id: "3",
      nom: 'Révision complète',
      description: 'Vérification et entretien de tous les composants.',
      image: 'assets/images/revision.jpg',
      duree: '05:00',
      prix: 400_000
    }
  ];

  constructor(private router: Router) { }

  onEdit(idreparation: string) {
    this.router.navigate(['/reparations/edit', idreparation]);
  }

  onDelete(id: string) {
    if (confirm("Voulez-vous vraiment supprimer cette réparation ?")) {
      console.log("id reparation : ", id);
      // this.reparationService.deleteReparation(id).subscribe(() => {
      //   this.loadReparations(); // Recharge la liste après suppression
      // });
    }
  }

  onAffect(reparation: Reparation) {
    console.log("reparation to affect : ", reparation);
    this.affectElement.emit(reparation);
  }


  ngOnInit(): void {
  }

}
