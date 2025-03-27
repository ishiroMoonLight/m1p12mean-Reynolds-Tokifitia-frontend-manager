import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  viewState: string = 'create';
  selectedEmployeeID? : number;

  setView(stateEvent: { view: string, id?: number }) {
    this.viewState = stateEvent.view;  
    this.selectedEmployeeID = stateEvent.id;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
