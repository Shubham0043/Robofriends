import React from 'react';

const Scroll= props =>
{
	return(
			<div style={{overflowY: 'Scroll', border: 'solid black 1px', height:'800px'}}>
				{props.children}
			</div>
			);
};
export default Scroll;