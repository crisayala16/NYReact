var express = require('express');
var router = express.Router();
var Article = require('./../models/Article.js');
var cheerio = require('cheerio');
var request = require('request');

router.get('/api/scrape', function(req, res){
	var topic = req.body.query.topic;
	var start = req.body.query.start;
	var end = req.body.query.end;
	var searchQuery = 'https://query.nytimes.com/search/sitesearch/?action=click&contentCollection&region=TopBar&WT.nav=searchWidget&module=SearchSubmit&pgtype=Homepage#/'
	+ topic + '/from' + start + '0101to' + end + '1231/document_type%3A%22article%22/';
	request(searchQuery, function(err, response, html){
		if(err){
			console.log(err);
		}
		var $ = cherrio.load();
		$('li.story.noThumb').each(function(i, element){
			var title = $(element).find('div.element2').find('h3').find('a').text();
			var url = $(element).find('div.element2').find('h3').find('a').attr('href');
			var date = $(element).find('div.element2').find('div.storyMeta').find('span.dateline').text();
			if(i <= 5){
				var arti = new Article({
				title: title,
				date: date,
				url: url
			});
			arti.save()
			.exec(function(err){
				if(err){
					console.log(err);
				}
			});
			}
		});
	});
});

router.get('/api/saved', function(req, res){
	Article.find()
	.exec(function(err, doc){
		if(err){
			console.log(err);
		}
		else{
			res.send(doc);
		}
	})
});

router.post('/api/saved', function(req, res){
	var reqArticle = req.body.article;
	var newArticle = new Article({reqArticle});
	newArticle.save()
	.exec(function(err, doc){
		if(err){
			console.log(err);
		}
		else{
			res.send(doc);
		}
	})
});

router.delete('/api/saved', function(req, res){
	var id = req.body.id;
	Article.remove({'_id': id})
	.exec(function(err){
		if(err){
			console.log(err);
		}
	})
});

module.exports = router;