import React from 'react';
import helpers from './../../utils/helpers.js'

class Save extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			saved: false
		}
		this.save = this.save.bind(this);
	}
	save(){
		const {title, date, url} = this.props.article;
		helpers.postArticle(title, date, url, function(response){
		});
		this.setState({
			saved: true
		});
	}
	render(){	
		if(this.state.saved){
			return(<button className='btn btn-success disabled'>saved</button>);
		}
		else{
			return(<button className='btn btn-success' onClick={this.save}>save</button>)
		}
		
	}
}
export default Save;