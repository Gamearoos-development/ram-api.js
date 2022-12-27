const { Logger } = require("simply-logger");
import {series} from 'async';
const {exec} = require('child_process');

const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);
const axios = require("axios");
const curVer = require("../package.json").version;
const packageJson = require( 'package-json');
const chalk = require("chalk");

class Utils {
  constructor() {}

  

  /**
   *
   * @param {Boolean} restart
   * @param {String} version
   * 
   */
  async updatePackageAsync(restart, version = "latest") {
    let cmd = `npm i ram-api.js@${version}`;

series([
 () => exec(cmd),
 
]); 

if(restart) {
  console.log("Restarting.... (If not using pm2 or forever or nodemon this will just stop the program)")
   // Add the listener
   process.exit(1);
}

   
    async () => await exec(cmd).catch((err) => logger.error(err));
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
            resolve(
              {
                log: `Dev Package is out of date to update run ${chalk.magenta(
                  `npm i ram-api.js@dev`
                )} to update latest version is ${chalk.magenta(version.version)}`,
                outdated: true
              
              }
            )
            ran = true;
          } else {
            resolve({
              log: "Package Up to date",
              outdated: false
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
            resolve( {
              log: `Package is out of date to update run ${chalk.magenta(
                `npm i ram-api.js@latest`
              )} to update latest version is ${chalk.magenta(version.version)}`,
              outdated: true
            }
            );
            ran = true;
          } else {
            resolve({
              log: "Package Up to date",
              outdated: false
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
   * @param {String} endpoint
   * @param {String} version
   * @param {Object} Options = { pro: false, basic: true, api_key: "NULL", lang: "english" }
   * @returns
   */
  async customAsync(
    endpoint,
    version,
    Options = { pro: false, basic: false, api_key: "NULL", lang: "NULL" }
  ) {
    let p = new Promise(async (resolve, reject) => {
      let url = `/${version}/public/${endpoint}/`;

      if (Options.pro) url = `/pro${url}`;
      if (Options.basic) url = `/basic${url}`;

      if (Options.lang === "NULL") url = `${url}/${Options.lang}`;

      await axios
        .get(url, {
          headers: {
            "Content-Type": "application/json",
            "api-key": Options.api_key,
          },
          baseURL: `https://api.rambot.xyz/`,
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
