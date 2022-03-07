const axios = require("axios");
const { createLogger, format, transports, level } = require("winston");
const { consoleFormat } = require("winston-console-format");
const outdated = ["v0", "v1", "v2", "v3", "v4"];
const latest = "v7";

const logger = createLogger({
	level: "silly",
	format: format.combine(
		format.timestamp(),
		format.ms(),
		format.errors({ stack: true }),
		format.splat(),
		format.json()
	),
	defaultMeta: { service: "Test" },
	transports: [
		new transports.Console({
			format: format.combine(
				format.colorize({ all: true }),
				format.padLevels(),
				consoleFormat({
					showMeta: true,
					metaStrip: ["timestamp", "service"],
					inspectOptions: {
						depth: Infinity,
						colors: true,
						maxArrayLength: Infinity,
						breakLength: 120,
						compact: Infinity,
					},
				})
			),
		}),
	],
});

exports.hug = async function (version, apikey) {
	let p = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;

		if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/hug`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&
					logger.error(`An error has happened ${error.response.statusText}`) &&
					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p;
};

exports.apihug = async function (version, apikey) {
	let p = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		logger.warn("apihug is deprecated! use hug instead!");

		if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/hug`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&
					logger.error(`An error has happened ${error.response.statusText}`) &&
					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p;
};

exports.getinfo = async function (version, apikey) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		let version2 = version.replace(/v/g, "");

		if (version2 < 6) return reject(`This requires ${latest} or higher to use`);
		if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("A api key is required");

		await axios
			.get("/apiinfo", {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				return reject(`An error has happened ${err.response.statusText}`);
			});
	});
	return p2;
};

exports.apigetinfo = async function (version, apikey) {
	let p2 = new Promise(async (resolve, reject) => {
		logger.warn("apigetinfo is deprecated! use getinfo instead!");
		if (!version.startsWith("v")) version = `v${version}`;
		let version2 = version.replace(/v/g, "");

		if (version2 < 6) return reject(`This requires ${latest} or higher to use`);
		if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("A api key is required");

		await axios
			.get("/apiinfo", {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				return reject(`An error has happened ${err.response.statusText}`);
			});
	});
	return p2;
};

exports.ramimage = async function (version, apikey) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		let version2 = version.replace(/v/g, "");

		if (version2 < 6) return reject(`This requires v6 or higher to use`);
		if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("A api key is required");

		await axios
			.get("/ram", {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then((response) => {
				resolve(response.data.url);
			})
			.catch((err) => {
				return reject(`An error has happened ${err.response.statusText}`);
			});
	});
	return p2;
};

exports.apiramimage = async function (version, apikey) {
	let p2 = new Promise(async (resolve, reject) => {
		logger.warn("apiramimage is deprecated! use ramimage instead!");
		if (!version.startsWith("v")) version = `v${version}`;
		let version2 = version.replace(/v/g, "");

		if (version2 < 6) return reject(`This requires ${latest} or higher to use`);
		if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("A api key is required");

		await axios
			.get("/ram", {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then((response) => {
				resolve(response.data.url);
			})
			.catch((err) => {
				return reject(`An error has happened ${err.response.statusText}`);
			});
	});
	return p2;
};
exports.gm = async function (version, apikey, lang) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		let version2 = version.replace(/v/g, "");

		if (!lang) lang = "english";

		if (version2 >= 7) {
			await axios
				.get(`/gm/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		} else {
			await axios
				.get(`/gm`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		}
	});

	return p2;
};

exports.apigm = async function (version, apikey) {
	let p2 = new Promise(async (resolve, reject) => {
		logger.warn("apigm is deprecated! use gm instead!");
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/gm`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				if (response.data.error)
					return reject(`Use gm(apiv, apikey, lang) instead!`);
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p2;
};

exports.gn = async function (version, apikey, lang) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		let version2 = version.replace(/v/g, "");

		if (!lang) lang = "english";

		if (version2 >= 7) {
			await axios
				.get(`/gn/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		} else {
			await axios
				.get(`/gn`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		}
	});

	return p3;
};

exports.apign = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		logger.warn("apign is deprecated! use gn instead!");
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/gn`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				if (response.data.error)
					return reject(`Use gn(apiv, apikey, lang) instead!`);
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.slap = async function (version, apikey, lang) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required!");

		if (!lang) lang = "english";

		let version2 = version.replace(/v/g, "");

		if (version2 >= 7) {
			await axios
				.get(`/slap/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					let data = response.data;
					resolve(data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		} else {
			await axios
				.get(`/slap`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					let data = response.data;
					resolve(data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		}
	});

	return p3;
};

exports.apislap = async function (version, apikey, user, user2) {
	let p3 = new Promise(async (resolve, reject) => {
		logger.warn(
			"apislap is deprecated and only works for v6 and under! use slap instead!"
		);
		if (!user || !user2) return reject(`You must provide the users names`);
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required!");

		let version2 = version.replace(/v/g, "");
		if (version2 >= 7)
			return reject("use slap as slap has changed in v7 or use v6 instead");

		await axios
			.get(`/slap`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				let restext = response.data.text;
				let restext2 = response.data.text2;
				let restext3 = response.data.text3;
				let restext4 = response.data.text4;
				let resurl = response.data.url;

				let text = `${user} ${restext} ${user2}`;
				if (restext2 !== "NULL")
					text = `${user} ${restext} ${user2} ${restext2} ${user2} ${restext4} ${user} ${restext3}`;

				let data = { url: resurl, text: text };
				resolve(data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.kiss = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/kiss`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.apikiss = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		logger.warn("apikiss is deprecated! use kiss instead!");
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/kiss`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports._8ball = async function (version, apikey, lang) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");
		if (!lang) lang = "english";

		let version2 = version.replace(/v/g, "");

		if (version2 >= 7) {
			await axios
				.get(`/8ball/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		} else {
			await axios
				.get(`/8ball`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		}
	});

	return p3;
};

exports.api8ball = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		logger.warn("api8ball is deprecated! use _8ball instead!");

		await axios
			.get(`/8ball`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				if (response.data.error)
					return reject(`Use _8ball(apiv, apikey, lang) instead!`);
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.hello = async function (version, apikey, lang) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		let version2 = version.replace(/v/g, "");
		if (!lang) lang = "english";
		if (version2 >= 7) {
			await axios
				.get(`/hello/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		} else {
			await axios
				.get(`/hello`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		}
	});

	return p3;
};

exports.apihello = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		logger.warn("apihello is deprecated! use hello instead!");
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/hello`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				if (response.data.error)
					return reject(`Use bday(apiv, apikey, lang) instead!`);
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};
exports.cuddle = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/cuddle`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};
exports.apicuddle = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		logger.warn("apicuddle is deprecated! use cuddle instead!");
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/cuddle`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};
exports.tired = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/tired`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};
exports.apitired = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		logger.warn("apitired is deprecated! use tired instead!");
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/tired`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};
exports.sick = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/sick`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};
exports.apisick = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		logger.warn("apisick is deprecated! use sick instead!");
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/sick`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.meme = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/meme`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.apimeme = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		logger.warn("apimeme is deprecated! use meme instead!");
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		if (!apikey) return reject("A api key is required");

		await axios
			.get(`/meme`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.consoleerror = async function (err) {
	logger.error(err);
};

exports.consolewarn = async function (warn) {
	logger.warn(warn);
};

exports.consoleinfo = async function (info) {
	logger.info(info);
};

exports.executeconsole = async function (msg, iserror, iswarnning) {
	logger.warn(
		"executeconsole is deprecated! use consoleinfo(info), consoleerror(error), or consolewarn(warn) instead"
	);
	if (iserror) {
		logger.error(msg);
	} else if (iswarnning) {
		logger.warn(msg);
	} else {
		logger.info(msg);
	}
};

exports.cry = async function (version, apikey, lang) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("An api key is required");

		if (!lang) lang = "english";

		let version2 = version.replace(/v/g, "");

		if (version2 >= 7) {
			await axios
				.get(`/cry/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		} else {
			await axios
				.get(`/cry`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return (
						// console.log(error) &&

						reject(`An error has happened ${error.response.statusText}`)
					);
				});
		}
	});

	return p3;
};

exports.apicry = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		logger.warn("apicry is deprecated! use cry instead!");
		if (!version.startsWith("v")) version = `v${version}`;
		if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("An api key is required");

		await axios
			.get(`/cry`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				if (response.data.error)
					return reject(`Use cry(apiv, apikey, lang) instead!`);
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&

					reject(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.lol = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;

		if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("An api key is required");

		await axios
			.get(`/laugh`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return reject(`An error has happened ${error.response.statusText}`);
			});
	});

	return p3;
};

exports.apilol = async function (version, apikey) {
	let p3 = new Promise(async (resolve, reject) => {
		logger.warn("apilol is deprecated! use lol instead");
		if (!version.startsWith("v")) version = `v${version}`;

		if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("An api key is required");

		await axios
			.get(`/laugh`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return reject(`An error has happened ${error.response.statusText}`);
			});
	});

	return p3;
};

exports.bday = async function (version, apikey, lang) {
	let p4 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;

		if (outdated.includes(version)) return reject(`This version is outdated!`);
		let version2 = version.replace(/v/g, "");

		if (version2 < 5) return reject(`This requires ${latest} or higher to use`);

		if (!apikey) return reject("An api key is required");

		if (!lang) lang = "english";

		if (version2 >= 7) {
			await axios
				.get(`/bday/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return reject(`An error has happened ${error.response.statusText}`);
				});
		} else {
			await axios
				.get(`/bday`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `https://api.rambot.xyz/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					return reject(`An error has happened ${error.response.statusText}`);
				});
		}
	});
	return p4;
};

exports.apibday = async function (version, apikey) {
	let p4 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		logger.warn("apibday is deprecated! change to bday");
		if (outdated.includes(version)) return reject(`This version is outdated!`);
		let version2 = version.replace(/v/g, "");

		if (version2 < 5) return reject(`This requires ${latest} or higher to use`);

		if (!apikey) return reject("An api key is required");

		await axios
			.get(`/bday`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				if (response.data.error)
					return reject(`Use bday(apiv, apikey, lang) instead!`);
				resolve(response.data);
			})
			.catch((error) => {
				return reject(`An error has happened ${error.response.statusText}`);
			});
	});
	return p4;
};

exports.versioncheck = async function (version) {
	if (!version.startsWith("v")) version = `v${version}`;

	let p3 = new Promise(async (resolve, reject) => {
		await axios
			.get(`/version/${version}`, {
				headers: {
					"Content-Type": "application/json",
				},
				baseURL: `https://api.rambot.xyz`,
			})
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return reject(`An error has happened ${error.response.statusText}`);
			});
	});

	return p3;
};

exports.apiversioncheck = async function (version) {
	if (!version.startsWith("v")) version = `v${version}`;
	logger.error(
		"apiversioncheck is deprecated and no longer works! use versioncheck instead!  "
	);
	let p3 = new Promise(async (resolve, reject) => {
		await axios
			.get(`/version`, {
				headers: {
					"Content-Type": "application/json",
				},
				baseURL: `https://api.rambot.xyz/${version}`,
			})
			.then(async function (response) {
				reject(
					`An error has happened ${response.data.error} \n to fix this use versioncheck`
				);
			})
			.catch((error) => {
				return reject(`An error has happened ${error.response.statusText}`);
			});
	});

	return p3;
};
