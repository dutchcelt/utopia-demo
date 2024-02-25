const StyleDictionary = require("style-dictionary");
const { calculateClamp } = require("utopia-core");

const isUtopiaCalculateClamp = (token) => {
  return token?.$extensions?.["utopia.calculate.clamp"];
};

StyleDictionary.registerTransform({
  name: "utopia/calculate/clamp",
  type: `value`,
  transitive: true,
  matcher: isUtopiaCalculateClamp,
  transformer: (token) => {
    const config = token.$extensions["utopia.calculate.clamp"];
    return calculateClamp({ ...config });
  },
});

StyleDictionary.registerTransformGroup({
  name: "utopia/css",
  transforms: [
    ...StyleDictionary.transformGroup["css"],
    "utopia/calculate/clamp",
  ],
});
