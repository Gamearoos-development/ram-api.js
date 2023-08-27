const { Logger } = require("simply-logger");

const { ping } = require("./items/ping");
const { RamApiPro } = require("./Endpoints/pro");
const { RamApiBasic } = require("./Endpoints/basic");
const { RamApi } = require("./Endpoints/normal");
const { RamApiBeta } = require("./Endpoints/beta");
const { Utils } = require("./Utils/utils");
const { RamApiDemo } = require("./Endpoints/demo");
const publicCheck = ["v10", "v11", "v12"];

const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);

class Logs {
  /**
   *
   * @param {String} name
   */
  constructor(name) {
    let templog = new Logger(name, "America/New_York", 12);

    this.log = templog;
  }
  /**
   *
   * @param {String} msg
   */
  error(msg) {
    logger.warn("error is deprecated use errorAsync(msg) instead!");
    this.log.error(msg);
  }
  /**
   *
   * @param {String} msg
   */
  errorAsync(msg) {
    this.log.error(msg);
  }
  /**
   *
   * @param {String} msg
   */
  info(msg) {
    logger.warn("info is deprecated use infoAsync(msg) instead!");
    this.log.info(msg);
  }
  /**
   *
   * @param {String} msg
   */
  infoAsync(msg) {
    this.log.info(msg);
  }
  /**
   *
   * @param {String} msg
   */
  warn(msg) {
    logger.warn("warn is deprecated use warnAsync(msg) instead!");
    this.log.warn(msg);
  }
  /**
   *
   * @param {String} msg
   */
  warnAsync(msg) {
    this.log.warn(msg);
  }
}

const fetch = require("npm-registry-fetch");

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
  Logs,
  RamApiBasic,
  RamApi,
  Utils,
  RamApiBeta,
  RamApiDemo,
};
