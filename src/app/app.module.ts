import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { DialogComponent } from './dialog/dialog.component';

//import in-memory-web-api
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

//import Material Design
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';


//import Reactive Form
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//import AG-Grid
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    DisplayComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatSortModule,
    MatCardModule,
    AgGridModule.withComponents([]),
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    AppRoutingModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
