import fetch  from 'node-fetch';
import { date } from "better-date.js"; // better date lol


const outdated = ["v0", "v1", "v2", "v3", "v4", "v5", "v6", "v7"];
const latest = "v10";
const url = `https://api.rambot.xyz`;
import curVer2 from "./package.json";
const curVer = curVer2.version

var dev = false;

import { Logger } from "simply-logger";

if (curVer.includes("-dev")) dev = true;


const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);



var tryagain = false;


import packageJson from "package-json";
import chalk from "chalk";
import { fun } from '.';

/**
 * 
 * @param name string
 * @param apikey string
 * @param version string
 * @param type string
 * @param lang string
 * @returns data
 */

logger.error(`Typescript support was removed it was just a failure if you with to connect manually check out https://api.rambot.xyz for docs and more info`)

fun

export default {
	fun
}

let ran = false;

if (dev) {
	logger.warn("Warning this is a dev build use at your own risk");
	setInterval(async () => {
		let version = await packageJson("ram-api.js", { version: "dev" });

		if (ran) return;
		if (curVer !== version.version) {
			logger.warn(
				`Dev Package is out of date to update run ${chalk.magenta(
					`npm i ram-api.js@dev`
				)} to update latest version is ${chalk.magenta(version.version)}`
			);
			ran = true;
		}
	}, 60000);
}

if (!dev) {
	setInterval(async () => {
		let version = await packageJson("ram-api.js", { version: "latest" });

		if (ran) return;
		if (curVer !== version.version) {
			logger.warn(
				`Package is out of date to update run ${chalk.magenta(
					`npm i ram-api.js@latest`
				)} to update latest version is ${chalk.magenta(version.version)}`
			);
			ran = true;
		}
	}, 60000);
}





