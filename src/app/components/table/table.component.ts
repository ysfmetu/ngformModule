import {Component, Input, OnInit} from '@angular/core';
import {Model} from "../../repository.model";
import {Product} from "../../product.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataModel: Model=new Model()

  constructor() {
  }

  ngOnInit(): void { }

  getProduct(key: number): Product | undefined {
    return this.dataModel?.getProduct(key);
  }
  getProducts(): Product[] | undefined {
    return this.dataModel?.getProducts();
  }
  deleteProduct(id: number) {
    this.dataModel?.deleteProduct(id);
  }
}
