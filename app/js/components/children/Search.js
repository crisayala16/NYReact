var React = require('react');

var Search = React.createClass({
	render: function(){
		return(
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
					<button className='btn btn-success' onClick=''>
						Search
					</button>
				</div>
			</div>
		);
	}
});

module.exports = Search;
