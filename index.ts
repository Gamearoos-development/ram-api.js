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

/**
 * 
 * @param name string
 * @param apikey string
 * @param version string
 * @param type string
 * @param lang string
 * @returns data
 */
async function api(name, apikey, version, type, lang = 'english') {

	
	if(!name) return apilogger.error(`the name ${name} is not in my api register please check the docs do not include / or url`)
	

	if(!type ) type = 'get';

	if(!apikey) return apilogger.error('A api key is required')

	if(!lang) lang = " ";
	else lang = `/${lang}`

	switch (type) {
		case "get":
			let response = await fetch(`https://api.rambot.xyz/${version}/public/${name}${lang}`).then(res => res.json()).catch(err => {
				return err
			});

			console.log(response);
		break;
	}

} 

export default {
	api
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





