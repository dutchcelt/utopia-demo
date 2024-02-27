const StyleDictionary = require("style-dictionary");

//const config = require("./config.json");
const config = require("./config.js");
require("./transforms/utopia.js");

const utopiaDictionary = StyleDictionary.extend(config());

utopiaDictionary.buildAllPlatforms();
