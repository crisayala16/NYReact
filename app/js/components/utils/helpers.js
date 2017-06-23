var axios = require('axios');
var cheerio = require('cheerio');
var request = require('request');


var helper = {
	runQuery: function(topic, start, end){
		return axios.post('/api/scrape', {query: {
			topic: topic,
			start: start,
			end: end
		}});


	},
	postArticle: function(title, date, url){
		var article = {
			title: title,
			date: date,
			url: url
		}
		return axios.post('/api/saved', {article: article});
	},
	getArticle: function(){
		return axios.get('/api/saved');
	},
	removeArticle: function(id){
		return axios.delete('/api/saved', {id: id});
	},
	addNote: function(note){
		return axios.post('/api/note', {note: note});
	},
	removeNote: function(id){
		return axios.delete('/api/note', {id: id});
	}
}