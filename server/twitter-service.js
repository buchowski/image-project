let { CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET } = require('../config.json');
const Twitter = require('twitter');
const OFFLINE_DATA = require('./offline-data');

class TwitterService {
	constructor() {
		this.client = new Twitter({
		    consumer_key: CONSUMER_KEY,
		    consumer_secret: CONSUMER_SECRET,
		    access_token_key: ACCESS_TOKEN,
		    access_token_secret: ACCESS_TOKEN_SECRET
		});
	}
	getTimeline(user) {
		let params = {
		    screen_name: user,
		    count: 200
		};

		return Promise.resolve(OFFLINE_DATA);

		// return this.client.get('statuses/user_timeline', params)
		// 	.then(timeline => {
		// 		console.log('got timeline');
		// 		let clean = this.cleanTimeline(timeline);
		// 		console.log(JSON.stringify(clean));
		// 		return clean;
		// 	});
	}
	cleanTimeline(timeline) {
		return this.filterForImages(timeline)
			.map(({ text, created_at, user: { screen_name }, entities: { media } }) => {
				return { text, created_at, screen_name, media_url: media[0].media_url };
			});
	}
	filterForImages(timeline) {
		return timeline.filter(({ entities }) => {
			return entities && entities.media && entities.media[0] && entities.media[0].type === 'photo';
		});
	}
}

module.exports = new TwitterService();






