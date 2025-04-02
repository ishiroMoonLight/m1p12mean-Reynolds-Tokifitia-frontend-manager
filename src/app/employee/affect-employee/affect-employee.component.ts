import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// Définition du type Reparation
interface Reparation {
  id: string;
  nom: string;
  description: string;
  duree: string;
  prix: number;
}

// Définition du type Employee
interface Employee {
  id: string;
  name: string;
  firstname: string;
}

@Component({
  selector: 'app-affect-employee',
  templateUrl: './affect-employee.component.html',
  styleUrls: ['./affect-employee.component.scss']
})
export class AffectEmployeeComponent implements OnInit {

  employeeTaskForm: FormGroup;
  employees: Employee[] = [
    { id: '1', name: 'John', firstname: 'Doe' },
    { id: '2', name: 'Jane', firstname: 'Doe' }
  ]; // À remplacer par des données réelles

  selectedTasks: Reparation[] = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.employeeTaskForm = this.fb.group({
      employee: ['', Validators.required],
      tasks: [[],Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');  // Récupère l'ID depuis l'URL
    console.log('id employé : ', id);
  }

  onAffect(task: Reparation) {
    console.log('Tâche à affecter: ', task);
    if (!this.selectedTasks.find(t => t.id === task.id)) {
      this.selectedTasks.push(task);
      this.employeeTaskForm.patchValue({ tasks: this.selectedTasks });
    }
  }

  unassignTask(task: Reparation) {
    console.log('Tâche à désaffecter : ', task);
    this.selectedTasks = this.selectedTasks.filter(t => t.id !== task.id);
    this.employeeTaskForm.patchValue({ tasks: this.selectedTasks });
  }

  onSubmit() {
    if (this.employeeTaskForm.valid) {
      console.log('Affectation:', this.employeeTaskForm.value);
      alert('Employé affecté avec succès ! 🎉');
      this.resetForm();
    } else {
      alert('Veuillez sélectionner un employé et une tâche.');
    }
  }

  private resetForm() {
    this.employeeTaskForm.reset();
    this.selectedTasks = [];
  }
}

