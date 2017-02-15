# Simple React/Redux/Express Setup

## Installation

1. npm install
2. add Twitter vals to /config.json
	```
		{
		    "CONSUMER_KEY": "",
		    "CONSUMER_SECRET": "",
		    "ACCESS_TOKEN": "",
		    "ACCESS_TOKEN_SECRET": "",
		    "DEFAULT_USER": ""
		}
	```
3. node index.js
4. npm start
5. visit http://localhost:PORT (by default, PORT = 3000)

## How to use

1. The Twitter images of the DEFAULT_USER load initially.
2. Enter a new user's name to load that user's Twitter photos.
3. Navigate the gallery using the arrow buttons.
4. Narrow the screen width to see the mobile-friendly view

Note: This was setup under node version 6.9.5