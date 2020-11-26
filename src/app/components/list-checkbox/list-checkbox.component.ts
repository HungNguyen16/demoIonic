import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-checkbox',
  templateUrl: './list-checkbox.component.html',
  styleUrls: ['./list-checkbox.component.scss'],
})
export class ListCheckboxComponent implements OnInit {
  @Input() sprSize: number;
  constructor() { }

  ngOnInit() {}

}
