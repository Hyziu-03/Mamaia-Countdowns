module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{html,json,png,txt,css,js,svg,webp}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'build/sw.js'
};