const axios = require("axios");
const { date } = require("better-date.js"); // better date lol


const outdated = ["v0", "v1", "v2", "v3", "v4", "v5", "v6", "v7"];
const latest = "v10";
const url = `https://api.rambot.xyz`;
const curVer = require("./package.json").version;
var dev = false;
const slogger = require("@classycrafter/super-logger");
const { Logger } = require("simply-logger");

if (curVer.includes("-dev")) dev = true;


const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);



var tryagain = false;
const oldcode = require("./oldcode");

const packageJson = require("package-json");
const chalk = require("chalk");




async function error(error) {
	logger.error(error);
};

const time = new date("America/New_York", 12).date;

async function ping() {
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
				errors(version, apikey, error, reject, resolve, hug);
			});
	});

	return p2;
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
		} else if (version2 >= 9) {
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

async function goodmorning(version, apikey, lang = "english") {
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
				.gm(version, apikey, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/gm/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => {
					errors(version, apikey, error, reject, resolve, goodmorning, lang);
				});
		}
	});
	return p2;
}

async function goodnight(version, apikey, lang = "english") {
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
				.gn(version, apikey, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/gn/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => {
					errors(version, apikey, error, reject, resolve, goodnight, lang);
				});
		}
	});
	return p2;
}

async function hello(version, apikey, lang = "english") {
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
				.hello(version, apikey, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			await axios
				.get(`${url}/${version}/public/hello/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => {
					errors(version, apikey, error, reject, resolve, hello, lang);
				});
		}
	});
	return p2;
}

async function kiss(version, apikey) {
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
				.kiss(version, apikey)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/kiss`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) =>
					errors(version, apikey, error, reject, resolve, kiss)
				);
		}
	});
	return p2;
}

async function slap(version, apikey) {
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
				.slap(version, apikey)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/slap`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) =>
					errors(version, apikey, error, reject, resolve, slap)
				);
		}
	});
	return p2;
}

async function sick(version, apikey) {
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
				.sick(version, apikey)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/sick`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) =>
					errors(version, apikey, error, reject, resolve, sick)
				);
		}
	});
	return p2;
}

async function tired(version, apikey) {
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
				.tired(version, apikey)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/tired`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) =>
					errors(version, apikey, error, reject, resolve, tired)
				);
		}
	});
	return p2;
}

async function cry(version, apikey, lang = "english") {
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
				.cry(version, apikey, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/cry/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) => errors(version, apikey, error, reject, resolve, cry));
		}
	});
	return p2;
}

async function laugh(version, apikey) {
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
				.lol(version, apikey)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/laugh`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) =>
					errors(version, apikey, error, reject, resolve, laugh)
				);
		}
	});
	return p2;
}

async function birthday(version, apikey, lang = "english") {
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
				.bday(version, apikey, lang)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/bday/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) =>
					errors(version, apikey, error, reject, resolve, birthday)
				);
		}
	});
	return p2;
}

async function version_check(version) {
	axios
		.get(`${url}/public/version/${version}`)
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

async function apiinfo(apikey) {
	let p2 = new Promise(async (resolve, reject) => {
		axios
			.get(`${url}/public/apiinfo`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
			})
			.then((data) => resolve(data.data))
			.catch((error) => errors(false, apikey, error, reject, resolve, false));
	});
	return p2;
}

async function meme(version, apikey) {
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
				.meme(version, apikey)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/meme`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) =>
					errors(version, apikey, error, reject, resolve, meme)
				);
		}
	});
	return p2;
}

async function cats(version, apikey) {
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
				.cats(version, apikey)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/cats`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => {
					resolve(data.data);
				})
				.catch((error) =>
					errors(version, apikey, error, reject, resolve, cats)
				);
		}
	});
	return p2;
}

async function anime(version, apikey) {
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
				.anime(version, apikey)
				.then((data) => resolve(data))
				.catch((error) => reject(error));
		} else {
			axios
				.get(`${url}/${version}/public/anime`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) =>
					errors(version, apikey, error, reject, resolve, anime)
				);
		}
	});
	return p2;
}

async function api_get(name, version, apikey, lang = "english") {
	let p2 = new Promise(async (resolve, reject) => {
		let listlang = ["gm", 'gn', 'hello', 'cry', 'bday']

		if(!name) return logger.error('Error: a name is required!')

		if(!version) version = latest;
		if (!version.startsWith("v")) version = `v${version}`;
		let version2 = version.replace(/v/g, "");
		

		if(!apikey) return logger.error('api_get is not available for the extended endpoints please provide a api key or add /extended after ram-api.js in the import');

		let url = `https://api.rambot.xyz/${version}/public/${name}`
		if(listlang.includes(name)) url = `${url}/${lang}`
		if(name === 'version') url = `${url}/${version}`

		axios
		.get(url, {
			headers: {
				"Content-Type": "application/json",
				"api-key": apikey,
			},
		})
		.then((data) => resolve(data.data))
		.catch((error) =>
			errors(version, apikey, error, reject, resolve, api_get, lang)
		);


	})

	return p2;


}

async function ram_image(version, apikey) {
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
				.ramimage(version, apikey)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/ram`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) =>
					errors(version, apikey, error, reject, resolve, ram_image)
				);
		}
	});
	return p2;
}
async function nekopara(version, apikey) {
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
				.ramimage(version, apikey)
				.then((data) => resolve(data))
				.catch((err) => reject(err));
		} else {
			axios
				.get(`${url}/${version}/public/ram`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				})
				.then((data) => resolve(data.data))
				.catch((error) =>
					errors(version, apikey, error, reject, resolve, ram_image)
				);
		}
	});
	return p2;
}

async function custom_hello(version, apikey, id) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) {
			apilogger.error(`${version} is no longer supported latest is ${latest}`);
			return reject("Check Console");
		}

		let version2 = version.replace(/v/g, "");

		if (version2 <= 8) return reject(`this is for v9 or higher`);

		if (!id) return reject("ERROR: please provide a id");

		axios
			.get(`${url}/${version}/custom/hello/${id}`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
			})
			.then((data) => resolve(data.data))
			.catch((error) => errors(version, apikey, error, reject, resolve, false));
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

exports.custom = {
	custom_hello,
	custom_hello_create,
	custom_hello_add,
	custom_hello_remove,
};

exports.images = {
	ram_image,
	nekopara
};

exports.reddit = {
	meme,
	cats,
	anime,
};


exports.utils = {
	api_get,
	error,
	ping
	
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

async function custom_hello_add(version, apikey, id, text) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) {
			apilogger.error(`${version} is no longer supported latest is ${latest}`);
			return reject("Check Console");
		}

		let version2 = version.replace(/v/g, "");

		if (version2 <= 8) return reject(`this is for v9 or higher`);

		if (!id) return reject("ERROR: please provide a id");

		axios
			.put(
				`${url}/${version}/custom/hello/${text}/${id}`,
				{},
				{
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				}
			)
			.then((data) => {
				resolve("Completed");
				apilogger.info(`${text} has been added to this ids list`);
			})
			.catch((error) => errors(version, apikey, error, reject, resolve, false));
	});
	return p2;
}

async function custom_hello_remove(version, apikey, id, text) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) {
			apilogger.error(`${version} is no longer supported latest is ${latest}`);
			return reject("Check Console");
		}

		let version2 = version.replace(/v/g, "");

		if (version2 <= 8) return reject(`this is for v9 or higher`);

		if (!id) return reject("ERROR: please provide a id");

		axios
			.delete(`${url}/${version}/custom/hello/${text}/${id}`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
			})
			.then((data) => {
				resolve("Completed");
				apilogger.info(`${text} has been removed to this ids list`);
			})
			.catch((error) => errors(version, apikey, error, reject, resolve, false));
	});
	return p2;
}

async function custom_hello_create(version, apikey, text) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) {
			apilogger.error(`${version} is no longer supported latest is ${latest}`);
			return reject("Check Console");
		}

		let version2 = version.replace(/v/g, "");

		if (version2 <= 8) return reject(`this is for v9 or higher`);

		axios
			.post(
				`${url}/${version}/custom/hello/${text}`,
				{},
				{
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
				}
			)
			.then((data) => {
				resolve("Check Console");
				apilogger.info(
					data.data.id +
						` \n Do Not share this id it can be used to remove or add entries`
				);
			})
			.catch((error) => errors(version, apikey, error, reject, resolve, false));
	});
	return p2;
}

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
