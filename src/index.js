import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; //Path reference

const API_KEY = 'AIzaSyCjKf0Mi0-txQVsbgcWLhuMoYbwyztuOK8';
// Create a new component. THis component should produce
// some HTML

const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// take this component's generated HTML and put it
// on the the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

