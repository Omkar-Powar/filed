import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'filedtask';
  btnClick: boolean = false;
  // static headers: HttpHeaders;

  static router: Router;
  public loading: boolean = false;

  constructor(public router: Router){}
  
  ngOnInit(): void {
    this.btnClick = false;
  }

  onClick(){
    this.btnClick = true;
    this.router.navigate(['/features/paydetails']);
  }
}
