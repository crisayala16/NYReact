import React from 'react';
import Results from './Results.js';
import helpers from './../utils/helpers.js';

class Search extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			topic: '',
			start: '',
			end: '',
			results: []
		};
		this.runQuery = this.runQuery.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event){
		event.preventDefault();
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}
	runQuery(event){
		event.preventDefault();
		const topic = this.state.topic;
		const start = this.state.start;
		const end = this.state.end;
		var results = [];
		var self = this;
		helpers.runQuery(topic, start, end, function(response){
			var docs = response.data.response.docs;
			for(var i = 0; i < 5; i++){
				var title = docs[i].headline.main;
				var url = docs[i].web_url;
				var date = docs[i].pub_date;
				results.push({
					key: i,
					title: title,
					url: url,
					date: date
				});
			}
			self.setState({results: results});
		});
	}
	render(){
		return(
		<div>
		<div className='panel panel-primary'>
			<div className='panel-heading'>
				<div className='panel-title'>
					<p>
						Search
					</p>
				</div>
			</div>
			<div className='panel-body'>
				<form>
				<div className="form-group">
					<label className="control-label">Topic</label>
					<input onChange={this.handleInputChange} className="form-control" name="topic" type="text"></input>
				</div>
				<div className="form-group">
					<label className="control-label">Start year</label>
					<input onChange={this.handleInputChange} className="form-control" name="start" type="text"></input>
				</div>
				<div className="form-group">
					<label className="control-label">End year</label>
					<input onChange={this.handleInputChange} className="form-control" name="end" type="text"></input>
				</div>
				<button type='submit' onClick={this.runQuery} className='btn btn-success'>
					Search
				</button>
				</form>
			</div>
		</div>
		<Results 
			results={this.state.results}
		/>
		</div>
	);
	}
	
};

export default Search;
