import { Component, EventEmitter, OnInit , Output } from '@angular/core';

interface Employee {
  id: number;
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
  employees: Employee[] = [
    {
      id: 1,
      name: 'John',
      firstname: 'Doe',
      task: 'Réparer front',
      salary: 10000
    },
    {
      id: 2,
      name: 'Jane',
      firstname: 'Doe',
      task: 'Réparer moteur',
      salary: 12000
    }
  ]; 
  @Output() changeView = new EventEmitter<{ view: string, id?: number }>();

  onEdit(employeeId: number) {
    this.changeView.emit({ view: 'edit', id: employeeId });
  }

  onShow(employeeId: number) {
    this.changeView.emit({ view: 'show', id: employeeId });
  }

  onCreate() {
    this.changeView.emit({ view: 'create', id: null });
  }

  onDelete(employeeId: number) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cet employé ?")) {
      console.log(`Employé avec l'ID ${employeeId} supprimé.`);
    }
  }

  ngOnInit(): void {
  }
}
