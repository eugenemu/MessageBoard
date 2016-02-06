var mongoose = require('mongoose');

var Schema = mongoose.Schema;
//  Create blueprint for table
var MessageSchema = new Schema({
	name: String,
	message: String,
	created_at: {type: Date, required: true, default: Date.now},
	comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
})
//  Creates actual table via mongoose 
//  Parameter(collection name, Schema)
mongoose.model('Message', MessageSchema);
// var Message = mongoose.model('Message');

var CommentSchema = new Schema({
	_message: {type: Schema.Types.ObjectId, ref: "Message"},
	name: String,
	comment: String,
	created_at: {type: Date, required: true, default: Date.now}
})
mongoose.model('Comment', CommentSchema);
