import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { PaydetailsComponent } from './paydetails/paydetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [PaydetailsComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot() 
  ]
})
export class TransactionModule { }
