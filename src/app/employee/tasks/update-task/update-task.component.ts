import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router,ActivatedRoute } from '@angular/router';

interface Task{
    id: String;
    name: String;
    delivery: String;
    client: String;
    employee: String;
}

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {

  editForm: FormGroup;
  task: Task;
  
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) {

    const navigation = this.router.getCurrentNavigation();
    this.task = navigation?.extras.state?.['task'];
    console.log('reparation to edit : ', this.task);


    // Initialisation du formulaire
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      startDate: ['', Validators.required],
      client: ['', Validators.required],
      employee: ['', Validators.required]
    });
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');  // Get the ID from URL
    console.log('idTask : ', id);

  }

  onSubmit() {
    if (this.editForm.valid) {
      console.log("Données modifiées : ", this.editForm.value);
    }
  }

}
