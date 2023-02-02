import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UppercasePipe } from  './uppercase.pipe';
import { TableFilterPipe } from './table-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UppercasePipe,
    TableFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
	  NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
