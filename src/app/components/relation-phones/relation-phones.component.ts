import { Component, OnInit } from '@angular/core';
import { RelationPhoneModel } from '../../models/relation-phones-model';
import { RelationPhoneService } from '../../services/relation-phones.service';

@Component({
  selector: 'app-relation-phones',
  templateUrl: './relation-phones.component.html',
  styleUrls: ['./relation-phones.component.scss'],
})
export class RelationPhonesComponent implements OnInit {
  relationPhones: RelationPhoneModel[] = [];
  checkIndex = 0;
  constructor(private relationPhoneService: RelationPhoneService) { }

  ngOnInit() {
    this.relationPhoneService.getListPhones().subscribe(res => {
        this.relationPhones = res;
        console.log(this.relationPhones);
    });
  }
}

