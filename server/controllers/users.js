var mongoose = require('mongoose');
var User = mongoose.model("User");
var session = require("express-session");

module.exports = {

	login: function(req, res){
		console.log(req.body);
		User.findOne({name: req.body.name}, function(err, user){

			if(err){
				console.log("something went wrong");
                console.log(err);
				res.json(err);
			}
			else if (user){
				console.log("getting friend");
				req.session.userName = user.name;
				req.session.user_id = user._id;
				res.json({_id: req.session.user_id, name: req.session.userName});
			}
			else {
				var user = new User({name: req.body.name });

		        user.save(function(err){
		            if(err){
		                console.log("something went wrong");
		                console.log(err);
		                res.status(400).json(err);
		            }
		            else{
		                console.log("user created");
						req.session.userName = user.name;
						req.session.user_id = user._id;
						res.json({_id: req.session.user_id, name: req.session.userName});
		            }
		        })
			}
		})
	},

	logout: function(req, res){
		req.session.destroy();
	},

	checkUser: function(req, res){
		res.json({_id: req.session.user_id, name: req.session.userName});
	}
}
