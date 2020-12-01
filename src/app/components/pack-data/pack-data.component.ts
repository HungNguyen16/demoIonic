import { Component, OnInit } from '@angular/core';
import { PackService } from '../../services/pack.service';
import { PackModel } from '../../models/pack-model';

@Component({
  selector: 'app-pack-data',
  templateUrl: './pack-data.component.html',
  styleUrls: ['./pack-data.component.scss'],
})
export class PackDataComponent implements OnInit {

  packData: PackModel[] = [];

  constructor(private packService: PackService) { }

  ngOnInit() {
    this.packService.getAll().subscribe(res => {
      this.packData = res;
    });
  }

}
