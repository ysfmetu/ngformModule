import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './core/table.component';
import { FormComponent } from './core/form.component';
import { MessageComponent } from './messages/message.component';
import {CoreModule} from "./core/core.module";
import {MessageModule} from "./messages/message.module";
import {ModelModule} from "./model/model.module";

@NgModule({
    declarations: [],
    imports:[BrowserModule,ModelModule,CoreModule,MessageModule],
    providers: [],
    bootstrap: [TableComponent,FormComponent,MessageComponent],
    exports:[]
})
export class AppModule { }
