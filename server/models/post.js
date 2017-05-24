var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2},
  message: { type: String, required: true, minlength: 10},
  comments: {type: Array}
}, {timestamps: true});

var Post = mongoose.model("Post", PostSchema);
