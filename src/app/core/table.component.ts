import {Component} from '@angular/core';
import {Product} from "../model/product.model";
import {MODES, SharedState} from "./sharedState.service";
import {ModelRepo} from "../model/repo.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent{

  constructor(private model: ModelRepo, private state: SharedState)
  {  }
  getProduct(key: number): Product | undefined {
    return this.model.getProduct(key);
  }
  getProducts(): Product[] | undefined {
    return this.model.getProducts();
  }
  deleteProduct(key?: number) {
    if (key != undefined) {
      this.model.deleteProduct(key);
    }
  }
  editProduct(key?: number) {
    this.state.update(MODES.EDIT, key)
  }
  createProduct() {
    this.state.update(MODES.CREATE);
  }
}
