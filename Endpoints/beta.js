const { Logger } = require("@classycrafter/super-logger");

const { ping } = require("../items/ping");

const logger = new Logger({
  name: `ram-api.js`,
  timezone: "America/New_York",
  tzformat: 12,
   writelogs: false,
});

const apilogger = new Logger({
  name: "Ram Api",
  timezone: "America/New_York",
  tzformat: 12,
  writelogs: false,
});
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
  constructor(version) {
    if (!version.startsWith("v")) version = `v${version}`;

    this.version = version;
    this.baseURL = `${url}/beta/v13/public`;
  }
}

module.exports = { RamApiBeta };
