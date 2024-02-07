import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDemoComponent } from './table-demo/table-demo.component';

const routes: Routes = [
  {
    path: 'getTable',
    component: TableDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

