import React from 'react';
import helpers from './../../utils/helpers.js'

const Remove = (props) =>{
	const remove = ()=>{
		const {id} = props;
		helpers.removeArticle(id, function(response){
			console.log(response);
		});
		props.updateSaved();
	}
	return(
		<button 
		onClick={remove}
		className='btn btn-danger'
		>
		Remove
		</button>
	);
}
export default Remove;