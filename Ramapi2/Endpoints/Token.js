let axios = require("axios");
const { Logger } = require("simply-logger");

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
class RamApi2_Token {
  /**
   *
   * @param {{version}} _options
   */
  constructor(_options) {
    let version = _options.version || "v1";
  }
  /**
   *
   * @param {String} email
   * @param {String} pass
   * @returns
   */
  signup(email, pass) {
    let p = new Promise(async (resolve, reject) => {
      if (!email) logger.error("No Email PRovided");
      if (!email) return reject("No email provided!");
      if (!pass) logger.error("No Pass provided");
      if (!pass) return reject("No Pass provided!");

      axios
        .post("https://api2.rambot.xyz/users/signup", {
          email: email,
          password: pass,
        })
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          apilogger.error(err);
          reject("Check console for errors");
        });
    });
    return p;
  }
  /**
   *
   * @param {String} email
   * @param {String} pass
   * @returns
   */
  login(email, pass) {
    let p = new Promise(async (resolve, reject) => {
      if (!email) logger.error("No Email PRovided");
      if (!email) return reject("No email provided!");
      if (!pass) logger.error("No Pass provided");
      if (!pass) return reject("No Pass provided!");

      axios
        .post("https://api2.rambot.xyz/users/login", {
          email: email,
          password: pass,
        })
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          apilogger.error(err);
          reject("Check console for errors");
        });
    });
    return p;
  }
}

module.exports = { RamApi2_Token };
