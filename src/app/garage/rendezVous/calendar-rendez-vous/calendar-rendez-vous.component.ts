import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';

import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar-rendez-vous',
  templateUrl: './calendar-rendez-vous.component.html',
  styleUrls: ['./calendar-rendez-vous.component.scss']
})
export class CalendarRendezVousComponent implements OnInit {

  // listeRendezVous: RendezVous[];

  listeRendezVous = [
    {
      id: "1",
      title: "Remplacement de batterie",
      start: "2025-04-05T09:00:00", // Date et heure de début
      end: "2025-04-05T11:00:00", // Date et heure de fin
    },
    {
      id: "2",
      title: "Changement d'huile",
      start: "2025-04-07T14:00:00",
      end: "2025-04-07T15:30:00",
    }
  ];

  // Configuration du calendrier
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    editable: true,
    events: [] // 👈 D'abord une liste vide
  };
  constructor() { }

  ngOnInit(): void {
    // this.loadListeRendezVous();
    // Forcer la détection des changements
    setTimeout(() => {
      this.calendarOptions = {
        ...this.calendarOptions,
        events: [...this.listeRendezVous] // 🔥 On assigne un nouveau tableau
      };
      console.log("this calendar : ", this.calendarOptions);

    }, 0);
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
          duree: "02:00",
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
          duree: "01:30",
          image: "",
          prix: 5000
        },
        date: new Date(),
        status: "20"
      },
      {
        id: "3",
        client: {
          id: "3",
          nom: "Bernard",
          prenom: "Luc",
          email: "luc.bernard@email.com",
          image: "",
          mdp: ""
        },
        reparation: {
          id: "3",
          nom: "Remplacement des plaquettes de frein",
          description: "Changement des plaquettes de frein avant",
          duree: "01:15",
          image: "",
          prix: 7000
        },
        date: new Date(),
        status: "10"
      },
      {
        id: "4",
        client: {
          id: "4",
          nom: "Lemoine",
          prenom: "Alice",
          email: "alice.lemoine@email.com",
          image: "",
          mdp: ""
        },
        reparation: {
          id: "4",
          nom: "Réparation du système de climatisation",
          description: "Diagnostic et réparation du système de climatisation",
          duree: "02:30",
          image: "",
          prix: 15000
        },
        date: new Date(),
        status: "30"
      },
      {
        id: "5",
        client: {
          id: "5",
          nom: "Durand",
          prenom: "Marc",
          email: "marc.durand@email.com",
          image: "",
          mdp: ""
        },
        reparation: {
          id: "5",
          nom: "Remplacement des pneus",
          description: "Changement des pneus avant et arrière",
          duree: "01:45",
          image: "",
          prix: 12000
        },
        date: new Date(),
        status: "20"
      },
      {
        id: "6",
        client: {
          id: "6",
          nom: "Petit",
          prenom: "Camille",
          email: "camille.petit@email.com",
          image: "",
          mdp: ""
        },
        reparation: {
          id: "6",
          nom: "Révision complète",
          description: "Contrôle et révision complète du véhicule",
          duree: "03:00",
          image: "",
          prix: 25000
        },
        date: new Date(),
        status: "30"
      }
    ];

    // this.listeRendezVous = liste;
  }

}
