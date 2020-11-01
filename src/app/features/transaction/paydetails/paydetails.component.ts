import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/service/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-paydetails',
  templateUrl: './paydetails.component.html',
  styleUrls: ['./paydetails.component.css']
})
export class PaydetailsComponent implements OnInit, OnDestroy {
  paymentForm: FormGroup;
  displayMessage: string;
  today: Date;
  postData: Subscription;

  constructor(private formBuilder: FormBuilder, private router: Router, private api: ApiService) {}

  ngOnInit() {
    this.buildForm();
    this.today = new Date();
  }

  buildForm() {
    this.paymentForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.minLength(16), Validators.min(1111111111111111), Validators.max(9999999999999999)]],
      nameOnCard: ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      expirationDate: ['', [Validators.required]],
      cardCVVNumber: ['', [Validators.minLength(3), Validators.maxLength(3), Validators.min(111), Validators.max(999)]],
      payAmount: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(9), Validators.pattern('^[0-9]*\.?[0-9]{1,2}$')]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.paymentForm.controls; }

  // onClear(){
  //   this.paymentForm.reset();     
  // }

  onSubmit() {
    this.submitForm();
  }

  submitForm() {
    this.postData = this.api.postPaymentData(this.paymentForm.value)
    .subscribe(res => window.alert("Payment Successful" + res));
  }

  ngOnDestroy() {
    this.postData.unsubscribe();
  }
  
}
