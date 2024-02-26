const path = require('path');

const StyleDictionary = require('style-dictionary');
const { layout } = require(path.resolve('.', 'tokens', 'layout', 'breakpoint.json'));
const { calculateClamp } = require('utopia-core');

/**
 * Determines if the given 'token' has the 'utopia.calculate.clamp' extension.
 * @param {object} token - The object to check.
 * @returns {boolean} - True if the object has the 'utopia.calculate.clamp' extension, false otherwise.
 */
const isUtopiaCalculateClamp = (token) => {
	return token?.$extensions?.['utopia.calculate.clamp'];
};

/**
 * @typedef {import('utopia-core').UtopiaClampConfig} UtopiaClampConfig
 * @type {UtopiaClampConfig}
 */
const scaleBoundries = {
	minWidth: layout.breakpoint.mobile.value,
	maxWidth: layout.breakpoint.desktop.value,
};

StyleDictionary.registerTransform({
	name: 'utopia/calculate/clamp',
	type: `value`,
	transitive: true,
	matcher: isUtopiaCalculateClamp,
	transformer: (token) => {
		/** @type {UtopiaClampConfig} */
		const minMaxSizes = token.$extensions['utopia.calculate.clamp'];
		return calculateClamp({
			...scaleBoundries,
			...minMaxSizes,
		});
	},
});

StyleDictionary.registerTransformGroup({
	name: 'utopia/css',
	transforms: [...StyleDictionary.transformGroup['css'], 'utopia/calculate/clamp'],
});
