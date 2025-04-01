import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  viewState: string = 'create';
  selectedEmployeeID? : number;
  data?: any;

  setView(stateEvent: { view: string, id?: number, data?: any }) {
    this.viewState = stateEvent.view;  
    this.selectedEmployeeID = stateEvent.id;
    this.data = stateEvent.data;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
