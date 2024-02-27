const path = require('path');
const { calculateTypeScale } = require('utopia-core');

const UTOPIA_EXT = 'utopia.type.scales'


/**
 * getExtension
 * @param {Object} token
 * @returns {Object}
 */
const getExtension = token => token?.$extensions?.[`${UTOPIA_EXT}`];

/**
 * hasExtension
 * @param {Object} token
 * @returns {boolean}
 */
const hasExtension = token => {
	const ext = token?.$extensions?.[UTOPIA_EXT];
	return typeof ext === 'object';
};
/**
 * Converts a step value to a corresponding T-shirt size.
 * @param {number} step - The step value to convert into a T-shirt size.
 * @returns {string} The T-shirt size corresponding to the given step value.
 */
const convertToTShirtSize = (step) => {
	const times = Math.max(0, Math.abs(step) - 1);
	const index = Math.sign(step) + 1;
	return 'x'.repeat(times) + ['s','m','l'][index];
}

const renderTypesScales = (config) => {
	return calculateTypeScale(config).map((utopia) => {
		let str = `\t--font-size-${convertToTShirtSize(utopia.step)} { `;
		str += 'font-size: ' + utopia.clamp;
		str += ' }';
		return str;
	}).join('\n')
};

/**
 * Format object for Style Dictionary
 * @type {Object}
 */
module.exports = {
	'utopia/typescales': function({ dictionary, options }) {
		const { allTokens } = dictionary;

		return allTokens
			.filter((token) => hasExtension(token))
			.map((token) => {
				const config = getExtension(token);
				let str = `:root {\n`;
				str += renderTypesScales(config);
				str += '\n}';
				return str;
			}).join('\n');

	},
};
