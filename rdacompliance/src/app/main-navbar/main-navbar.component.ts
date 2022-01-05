import { Component, OnInit } from '@angular/core';


import {
  trigger,
  state,
  style,
  animate,
  transition
}
  from '@angular/animations';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class MainNavbarComponent implements OnInit {


  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  

  public toggleCollpase : boolean = false;

  public dropDownIsDown : boolean = false;

  // Toggles collapsable drop down mobile nav bar
  toggleMobileNav() : void {
    this.toggleCollpase = !this.toggleCollpase;
    this.dropDownIsDown = !this.dropDownIsDown;
  }

  // Styles mobile nav bar collapse menu when toggleCollapse is true
  styleMobileNav_Collapse() : Object {
    if (this.toggleCollpase) {
      return {"border" : "3px solid #03bafc", "border-radius" : "6px"};
    }

    return {};
  }

  // Styles nav links in nav menu. Mobile nav bar gets different styling.
  styleMobileNav_Links() : Object {
    if (this.toggleCollpase) {
      return {"color" : "white", "text-shadow" : "0 0 1px #000000", "padding-left" : "25px"};
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

  ngOnInit(): void {
    // Empty
  }

}
