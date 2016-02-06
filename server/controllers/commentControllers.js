var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');

module.exports = {
	create: function(req, res) {
		Message.findOne({_id: req.params.message_id}, function(error, message) {
			var comment = new Comment(req.body);
			comment._message = message._id;
			message.comments.push(comment);
			comment.save(function(err) {
				if (err) {
					console.log("Did not add comment");
				} else {
					console.log("Successfully added comment!");
					message.save(function(err) {
						if (err) {
							console.log("Did not add comment to message.comments array");
						} else {
							console.log("We saved comment to message.comments array");
							res.redirect('/');
						}
					})
				}
			})
		});
	}
}