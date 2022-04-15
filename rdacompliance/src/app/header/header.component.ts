import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user_screenWidth = window.innerWidth;

  constructor() { 
  }


  ngOnInit(): void {
    console.log(this.user_screenWidth);
  }

}