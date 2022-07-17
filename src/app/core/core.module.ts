import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableComponent} from "./table.component";
import {FormComponent} from "./form.component";
import {SharedState} from "./sharedState.service";
import {ModelModule} from "../model/model.module";

@NgModule({
    imports: [BrowserModule, FormsModule,ModelModule,ReactiveFormsModule],
    declarations: [TableComponent, FormComponent],
    exports: [ModelModule,TableComponent, FormComponent],
    providers: [SharedState]
})

export class CoreModule{}