import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {PersonneServiceService} from "./personne-service.service";
import {AlertModule, ButtonsModule, DatepickerModule, PaginationModule} from "ng2-bootstrap";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {AutoCompleteModule} from "primeng/components/autocomplete/autocomplete";
import {DropdownModule} from "primeng/components/dropdown/dropdown";
import {ButtonModule} from "primeng/components/button/button";
import {DialogModule} from "primeng/components/dialog/dialog";
import {PaginatorModule} from "primeng/components/paginator/paginator";
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule, ButtonsModule, DatepickerModule, DropdownModule, PaginationModule,
    DataTableModule, InputTextModule, AutoCompleteModule, DropdownModule,ButtonModule,DialogModule,PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
