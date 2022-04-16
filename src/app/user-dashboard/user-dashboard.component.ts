import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  navStatusOn : boolean;
  navStatusOff : boolean;

  constructor() {
    this.navStatusOn = false;
    this.navStatusOff = true;
   }

  ngOnInit(): void {
  }

  // open and hide side nav bar
  openSideNav() : void{
     if(this.navStatusOn)
     {
       this.navStatusOff = true;
       this.navStatusOn = false;
     }
     else
     {
      this.navStatusOff = false;
      this.navStatusOn = true;
     }
  }
  

}
