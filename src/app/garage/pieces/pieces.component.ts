import { Component, OnInit } from '@angular/core';

interface PieceType {
  id: string;
  nom: string;
  description: string;
  image: string;
  quantite: number,
  prix: number,
}

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss']
})
export class PiecesComponent implements OnInit {

  pieces: PieceType[] = [
    {
      id: "1",
      nom: "Plaquettes de frein",
      description: "Plaquettes de frein en céramique haute performance pour une meilleure durabilité.",
      image: "https://example.com/images/plaquettes_frein.jpg",
      quantite: 10,
      prix: 25000
    },
    {
      id: "2",
      nom: "Batterie 12V",
      description: "Batterie de voiture 12V avec une longue durée de vie et une performance optimale.",
      image: "https://example.com/images/batterie_12v.jpg",
      quantite: 5,
      prix: 150000
    },
    {
      id: "3",
      nom: "Filtre à huile",
      description: "Filtre à huile haute efficacité pour moteur diesel et essence.",
      image: "https://example.com/images/filtre_huile.jpg",
      quantite: 20,
      prix: 10000
    },
    {
      id: "4",
      nom: "Bougies d'allumage",
      description: "Bougies d'allumage en iridium pour une meilleure combustion du moteur.",
      image: "https://example.com/images/bougies_allumage.jpg",
      quantite: 15,
      prix: 12000
    },
    {
      id: "5",
      nom: "Courroie de distribution",
      description: "Courroie de distribution renforcée pour une durée de vie prolongée.",
      image: "https://example.com/images/courroie_distribution.jpg",
      quantite: 8,
      prix: 80000
    },
    {
      id: "6",
      nom: "Amortisseur avant",
      description: "Amortisseurs hydrauliques pour un meilleur confort de conduite.",
      image: "https://example.com/images/amortisseur.jpg",
      quantite: 6,
      prix: 120000
    },
    {
      id: "7",
      nom: "Radiateur de refroidissement",
      description: "Radiateur en aluminium pour éviter la surchauffe du moteur.",
      image: "https://example.com/images/radiateur.jpg",
      quantite: 4,
      prix: 200000
    },
    {
      id: "8",
      nom: "Alternateur",
      description: "Alternateur 120A pour un rechargement efficace de la batterie.",
      image: "https://example.com/images/alternateur.jpg",
      quantite: 3,
      prix: 180000
    },
    {
      id: "9",
      nom: "Pompe à eau",
      description: "Pompe à eau en aluminium pour un refroidissement optimal du moteur.",
      image: "https://example.com/images/pompe_a_eau.jpg",
      quantite: 7,
      prix: 90000
    },
    {
      id: "10",
      nom: "Capteur d'oxygène",
      description: "Capteur d'oxygène haute précision pour une réduction des émissions polluantes.",
      image: "https://example.com/images/capteur_oxygene.jpg",
      quantite: 12,
      prix: 50000
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onEdit(idpiece: string): void {
    console.log("edit piece: ", idpiece);

  }

  onDelete(idpiece: string): void {
    console.log("delete piece: ", idpiece);

  }

}
