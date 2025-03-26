import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {
  taskForm!: FormGroup;
  tasks = [
    { id: '1', name: 'Réparation' , duration: '03:00'},
    { id: '2', name: 'Installation' , duration: '04:00'}
  ];
  clients = [
    { id: '1', name: 'Client A' },
    { id: '2', name: 'Client B' }
  ];
  employees = [
    { id: '1', name: 'Employé X' },
    { id: '2', name: 'Employé Y' }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
      startDate: ['', Validators.required],
      client: ['', Validators.required],
      employee: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      const formData = new FormData();
      formData.append('task', this.taskForm.value.task);
      formData.append('delivery', this.taskForm.value.startDate); //still need to add duration from init date
      formData.append('client', this.taskForm.value.client);
      formData.append('employee', this.taskForm.value.employee);

      console.log('Tâche créée :', this.taskForm.value);
      alert('Tâche ajoutée avec succès ! 🎉');

      // Réinitialiser le formulaire
      this.taskForm.reset();
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
