import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'; //Path reference
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCjKf0Mi0-txQVsbgcWLhuMoYbwyztuOK8';


// Create a new component. THis component should produce
// some HTML

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			//this.setState({ videos: videos });
		});
	}

	render () {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

// take this component's generated HTML and put it
// on the the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

