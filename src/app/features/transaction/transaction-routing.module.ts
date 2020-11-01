import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaydetailsComponent } from './paydetails/paydetails.component';


const routes: Routes = [
  {
    path: 'paydetails',
    component: PaydetailsComponent,
    data: { pageTitle: 'paydetails'}
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
