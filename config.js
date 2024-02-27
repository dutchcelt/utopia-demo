const utopia = require('./formatters/utopia.js');

module.exports = () => ({
	"source": ["tokens/**/*.json"],
	format: {
		...utopia,
	},
	"platforms": {
		"css": {
			"transformGroup": "utopia/css",
			"buildPath": "build/css/",
			"files": [
				{
					"destination": "_variables.css",
					"format": "css/variables"
				}
			]
		},
		"utopia": {
			"transformGroup": "utopia/css",
			"buildPath": "build/css/",
			"files": [
				{
					"destination": "_scales.css",
					"format": "utopia/typescales"
				}
			]
		},

	}
});

