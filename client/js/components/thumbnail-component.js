import React from 'react';

export default function ThumbnailComponent({ tweet }) {
	let { media_url, screen_name } = tweet;

	return (
		<div
			className="thumbnail"
			style={ { backgroundImage: `url(${media_url})` } }
			alt={ `photo by ${screen_name}` }
		/>
	)
}