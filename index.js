const axios = require("axios");

const { Logger } = require("simply-logger");
const outdated = ["v0", "v1", "v2", "v3", "v4", "v5", "v6"];
const latest = "v9";
const url = `http://localhost`;

const apilogger = new Logger("Ram Api", "America/New_York");
const logger = new Logger(`ram-api.js`, "America/New_York");

var tryagain = false;
const oldcode = require("./oldcode");

exports.error = async function (error) {
	logger.error(error);
};

async function hug(version, apikey) {
	let p = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) {
			apilogger.error(`${version} is no longer supported latest is ${latest}`);
			return reject("Check Console");
		}

		if (!apikey) return reject("A api key is required");

		let version2 = version.replace(/v/g, "");

		if (version2 <= 8) {
			logger.warn(
				"Your using a older version of ram api reverting to old code"
			);

			oldcode
				.hug(version, apikey)
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} else if (version2 === 9) {
			await axios
				.get(`/hug`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `${url}/${version}/public`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					errors(version, apikey, error, reject, resolve, hug);
				});
		}
	});

	return p;
}

async function _8ball(version, apikey, lang = "english") {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) {
			apilogger.error(`${version} is no longer supported latest is ${latest}`);
			return reject("Check Console");
		}
		let version2 = version.replace(/v/g, "");
		if (version2 <= 8) {
			logger.warn(
				"Your using a older version of ram api reverting to old code"
			);

			oldcode
				._8ball(version, apikey, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/8ball/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((response) => resolve(response.data))
				.catch((error) => {
					errors(version, apikey, error, reject, resolve, _8ball, lang);
				});
		}
	});
	return p2;
}

async function cuddle(version, apikey) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) {
			apilogger.error(`${version} is no longer supported latest is ${latest}`);
			return reject(
				JSON.stringify({ code: "outdated error", msg: "Check Console" })
			);
		}

		let version2 = version.replace(/v/g, "");
		if (version2 <= 8) {
			logger.warn(
				"Your using a older version of ram api reverting to old code"
			);

			oldcode
				.cuddle(version, apikey)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/cuddle`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((response) => resolve(response.data))
				.catch((error) => {
					errors(version, apikey, error, reject, resolve, cuddle);
				});
		}
	});
	return p2;
}

exports.get = {
	hug,
	_8ball,
	cuddle,
};

async function errors(
	version,
	key,
	error,
	reject,
	resolve,
	retry,
	lang = "english"
) {
	if (error.response.statusText === "Too Many Requests") {
		let err = {
			code: 429,
			msg: "Ram api rate limit reached",
		};
		if (!tryagain && retry) {
			logger.warn(`Ram api limit reached retrying in 9 seconds!`);

			setTimeout(() => {
				tryagain = true;
				retry(version, key, lang)
					.then((data) => resolve(data))
					.catch((err) => reject(JSON.stringify(err)));
			}, 9000);
			return;
		} else {
			tryagain = false;
			retry = false;
			reject(err);
		}
	}

	apilogger.error(error);

	if (error.response.data) reject(JSON.stringify(error.response.data));
	else reject("See Console");
}
