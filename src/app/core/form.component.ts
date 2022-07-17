import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product.model";
import {ModelRepo} from "../model/repo.service";
import {MODES, SharedState, StateUpdate} from "./sharedState.service";
import {MessageService} from "../messages/message.service";
import {Message} from "../messages/message.model";
import {FormControl, NgForm} from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl:"form.component.html",
  styleUrls: ["form.component.css"]
})
export class FormComponent{
  product: Product = new Product();
  editing: boolean = false;
  nameField:FormControl=new FormControl("ysf")

  constructor(private model: ModelRepo, private state: SharedState,
              private messageService: MessageService) {
    this.state.changes.subscribe((upd) => this.handleStateChange(upd))
    this.messageService.reportMessage(new Message("Ürün kayıt işlemleri"));
  }
  handleStateChange(newState: StateUpdate) {
    this.editing = newState.mode === MODES.EDIT;
    if (this.editing && newState.id) {
      Object.assign(this.product, this.model.getProduct(newState.id)
          ?? new Product());
      this.messageService.reportMessage(
          new Message(`<<${this.product.name}>> isimli kayıt düzenleniyor`));
      this.nameField.setValue(this.product.name)
    } else {
    this.product = new Product();
    this.messageService.reportMessage(new Message("Yeni Kayıt Oluşturuluyor"));
    this.nameField.setValue("ff")
  }
}
submitForm(form: NgForm) {
  if (form.valid) {
    this.model.saveProduct(this.product);
    this.product = new Product();
    form.resetForm();
  }
}
}
