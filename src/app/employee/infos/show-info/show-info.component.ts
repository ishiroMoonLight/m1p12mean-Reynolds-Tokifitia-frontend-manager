import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss']
})
export class ShowInfoComponent implements OnInit {
  @Input() employeeId?: number;
  constructor() { }

  ngOnInit(): void {
  }

}
