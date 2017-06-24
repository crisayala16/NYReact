import React from 'react';

var Results = require('./Results.js');
var helpers = require('./../utils/helpers.js');

class Search extends React.Component({
	constructor(props){
		super(props);
		this.state = {
			topic: '',
			start: '',
			end: '',
			results: []
		}
		this.runQuery = this.runQuery.bind(this);
	}

	runQuery: function(topic, start, end){
		helpers.runQuery(topic, start, end).then(function(response){
			this.setSate({'results': response});
		});
	},

	render(){
		return(
			<div>
			<div className='panel panel-primary'>
				<div className='panel-heading'>
					<div className='panel-title'>
						<h3>
							Search
						</h3>
					</div>
				</div>
				<div className='panel-body'>
					<div className="form-group">
						<label className="control-label">Topic</label>
						<input className="form-control" id="topic-input" type="text"></input>
					</div>
					<div className="form-group">
						<label className="control-label">Start year</label>
						<input className="form-control" id="start-input" type="text"></input>
					</div>
					<div className="form-group">
						<label className="control-label">End year</label>
						<input className="form-control" id="end-input" type="text"></input>
					</div>
					<button className='btn btn-success' onClick={this.runQuery}>
						Search
					</button>
				</div>
			</div>
			<Results data={this.state.results}/>
			</div>
		);
	}
});

module.exports = Search;
