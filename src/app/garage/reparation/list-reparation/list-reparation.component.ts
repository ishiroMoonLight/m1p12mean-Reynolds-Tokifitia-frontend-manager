import { Component, OnInit } from '@angular/core';


// Définition du type Reparation
interface Reparation {
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

  reparations: Reparation[] = [
    {
      nom: 'Réparation moteur',
      description: 'Remplacement des pièces défectueuses et entretien.',
      image: 'assets/images/moteur.jpg',
      duree: '3h',
      prix: 250
    },
    {
      nom: 'Changement de pneus',
      description: 'Remplacement des pneus usés par des neufs.',
      image: 'assets/images/pneus.jpg',
      duree: '1h',
      prix: 100
    },
    {
      nom: 'Révision complète',
      description: 'Vérification et entretien de tous les composants.',
      image: 'assets/images/revision.jpg',
      duree: '5h',
      prix: 400
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
