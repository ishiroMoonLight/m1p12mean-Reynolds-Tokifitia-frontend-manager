import { Component, EventEmitter, OnInit , Output , Input } from '@angular/core';
import { Router } from '@angular/router';

interface Employee {
  id: string;
  name: string;
  firstname: string;
  task: string;
  salary: number;
}

@Component({
  selector: 'app-list-info',
  templateUrl: './list-info.component.html',
  styleUrls: ['./list-info.component.scss']
})
export class ListInfoComponent implements OnInit {
  @Input() viewOnly:boolean | null = false;


  employees: Employee[] = [
    {
      id: '1',
      name: 'John',
      firstname: 'Doe',
      task: 'Réparer front',
      salary: 10000
    },
    {
      id: '2',
      name: 'Jane',
      firstname: 'Doe',
      task: 'Réparer moteur',
      salary: 12000
    }
  ]; 
  @Output() changeView = new EventEmitter<{ view: string, id?: string }>();

  
  constructor(private router: Router) { }

  onEdit(employeeId: string) {
    this.changeView.emit({ view: 'edit', id: employeeId });
  }

  onShow(employeeId: string) {
    this.changeView.emit({ view: 'show', id: employeeId });
  }

  onCreate() {
    this.changeView.emit({ view: 'create', id: null });
  }

  onDelete(employeeId: string) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet employé ?")) {
      console.log(`Employé avec l'ID ${employeeId} supprimé.`);
    }
  }

  affectToReparation(employeeID: string) {
    this.router.navigate(['employee/affect-reparation/', employeeID]);
  }

  ngOnInit(): void {
  }
}
