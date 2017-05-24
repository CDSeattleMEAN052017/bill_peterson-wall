var mongoose = require('mongoose');
var Post = mongoose.model("Post");
var session = require("express-session");

module.exports = {

	post: function(req, res){
		var post = new Post({message: req.body.message, name: req.session.userName });

		console.log("*********************", req.session.userName);

        post.save(function(err){
            if(err){
                console.log("something went wrong");
                console.log(err);
                res.status(400).json(err);
            }
            else{
                console.log("post created");
                res.json(post);
            }
        })
	},

	comment: function(req, res){
		var comment = {comment: req.body.comment, name: req.session.userName, createdAt: new Date()};

		if(comment.comment.length < 10){
			console.log("comment is too short")
			res.status(400).json({message: "Comment must be at least 10 characters."});
		}
		else{
			Post.update({_id: req.body.postId}, {$push: {comments: comment}}, function(err){
				if(err){
	                console.log("something went wrong");
	                console.log(err);
	                res.json(err);
	            }
	            else{
	                console.log("comment created");
	                res.json(Post);
	            }
			})
		}
	},

	show: function(req, res){
		Post.find({}, function(err, posts){
			if(err){
				console.log("something went wrong");
				console.log(err);
				res.json(err);
			}
			else{
				console.log("getting posts");
				res.json(posts);
			}
		})
	}
}
