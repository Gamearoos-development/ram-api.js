const { Logger } = require("simply-logger");
const { series } = require("async");
const { exec } = require("child_process");

const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);
const axios = require("axios");
const curVer = require("../package.json").version;
const packageJson = require("package-json");
const chalk = require("chalk");
const publicCheck = ["v10", "v11", "v12"];

class Utils {
  constructor() {}

  /**
   *
   * @param {Boolean} restart
   * @param {String} version
   *
   */
  async updatePackageAsync(version = "latest") {
    let cmd = `npm i ram-api.js@${version}`;
    let cmd2 = `echo "Update for ram-api.js to ${version}"`;

    series([() => exec(cmd), () => exec(cmd2)]);
    setTimeout(() => console.log("done"), 3000);
    let version2 = await packageJson("ram-api.js", { version: version });

    let success = false;
    if (curVer === version2.version) {
      success = true;
    }

    return success;
  }
  /**
   *
   * @returns
   */
  async packageVersionCheckAsync() {
    let p = new Promise(async (resolve, reject) => {
      var dev = false;
      let ran = false;

      if (dev) {
        try {
          logger.warn("Warning this is a dev build use at your own risk");

          let version = await packageJson("ram-api.js", { version: "dev" });

          if (ran) return;
          if (curVer !== version.version) {
            resolve({
              log: `Dev Package is out of date to update run ${chalk.magenta(
                `npm i ram-api.js@dev`
              )} to update latest version is ${chalk.magenta(version.version)}`,
              outdated: true,
            });
            ran = true;
          } else {
            resolve({
              log: "Package Up to date",
              outdated: false,
            });
          }
        } catch (error) {
          reject(error);
        }
      }

      if (!dev) {
        try {
          let version = await packageJson("ram-api.js", { version: "latest" });

          if (ran) return;
          if (curVer !== version.version) {
            resolve({
              log: `Package is out of date to update run ${chalk.magenta(
                `npm i ram-api.js@latest`
              )} to update latest version is ${chalk.magenta(version.version)}`,
              outdated: true,
            });
            ran = true;
          } else {
            resolve({
              log: "Package Up to date",
              outdated: false,
            });
          }
        } catch (error) {
          reject(error);
        }
      }
    });
    return p;
  }
  async pingAsync() {
    let dat = Date.now();

    let p = new Promise(async (resolve, reject) => {
      await axios
        .get(`/ping`, {
          headers: {
            "Content-Type": "application/json",
          },
          baseURL: `https://api.rambot.xyz/basic/v12/utils`,
        })
        .then(async function (res) {
          resolve(res.data);
        })
        .catch(async (error) => {
          reject("Ping Failed! " + error);
        });
    });
    return p;
  }
  /**
   * Fetches data from the specified API endpoint based on the provided access level.
   * @param {string} endpoint - The API endpoint to request data from.
   * @param {string} accessLevel - The access level for the request ("normal", "extended", "demo", "pro").
   * @param {Object} _options - Options object containing version, params, and headers.
   * @param {string} _options.version - The version to use (latest is v14).
   * @param {Object} _options.params - Query parameters for the request.
   * @param {Object} _options.headers - Custom headers for the request. If not demo, {"api-key": "key goes here"}.
   * @returns {Promise} A promise that resolves with the fetched data or rejects with an error message.
   */
  async customAsync(
    endpoint, // something like /hello or /ram
    accessLevel = "normal", // the type to use
    _options = {} // options object containing version, params, and headers
  ) {
    return new Promise(async (resolve, reject) => {
      const supportedVersions = ["v14"];
      const outdatedVersions = ["v11", "v12", "v13"];
      const notsupported = [
        "v0",
        "v1",
        "v2",
        "v3",
        "v4",
        "v5",
        "v6",
        "v7",
        "v8",
        "v9",
        "v10",
      ];
      const requestedVersion = _options.version || "v14";

      if (supportedVersions.includes(requestedVersion)) {
      } else if (outdatedVersions.includes(requestedVersion)) {
        logger.warn(
          `${requestedVersion} is outdated please update to the latest ${supportedVersions[0]}`
        );
      } else if (notsupported.includes(requestedVersion)) {
        logger.error(`${requestedVersion} is no longer supported`);
        return reject("Check console");
      }

      let baseURL = "NULL";

      if (accessLevel === "normal") {
        baseURL = `https://api.rambot.xyz/${requestedVersion}`;
      } else if (accessLevel === "extended") {
        baseURL = `https://api.rambot.xyz/extended/${requestedVersion}`;
      } else if (accessLevel === "demo") {
        baseURL = "https://api.rambot.xyz/demo";
      } else if (accessLevel === "pro") {
        baseURL = `https://api.rambot.xyz/pro/${requestedVersion}`;
      }

      try {
        const response = await axios({
          method: "get",
          url: endpoint,
          params: _options.params || {},
          baseURL: baseURL,
          headers: _options.headers || {},
        });

        resolve(response.data);
      } catch (error) {
        logger.error(error);
        reject(error);
      }
    });
  }
}

async function errors(name, error) {
  if (error.response) {
    let err = `Status: ${error.response.status} | Error: ${error.response.statusText}`;
    apilogger.error(err);
    if (error.response.data.error.message)
      logger.error(
        `Ram Api Ran into a error while running ${name}. The problem is: ${error.response.data.error.message}.`
      );
  } else {
    console.log(error);
    logger.error(
      `error running ${name}. Please report to the developers the error logged into your console!`
    );
  }
}

module.exports = { Utils };
