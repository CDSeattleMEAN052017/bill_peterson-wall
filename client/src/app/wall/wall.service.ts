import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from "@angular/http"
import { User } from "./user"
import { Post } from "./post"
import "rxjs"

const HEADERS = new Headers({"Content-Type": "application/json"})
const OPTIONS = new RequestOptions({headers: HEADERS})

@Injectable()
export class WallService {

	currentUser: object = {};

	constructor(private http: Http) { }

	registerUser(user: User){
		return this.http.post("/register", user, OPTIONS).toPromise()
	}

	loginUser(loginInfo: object){
		return this.http.post("/login", loginInfo, OPTIONS).map(data => data.json()).toPromise()
	}

	getAllPosts(){
		return this.http.get("/posts")
			.map(data => data.json()).toPromise();
	}

	post(post: Post){
		return this.http.post("/post", post, OPTIONS).toPromise()
	}

	comment(comment: object){
		return this.http.post("/comment", comment, OPTIONS).toPromise()
	}

	logout(){
		return this.http.get("/logout").toPromise()
	}

	checkUser(){
		return this.http.get("/checkUser").map(data => data.json()).toPromise()
	}

}
