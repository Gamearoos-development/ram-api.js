const axios = require("axios");
const { createLogger, format, transports, level } = require("winston");
const { consoleFormat } = require("winston-console-format");
const outdated = ["v0", "v1", "v2", "v3", "v4", "v5", "v6"];
const latest = "v9";
const url = `http://localhost`;

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

var tryagain = false;

async function hug(version, apikey) {
	let p = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;

		if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("A api key is required");

		let version2 = version.replace(/v/g, "");

		if (version2 <= 8) {
			logger.warn(
				"Your using a older version of ram api reverting to old code"
			);
			await axios
				.get(`/hug`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `${url}/${version}`,
				})
				.then(async function (response) {
					resolve(response.data);
				})
				.catch((error) => {
					if (!error.response.statusText) return reject(error);
					switch (error.response.statusText) {
						case "Too Many Requests":
							let err = {
								code: 429,
								msg: "Ram api rate limit reached",
							};
							if (!tryagain) {
								logger.warn(`Ram api limit reached retrying in 9 seconds!`);
								setTimeout(() => {
									tryagain = true;
									hug(version, apikey)
										.then((data) => resolve(data))
										.catch((err) => reject(err));
								}, 9000);
							} else {
								tryagain = false;
								reject(err);
							}
							break;
						default:
							reject(`Error has happened: ${error.response.statusText}`);
							break;
					}

					return;
				});
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
					if (!error.response.statusText) return reject(error);
					switch (error.response.statusText) {
						case "Too Many Requests":
							let err = {
								code: 429,
								msg: "Ram api rate limit reached",
							};
							if (!tryagain) {
								logger.warn(`Ram api limit reached retrying in 9 seconds!`);
								setTimeout(() => {
									tryagain = true;
									hug(version, apikey)
										.then((data) => resolve(data))
										.catch((err) => reject(err));
								}, 9000);
							} else {
								tryagain = false;
								reject(err);
							}
							break;
						default:
							reject(`Error has happened: ${error.response.statusText}`);
							break;
					}

					return;
				});
		}
	});

	return p;
}

async function apiinfo(apikey) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		// let version2 = version.replace(/v/g, "");

		// if (version2 < 6) return reject(`This requires ${latest} or higher to use`);
		// if (outdated.includes(version)) return reject(`This version is outdated!`);

		if (!apikey) return reject("A api key is required");

		await axios
			.get("/apiinfo", {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
				baseURL: `${url}/public`,
			})
			.then((response) => {
				resolve(response.data);
			})
			.catch((err) => {
				if (!error.response.statusText) return reject(error);
				switch (error.response.statusText) {
					case "Too Many Requests":
						let err = {
							code: 429,
							msg: "Ram api rate limit reached",
						};
						if (!tryagain) {
							logger.warn(`Ram api limit reached retrying in 9 seconds!`);
							setTimeout(() => {
								tryagain = true;
								apiinfo(apikey)
									.then((data) => resolve(data))
									.catch((err) => reject(err));
							}, 9000);
						} else {
							tryagain = false;
							reject(err);
						}
						break;
					default:
						reject(`Error has happened: ${error.response.statusText}`);
						break;
				}

				return;
			});
	});
	return p2;
}

async function _8ball(version, apikey, lang = "english") {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		let version2 = version.replace(/v/g, "");

		if (version2 <= 8) {
			logger.warn(
				"Your using a older version of ram api reverting to old code"
			);
			await axios
				.get(`/8ball/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `${url}/${version}`,
				})
				.then((response) => {
					resolve(response.data);
				})
				.catch((error) => {
					if (!error.response.statusText) return reject(error);
					switch (error.response.statusText) {
						case "Too Many Requests":
							let err = {
								code: 429,
								msg: "Ram api rate limit reached",
							};
							if (!tryagain) {
								logger.warn(`Ram api limit reached retrying in 9 seconds!`);
								setTimeout(() => {
									tryagain = true;
									_8ball(version, apikey)
										.then((data) => resolve(data))
										.catch((err) => reject(err));
								}, 9000);
							} else {
								tryagain = false;
								reject(err);
							}
							break;
						default:
							reject(`Error has happened: ${error.response.statusText}`);
							break;
					}

					return;
				});
		} else if (version2 >= 9) {
			await axios
				.get(`/8ball/${lang}`, {
					headers: {
						"Content-Type": "application/json",
						"api-key": apikey,
					},
					baseURL: `${url}/${version}/public`,
				})
				.then((response) => resolve(response.data))
				.catch((error) => {
					if (!error.response.statusText) return reject(error);
					switch (error.response.statusText) {
						case "Too Many Requests":
							let err = {
								code: 429,
								msg: "Ram api rate limit reached",
							};
							if (!tryagain) {
								logger.warn(`Ram api limit reached retrying in 9 seconds!`);
								setTimeout(() => {
									tryagain = true;
									_8abll(version, apikey)
										.then((data) => resolve(data))
										.catch((err) => reject(err));
								}, 9000);
							} else {
								tryagain = false;
								reject(err);
							}
							break;
						default:
							reject(`Error has happened: ${error.response.statusText}`);
							break;
					}

					return;
				});
		}
	});
	return p2;
}

exports.get = {
	hug,
	apiinfo,
	_8ball,
};

async function custom_hello_create(version, apikey, text) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		let version2 = version.replace(/v/g, "");

		if (version2 <= 8) return reject("Use v9 or higher for this endpoint");
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
			.then((response) => {
				let { id } = response.data;

				logger.info(
					`Note: This is you privet id it is required to call your custom msg \n ${id}`
				);

				resolve("Completed Id sent to console!");
			})
			.catch((error) => {
				if (!error.response.statusText) return reject(error);
				switch (error.response.statusText) {
					case "Too Many Requests":
						let err = {
							code: 429,
							msg: "Ram api rate limit reached",
						};
						if (!tryagain) {
							logger.warn(`Ram api limit reached retrying in 9 seconds!`);
							setTimeout(() => {
								tryagain = true;
								custom_hello_create(version, apikey, text)
									.then((data) => resolve(data))
									.catch((err) => reject(err));
							}, 9000);
						} else {
							tryagain = false;
							reject(err);
						}
						break;
					default:
						reject(`Error has happened: ${error.response.statusText}`);
						break;
				}

				return;
			});
	});
	return p2;
}

exports.post = {
	custom_hello_create,
};

async function custom_hello_add(version, apikey, text, id) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		let version2 = version.replace(/v/g, "");
		if (version2 <= 8) return reject("Use v9 or higher");
		await axios
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
			.then((response) => {
				resolve("Completed");
			})
			.catch((error) => {
				if (!error.response.statusText) return reject(error);

				switch (error.response.statusText) {
					case "Too Many Requests":
						let err = {
							code: 429,
							msg: "Ram api rate limit reached",
						};
						if (!tryagain) {
							logger.warn(`Ram api limit reached retrying in 9 seconds!`);
							setTimeout(() => {
								tryagain = true;
								custom_hello_add(version, apikey, text, id)
									.then((data) => resolve(data))
									.catch((err) => reject(err));
							}, 9000);
						} else {
							tryagain = false;
							reject(err);
						}
						break;
					case "Bad Request":
						let err2;
						if (
							error.response.data.msg === `${text} is already in this array`
						) {
							err2 = {
								code: 409,
								msg: `${text} is already attached to the provided id`,
							};
						} else {
							err2 = {
								code: 400,
								msg: `Ram api returned bad request`,
							};
						}

						reject(err2);

						break;

					default:
						reject(`Error has happened: ${error.response.statusText}`);
						break;
				}

				return;
			});
	});
	return p2;
}

exports.put = {
	custom_hello_add,
};

async function custom_hello_remove(version, apikey, text, id) {
	let p2 = new Promise(async (resolve, reject) => {
		if (!version.startsWith("v")) version = `v${version}`;
		let version2 = version.replace(/v/g, "");
		if (version2 <= 8) return reject("use v9 or higher");

		await axios
			.delete(`${url}/${version}/custom/hello/${text}/${id}`, {
				headers: {
					"Content-Type": "application/json",
					"api-key": apikey,
				},
			})
			.then((data) => {
				let { msg, warning } = data.data;

				if (warning) {
					resolve(warning);
				} else {
					resolve(msg);
				}
			})
			.catch((error) => {
				if (!error.response.statusText) return reject(error);
				switch (error.response.statusText) {
					case "I'm a Teapot":
						let err3 = {
							code: "I'm a Teapot",
							msg: "The api refuses to attempt to brew coffee with a teapot.",
						};
						reject(err3);
						break;
					case "Too Many Requests":
						let err = {
							code: 429,
							msg: "Ram api rate limit reached",
						};
						if (!tryagain) {
							logger.warn(`Ram api limit reached retrying in 9 seconds!`);
							setTimeout(() => {
								tryagain = true;
								custom_hello_remove(version, apikey, text, id)
									.then((data) => resolve(data))
									.catch((err) => reject(err));
							}, 9000);
						} else {
							tryagain = false;
							reject(err);
						}
						break;
					default:
						reject(`Error has happened: ${error.response.statusText}`);
						break;
				}

				return;
			});
	});
	return p2;
}

exports.delete = {
	custom_hello_remove,
};
