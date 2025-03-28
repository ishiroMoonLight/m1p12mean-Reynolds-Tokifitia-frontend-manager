import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-rendez-vous',
  templateUrl: './liste-rendez-vous.component.html',
  styleUrls: ['./liste-rendez-vous.component.scss']
})
export class ListeRendezVousComponent implements OnInit {

  listeRendezVous: RendezVous[];

  constructor() { }

  ngOnInit(): void {
    this.loadListeRendezVous();
  }

  loadListeRendezVous() {
    const liste: RendezVous[] = [
      {
        id: "1",
        client: {
          id: "1",
          nom: "Dupont",
          prenom: "Jean",
          email: "jean.dupont@email.com",
          image: "",
          mdp: ""
        },
        reparation: {
          id: "1",
          nom: "Remplacement de batterie",
          description: "Changement de la batterie du véhicule",
          duree: "02:00", // Format HH:mm
          image: "",
          prix: 10000
        },
        date: new Date(),
        status: "10"
      },
      {
        id: "2",
        client: {
          id: "2",
          nom: "Martin",
          prenom: "Sophie",
          email: "sophie.martin@email.com",
          image: "",
          mdp: ""
        },
        reparation: {
          id: "2",
          nom: "Changement d'huile",
          description: "Vidange complète du moteur",
          duree: "01:30", // Format HH:mm
          image: "",
          prix: 5000
        },
        date: new Date(),
        status: "20"
      }
    ];

    this.listeRendezVous = liste;
  }

}
