import React from 'react'

const videoList = (props) => {

	return (
		<ul className="col-md-4 list-group">
					{props.videos.length}
		</ul>
	);
}

export default videoList;
