import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  navSideStatus : boolean;
   

  constructor() {
    this.navSideStatus = false;
       
     
   }

  ngOnInit(): void {
    
  }

  // open and hide side nav bar
  openSideNav() : void{
    if(this.navSideStatus)
    {
      this.navSideStatus = false;
    }
    else{
      this.navSideStatus = true;
    }
    
  }
  

}
