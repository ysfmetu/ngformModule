import { Component, OnInit } from '@angular/core';
import {Product} from "../model/product.model";
import {ModelRepo} from "../model/repo.service";
import {MODES, SharedState, StateUpdate} from "./sharedState.service";
import {MessageService} from "../messages/message.service";
import {Message} from "../messages/message.model";
import {FormControl, NgForm, Validators} from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl:"form.component.html",
  styleUrls: ["form.component.css"]
})
export class FormComponent{
  product: Product = new Product();
  editing: boolean = false;
  nameField:FormControl=new FormControl("ysf",
      {validators:[Validators.maxLength(14),
                    Validators.minLength(3),
                    Validators.pattern("^[A-Za-z ]+$")]})
  categoryField:FormControl=new FormControl("",
      {validators:Validators.minLength(4)})

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
      this.categoryField.setValue(this.product.category)
    } else {
    this.product = new Product();
    this.messageService.reportMessage(new Message("Yeni Kayıt Oluşturuluyor"));
    this.nameField.setValue("")
    this.categoryField.setValue("")
  }
}
  ngOnInit(){
    this.nameField.statusChanges.subscribe(newStatus => {
      if (newStatus == "INVALID" && this.nameField.errors != null) {
        let errs = Object.keys(this.nameField.errors).join(", ");
        this.messageService.reportMessage(new Message(`INVALID: ${errs}`))
      } else {
        this.messageService.reportMessage(new Message(newStatus));
      }
      this.categoryField.statusChanges.subscribe(newStatus=>{
        if(newStatus=="INVALID"){
          this.categoryField.disable();
        }else
          this.categoryField.enable();
      })

//valueChanges ile her değişimi ekrana bastık
   /* this.nameField.valueChanges.subscribe(newValue=>{
      this.messageService.reportMessage(new Message(newValue||"isim alanı boş !!"))
  */  })
  }
submitForm(form: NgForm) {
  if (form.valid) {
    this.model.saveProduct(this.product);
    this.product = new Product();
    form.resetForm();
  }
}
}
