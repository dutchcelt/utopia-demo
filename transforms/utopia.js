const path = require('path');

const StyleDictionary = require('style-dictionary');
const { calculateClamp } = require('utopia-core');
const { layout } = require(path.resolve('.', 'tokens', 'layout', 'breakpoint.json'));

const isUtopiaCalculateClamp = (token) => {
	return token?.$extensions?.['utopia.calculate.clamp'];
};

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
