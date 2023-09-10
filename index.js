const { ping } = require("./items/ping");
const { RamApiPro } = require("./Endpoints/pro");
const { RamApiBasic } = require("./items/outdated/basic");
const { RamApi } = require("./Endpoints/normal");
const { RamApiBeta } = require("./Endpoints/beta");
const { Utils } = require("./Utils/utils");
const { RamApiDemo } = require("./Endpoints/demo");
const publicCheck = ["v10", "v11", "v12"];
const { Logger } = require("simply-logger");

const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);

const fetch = require("npm-registry-fetch");
const { ExecuteConsole } = require("./Utils/logger");

const packageName = "ram-api.js";
const currentVersion = require("./package.json").version;
let warningDisplayed = false;

async function checkForUpdates() {
  try {
    const latestInfo = await fetch.json(`/${packageName}`);
    const latestVersion = latestInfo["dist-tags"].latest;

    if (latestVersion !== currentVersion && !warningDisplayed) {
      logger.warn(
        `Your version (${currentVersion}) of ${packageName} is outdated. Latest version is ${latestVersion}.`
      );
      warningDisplayed = true; // Set to true to prevent further warnings
    }
  } catch (error) {
    logger.error("Error checking for updates:", error.message);
  }
}

checkForUpdates();

module.exports = {
  RamApiPro,
  RamApiBasic,
  RamApi,
  Utils,
  RamApiBeta,
  RamApiDemo,
  ExecuteConsole,
};
