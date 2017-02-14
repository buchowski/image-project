import React from 'react';

export default function SearchComponent({ term, onClick, onInput }) {
	return (
		<div id="search-box">
			<h1>Enter User Search Here:</h1>
			<input type="text" defaultValue={ term } onInput={ onInput.bind(this) } />
			<br />
			<button onClick={ onClick.bind(this) }>SEARCH</button>
		</div>
	)
}