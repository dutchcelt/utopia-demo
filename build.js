const StyleDictionary = require("style-dictionary");
const config = require("./config.json");
require("./transforms/utopia.js");

const utopiaDictionary = StyleDictionary.extend(config);

utopiaDictionary.buildAllPlatforms();
