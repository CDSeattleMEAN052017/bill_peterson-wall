var mongoose = require('mongoose');
var users = require("../controllers/users.js");
var posts = require("../controllers/posts.js");

module.exports = function(app){

	app.get("/posts", function(req, res){
		console.log("getting posts");
		posts.show(req, res);
	})

	app.get("/logout", function(req, res){
		console.log("logging out");
		users.logout(req, res);
	})

	app.get("/checkUser", function(req, res){
		users.checkUser(req, res);
	})

	app.post("/register", function(req, res){
		console.log("register");
		users.register(req, res);
	})

	app.post("/login", function(req, res){
		users.login(req, res);
	})

	app.post("/post", function(req, res){
		posts.post(req, res);
	})

	app.post("/comment", function(req, res){
		posts.comment(req, res);
	})

	app.get("*", function(req, res){
	    res.sendFile(path.resolve("client/dist/index.html"))
	})

}
