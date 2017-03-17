import {Component, OnInit} from '@angular/core';
import {WarehouseServiceService} from "../services/warehouse-service.service";
import {Item} from "../models/items";
import {Added_Items} from "../models/added_items";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  warehouseItem: Item[];
  addedItems: Added_Items[];

  constructor(
    private warehouseService: WarehouseServiceService
  ) { }

  ngOnInit() {
    this.loadWarehouseItems();
  }


  loadWarehouseItems(){
    return this.warehouseService.getWarehouseitem()
      .subscribe(
        warehouseItem => {this.warehouseItem = warehouseItem},
        err => {console.log(err)}
      )
  }

}

