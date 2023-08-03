let axios = require("axios");
const { Logger } = require("@classycrafter/super-logger");

const logger = new Logger({
  name: "ram-api.js",
  timezone: "America/New_York",
  tzformat: 12,
  dirpath: "./ram-api-js-logs",
  writelogs: true,
  colored: true,
});

const apilogger = new Logger({
  name: "ram-api2",
  timezone: "America/New_York",
  tzformat: 12,
  dirpath: "./ram-api-two-logs",
  writelogs: true,
  colored: true,
});

class RamApi2_Fun {
  /**
   *
   * @param {{Version}} _options
   */

  constructor(_options) {
    this.version = _options.version || "v1";
  }
  /**
   * @param {String} token
   * @returns
   */
  birthday(token) {
    let p = new Promise(async (resolve, reject) => {
      axios
        .get(`https://api2.rambot.xyz/birthday?versionOverride=${version}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          apilogger.error(err);
          reject("Check Logs for Error Code");
        });
    });
    return p;
  }
  /**
   *
   * @param {String} token
   * @returns
   */
  hello(token) {
    let p = new Promise(async (resolve, reject) => {
      axios
        .get(`https://api2.rambot.xyz/hello?versionOverride=${version}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          apilogger.error(err);
          reject("Check Logs for Error Code");
        });
    });
    return p;
  }
}

module.exports = { RamApi2_Fun };
