const { Logger } = require("simply-logger");

const { ping } = require("../items/ping");

const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);
var tryagain = "false";

const axios = require("axios");
const { date } = require("better-date.js"); // better date lol
const url = `https://api.rambot.xyz`;

const outdated = ["v0", "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"];
class RamApiBeta {
  /**
   *
   * @param {String} apikey
   * @param {String} version
   *
   */
  constructor() {
    if (!version.startsWith("v")) version = `v${version}`;

    this.version = version;
    this.baseURL = `${url}/beta/v13/public`;
  }
  /**
   * 
   * @param {Number} min 
   * @param {Number} max 
   * @returns 
   */
randomNumberAsync(min, max) {
    let p = new Promise(async (resolve, reject) => {
        await axios
          .get(`/randomNumber/${min}/${max}`, {
            headers: {
              "Content-Type": "application/json",
              "api-key": this.apikey,
            },
            baseURL: this.baseURL,
          })
          .then(async function (res) {
            resolve(res.data);
          })
          .catch(async (error) => {
            errors("_8ballAsync", error);
            reject("Error Check Console for more info!");
          });
      });
      return p;
}

}

module.exports = RamApiBeta;