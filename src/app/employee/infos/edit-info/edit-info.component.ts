import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss']
})
export class EditInfoComponent implements OnInit {
  @Input() employeeId?: number;
  constructor() { }

  ngOnInit(): void {
  }

}
