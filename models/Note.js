var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dateTime = require('get-date');

var NoteSchema = new Schema({
	note: {
		type: String
	},
	dateCreated: {
		type: String,
		default: dateTime()
	}
});

var Note = mongoose.model('Note', NoteSchema);
module.exports = Note;