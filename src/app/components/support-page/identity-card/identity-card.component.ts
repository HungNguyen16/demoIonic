import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-identity-card',
  templateUrl: './identity-card.component.html',
  styleUrls: ['./identity-card.component.scss'],
})
export class IdentityCardComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {}

}
