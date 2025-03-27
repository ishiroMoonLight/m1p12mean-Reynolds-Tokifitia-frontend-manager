import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {

  viewState: string = 'create';
  selectedEmployeeID? : number;

  setView(state: string , id?: number) {
    this.viewState = state;
    this.selectedEmployeeID = id;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
