import { Component, OnInit , Input} from '@angular/core';

interface Employee {
  id: number;
  name: string;
  firstname: string;
  bio: string;
  image_url: string;
}

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent implements OnInit {
  @Input() employeeId?: number;
  employee: Employee;
  constructor() { }

  ngOnInit(): void {
    console.log('employeeId : ', this.employeeId);
    this.loadEmployeeData();
  }

  private loadEmployeeData() {
    if (this.employeeId) {
      this.employee = { id: this.employeeId, name: 'John', firstname: 'Doe', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' , image_url :'./assets/img/faces/marc.jpg'  };
    }
  }

}
