import { Component, OnInit } from '@angular/core';

// example of attribute selector
@Component({
  selector: '[app-warning-alert]',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
