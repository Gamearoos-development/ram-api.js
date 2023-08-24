const { Logger } = require("simply-logger");

const { ping } = require("./items/ping");
const { RamApiPro } = require("./Endpoints/pro");
const { RamApiBasic } = require("./Endpoints/basic");
const { RamApi } = require("./Endpoints/normal");
const { RamApiBeta } = require("./Endpoints/beta");
const { Utils } = require("./Utils/utils");
const { ExecuteConsole } = require("./items/logger");
const publicCheck = ["v10", "v11", "v12"];

module.exports = {
  RamApiPro,
  ExecuteConsole,
  RamApiBasic,
  RamApi,
  Utils,
  RamApiBeta,
};
