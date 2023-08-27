const { Logger } = require("simply-logger");

const { ping } = require("../items/ping");

const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);
var tryagain = "false";

const axios = require("axios");
const { date } = require("better-date.js"); // better date lol
const url = `https://api.rambot.xyz`;
