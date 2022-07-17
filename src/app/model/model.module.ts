import {NgModule} from "@angular/core";
import {ModelRepo} from "./repo.service";
import {StaticDataSource} from "./static.datasource";

@NgModule({
    providers: [ModelRepo, StaticDataSource]
})
export class ModelModule{}