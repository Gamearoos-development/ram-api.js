const axios = require("axios");
const { date } = require("better-date.js"); // better date lol

const { Logger } = require("simply-logger");
const outdated = ["v0", "v1", "v2", "v3", "v4", "v5", "v6", "v7"];
const latest = "v10";
const url = `https://api.rambot.xyz/extended`;

const apilogger = new Logger("Ram Api", "America/New_York", 12);
const logger = new Logger(`ram-api.js`, "America/New_York", 12);

var tryagain = false;
const oldcode = require("./oldcode");

exports.error = async function (error) {
	logger.error(error);
};

const time = new date("America/New_York", 12).date;

exports.ping = async function ping() {
	let dat = Date.now();

	let p2 = new Promise(async (resolve, reject) => {
		await axios
			.get(`/version/v10`, {
				headers: {
					"Content-Type": "application/json",
				},
				baseURL: `${url}/public`,
			})
			.then(async function (response) {
				let data = {
					ping: `${Date.now() - dat}ms`,
					time: time,
				};

				resolve(data);
			})
			.catch((error) => {
				errors(version, error, reject, resolve, hug);
			});
	});

	return p2;
};

async function hug(version) {
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
				.hug(version)
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} else if (version2 >= 9) {
			await axios
				.get(`/hug`, {
					headers: {
						"Content-Type": "application/json",
					},
					baseURL: `${url}/${version}/public`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					errors(version, error, reject, resolve, hug);
				});
		}
	});

	return p;
}

async function _8ball(version, lang = "english") {
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
				._8ball(version, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/8ball/${lang}`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((response) => resolve(response.data))
				.catch((error) => {
					errors(version, error, reject, resolve, _8ball, lang);
				});
		}
	});
	return p2;
}

async function cuddle(version) {
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
				.cuddle(version)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/cuddle`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((response) => resolve(response.data))
				.catch((error) => {
					errors(version, error, reject, resolve, cuddle);
				});
		}
	});
	return p2;
}

async function goodmorning(version, lang = "english") {
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
				.gm(version, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/gm/${lang}`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => {
					errors(version, error, reject, resolve, goodmorning, lang);
				});
		}
	});
	return p2;
}

async function goodnight(version, lang = "english") {
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
				.gn(version, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/gn/${lang}`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => {
					errors(version, error, reject, resolve, goodnight, lang);
				});
		}
	});
	return p2;
}

async function hello(version, lang = "english") {
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
				.hello(version, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			await axios
				.get(`${url}/${version}/public/hello/${lang}`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => {
					errors(version, error, reject, resolve, hello, lang);
				});
		}
	});
	return p2;
}

async function kiss(version) {
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
				.kiss(version)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/kiss`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, error, reject, resolve, kiss));
		}
	});
	return p2;
}

async function slap(version) {
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
				.slap(version)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/slap`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, error, reject, resolve, slap));
		}
	});
	return p2;
}

async function sick(version) {
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
				.sick(version)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/sick`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, error, reject, resolve, sick));
		}
	});
	return p2;
}

async function tired(version) {
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
				.tired(version)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/tired`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, error, reject, resolve, tired));
		}
	});
	return p2;
}

async function cry(version, lang = "english") {
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
				.cry(version, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/cry/${lang}`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, error, reject, resolve, cry));
		}
	});
	return p2;
}

async function laugh(version) {
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
				.lol(version)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/laugh`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, error, reject, resolve, laugh));
		}
	});
	return p2;
}

async function birthday(version, lang = "english") {
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
				.bday(version, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/bday/${lang}`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, error, reject, resolve, birthday));
		}
	});
	return p2;
}

async function version_check(version) {
	axios
		.get(`${url}/version/${version}`)
		.then((data) => {
			let ifSupported = data.data.supported;
			let ifOutdated = data.data.outdated;
			let latest = data.data.latest;

			if (ifOutdated) {
				if (!ifSupported) {
					return apilogger.error(
						`${version} is no longer supported latest is ${latest}`
					);
				} else {
					return apilogger.warn(
						`${version} is outdated but still supported! Latest is ${latest}`
					);
				}
			} else {
				apilogger.info(
					`${version} matches ${latest} this version is up to date!`
				);
			}
		})
		.catch((err) => {
			apilogger.error(err);

			if (err.response.data) logger.error(JSON.stringify(err.response.data));
		});
}

async function apiinfo() {
	let p2 = new Promise(async (resolve, reject) => {
		axios
			.get(`${url}/apiinfo`, {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((data) => resolve(data.data))
			.catch((error) => errors(false, error, reject, resolve, false));
	});
	return p2;
}

async function meme(version) {
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
				.meme(version)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/meme`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, error, reject, resolve, meme));
		}
	});
	return p2;
}

async function cats(version) {
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
				.cats(version)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/cats`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => {
					resolve(data.data);
				})
				.catch((error) => errors(version, error, reject, resolve, cats));
		}
	});
	return p2;
}

async function anime(version) {
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
				.anime(version)
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} else {
			axios
				.get(`${url}/${version}/public/anime`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, error, reject, resolve, anime));
		}
	});
	return p2;
}

async function ram_image(version) {
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
				.ramimage(version)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/ram`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, error, reject, resolve, ram_image));
		}
	});
	return p2;
}

async function nekopara(version) {
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
				.ramimage(version)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/ram`, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, error, reject, resolve, ram_image));
		}
	});
	return p2;
}

exports.games = {
	_8ball,
};

exports.fun = {
	hug,

	cuddle,
	goodmorning,
	goodnight,
	hello,
	kiss,
	slap,
	sick,
	tired,
	cry,
	laugh,
	birthday,
};

exports.info = {
	version_check,
	apiinfo,
};

exports.images = {
	ram_image,
	nekopara,
};

exports.reddit = {
	meme,
	cats,
	anime,
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
	if (!error.response) {
		reject("Check Console");
		return logger.error(error);
	}

	if (error.response.statusText === "I'm a Teapot") {
		apilogger.error("I Refuse to brew a coffee in a teapot");

		return reject(
			JSON.stringify({
				code: "418",
				msg: "The api refuses to attempt to brew coffee with a teapot.",
				msg2: "Theres no database entire for this  id",
			})
		);
	}
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
