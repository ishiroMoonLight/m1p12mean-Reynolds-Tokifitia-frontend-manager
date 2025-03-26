import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Tasks{
  id: String;
  name: String;
  delivery: String;
  client: String;
  employee: String;
}

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss']
})
export class ListTaskComponent implements OnInit {
  tasks: Tasks[] = [
    {
      id:"1",
      name:"Tâche 1",
      delivery:"10/03/2022",
      client:"Client 1",
      employee:"Personnel 1"
    }
  ];


  constructor(private router:Router) { }

  onEdit(idTask: string) {
    this.router.navigate(['/employee/edit', idTask]);
  }

  onDelete(idTask: string) {
    if (confirm("Voulez-vous vraiment supprimer cette tâche ?")) {
      console.log("id tâche : ", idTask);
    }
  }

  ngOnInit(): void {
  }

}
