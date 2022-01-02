import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  public toggleCollpase : boolean = false;

  // Toggles collapsable drop down mobile nav bar
  toggleMobileNav() : void {
    this.toggleCollpase = !this.toggleCollpase; 
  }

  // Styles mobile nav bar collapse menu when toggleCollapse is true
  styleMobileNav_Collapse() : Object {
    if (this.toggleCollpase) {
      return {"border" : "3px solid green", "border-radius" : "6px"};
    }

    return {};
  }

  // Styles nav links in nav menu. Mobile nav bar gets different styling.
  styleMobileNav_Links() : Object {
    if (this.toggleCollpase) {
      return {"color" : "blue", "text-shadow" : "0 0 1px #000000", "padding-left" : "25px"};
    }

    return {"color" : "blue", "text-shadow" : "0 0 1px #000000"};
  }

  


  constructor() { }

  ngOnInit(): void {
  }

}
