import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
})

export class MainNavbarComponent implements OnInit {

  public toggleCollpase : boolean = false;

  public dropDownIsDown : boolean = false;

  // Toggles collapsable drop down mobile nav bar
  toggleMobileNav() : void {
    this.toggleCollpase = !this.toggleCollpase;
    this.dropDownIsDown = !this.dropDownIsDown;
  }

  // Styles mobile nav bar collapse menu. Mobile nav bar is enabled when toggleCollpase is true.
  styleMobileNav_Collapse() : Object {
    if (this.toggleCollpase) {
      return {"border" : "3px solid #03bafc", "border-radius" : "6px"};
    }

    return {};
  }

  // Styles nav links in nav menu. Mobile nav bar gets different styling. Mobile nav bar is enabled when toggleCollpase is true.
  styleMobileNav_Links() : Object {
    if (this.toggleCollpase) {
      return {"color" : "white", "text-shadow" : "0 0 1px #000000", "padding-left" : "25px", "background-color" : "#03bafc"};
    }

    return {"color" : "white", "text-shadow" : "0 0 1px #000000"};
  }

  styleMobileNav_DropDown() : Object {
    if (this.dropDownIsDown) {
      return {"background-color" : "grey", "border-radius" : "4px"};
    }

    return {"background-color" : "rgb(68, 218, 255)", "border-radius" : "4px"};;
  }

  constructor() { }

  ngOnInit(): void { }

}
