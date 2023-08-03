const { Logger } = require("@classycrafter/super-logger");
const { series } = require("async");
const { exec } = require("child_process");

const logger = new Logger({
  name: `ram-api.js`,
  timezone: "America/New_York",
  tzformat: 12,
});

const apilogger = new Logger({
  name: "Ram Api",
  timezone: "America/New_York",
  tzformat: 12,
});
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
   *
   * @param {String} endpoint = can be found on the api docs EX: /basic/v13/hello?lang=english or /basic/v12/public/hello/english
   * @param {String} api_key = Leave blank or set to "basic" for basic endpoints
   * @returns
   */
  async customAsync(
    endpoint, //can be found on the api docs EX: /basic/v13/hello?lang=english or /basic/v12/hello/english
    api_key = "basic"
  ) {
    let p = new Promise(async (resolve, reject) => {
      if (endpoint.startsWith("/basic")) api_key = "basic";

      let url = `https://api.rambot.xyz${endpoint}`;

      if (api_key !== "basic") {
        await axios
          .get(url, {
            headers: {
              "Content-Type": "application/json",
              "api-key": api_key,
            },
          })
          .then(async function (res) {
            resolve(res.data);
          })
          .catch(async (error) => {
            reject(
              "Custom Failed **note** if error is related to a invalid endpoint check api.rambot.xyz for endpoint names! " +
                error
            );
          });
      } else {
        await axios
          .get(url)
          .then(async function (res) {
            resolve(res.data);
          })
          .catch(async (error) => {
            reject(
              "Custom Failed **note** if error is related to a invalid endpoint check api.rambot.xyz for endpoint names! " +
                error
            );
          });
      }
    });
    return p;
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
