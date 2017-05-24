import { Component, OnInit } from '@angular/core';

import { WallService } from "./wall.service";

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  constructor(private wallService: WallService) { }

  ngOnInit() {
  }

  logout(){
	  this.wallService.currentUser = {};
	  this.wallService.logout();
  }

}
