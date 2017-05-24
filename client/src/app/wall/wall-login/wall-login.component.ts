import { Component, OnInit } from '@angular/core';

import { WallService } from "./../wall.service";

@Component({
	selector: 'app-wall-login',
	templateUrl: './wall-login.component.html',
	styleUrls: ['./wall-login.component.css']
})
export class WallLoginComponent implements OnInit {

	loginInfo: object;
	errors: object;

	constructor(private wallService: WallService) { }

	ngOnInit() {
		this.loginInfo = {};
		this.checkUser();
	}

	login(){
		this.wallService.loginUser(this.loginInfo)
			.then((data) => {
				this.loginInfo = {};
				this.errors = {};
				console.log(data);
				this.wallService.currentUser = {_id: data._id, name: data.name};
			})
			.catch(err => {
				console.log(err);
				this.errors = err;
			})
	}

	checkUser(){
		this.wallService.checkUser()
			.then((data) => {
				if(data){
					this.wallService.currentUser = {_id: data._id, name: data.name};
				}
			})
	}

}
