import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UppercasePipe } from  './uppercase.pipe';
import { TableFilterPipe } from './table-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
	  NgbModule
  ],
  declarations: [
    AppComponent,
    UppercasePipe,
    TableFilterPipe
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
