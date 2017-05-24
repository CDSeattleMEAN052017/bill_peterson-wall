import { Component, OnInit } from '@angular/core';

import { Post } from "./../post";
import { WallService } from "./../wall.service"


@Component({
	selector: 'app-wall-posts',
	templateUrl: './wall-posts.component.html',
	styleUrls: ['./wall-posts.component.css']
})
export class WallPostsComponent implements OnInit {

	posts: Post[];
	newPost: Post;
	newComment: object;

	constructor(private wallService: WallService) { }

	ngOnInit() {
		this.getAllPosts();
		this.newPost = new Post;
		this.newComment ={};
		this.checkUser();
	}

	getAllPosts(){
		this.wallService.getAllPosts()
			.then((data) => {
				this.posts = data;
				for(let post of this.posts){
					this.newComment[post._id] = {};
				}
			})
			.catch((err) => console.log("error:", err));
	}

	post(){
		this.wallService.post(this.newPost)
			.then(() => {
				console.log("Sending post to DB")
				this.getAllPosts();
				this.newPost = new Post;
			})
			.catch(err => {
				console.log(err);
			})
	}

	submitComment(postId){
		this.newComment[postId].postId = postId;
		this.wallService.comment(this.newComment[postId])
			.then(() => {
				console.log("Sending comment to DB")
				this.getAllPosts();
				this.newComment[postId] = {};
			})
			.catch(err => { console.log(err)} )

	}

	checkUser(){
		this.wallService.checkUser()
			.then((data) => {
				if(!data){
					this.wallService.currentUser = {};
				}
			})
	}

}
