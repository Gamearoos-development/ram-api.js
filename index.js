const axios = require("axios");
const { createLogger, format, transports, level } = require("winston");
const { consoleFormat } = require("winston-console-format");

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
exports.apihug = async function (version) {
	if (!version.startsWith("v")) version = `v${version}`;
	let p = new Promise(async (resolve, reject) => {
		await axios
			.get(`/hug`, { baseURL: `https://ram.gamearoo.top/api/${version}` })
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&
					logger.error(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p;
};

exports.apigm = async function (version) {
	if (!version.startsWith("v")) version = `v${version}`;
	let p2 = new Promise(async (resolve, reject) => {
		await axios
			.get(`/gm`, { baseURL: `https://ram.gamearoo.top/api/${version}` })
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&
					logger.error(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p2;
};

exports.apign = async function (version) {
	if (!version.startsWith("v")) version = `v${version}`;
	let p3 = new Promise(async (resolve, reject) => {
		await axios
			.get(`/gn`, { baseURL: `https://ram.gamearoo.top/api/${version}` })
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&
					logger.error(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.apislap = async function (version, user, user2) {
	if (!user || !user2) return logger.error(`You must provide the users names`);
	if (!version.startsWith("v")) version = `v${version}`;
	let p3 = new Promise(async (resolve, reject) => {
		await axios
			.get(`/slap`, { baseURL: `https://ram.gamearoo.top/api/${version}` })
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
					logger.error(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.apikiss = async function (version) {
	if (!version.startsWith("v")) version = `v${version}`;
	let p3 = new Promise(async (resolve, reject) => {
		await axios
			.get(`/kiss`, { baseURL: `https://ram.gamearoo.top/api/${version}` })
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&
					logger.error(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};
exports.api8ball = async function (version) {
	if (!version.startsWith("v")) version = `v${version}`;
	let p3 = new Promise(async (resolve, reject) => {
		await axios
			.get(`/8ball`, { baseURL: `https://ram.gamearoo.top/api/${version}` })
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&
					logger.error(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.apihello = async function (version) {
	if (!version.startsWith("v")) version = `v${version}`;
	let p3 = new Promise(async (resolve, reject) => {
		await axios
			.get(`/hello`, { baseURL: `https://ram.gamearoo.top/api/${version}` })
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&
					logger.error(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};
exports.apicuddle = async function (version) {
	if (!version.startsWith("v")) version = `v${version}`;
	let p3 = new Promise(async (resolve, reject) => {
		await axios
			.get(`/cuddle`, { baseURL: `https://ram.gamearoo.top/api/${version}` })
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&
					logger.error(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};
exports.custom = async function (version, endpoint) {
	if (!version.startsWith("v")) version = `v${version}`;
	if (!endpoint.startsWith("/")) endpoint = `/${endpoint}`;
	let p3 = new Promise(async (resolve, reject) => {
		await axios
			.get(endpoint, { baseURL: `https://ram.gamearoo.top/api/${version}` })
			.then(async function (response) {
				resolve(response.data);
			})
			.catch((error) => {
				return (
					// console.log(error) &&
					logger.error(`An error has happened ${error.response.statusText}`)
				);
			});
	});

	return p3;
};

exports.apiversion = async function (version) {
	if (!version.startsWith("v")) version = `v${version}`;
	await axios
		.get(`/version`, { baseURL: `https://ram.gamearoo.top/api/${version}` })
		.then(async function (response) {
			let apiversion = response.data.version;
			let ifSupported = response.data.supported;
			let ifOutdated = response.data.outdated;
			let latest = response.data.latest;

			if (ifOutdated) {
				if (!ifSupported) {
					return logger.error(
						`${apiversion} is No longer supported the latest version is ${latest}`
					);
				} else {
					return logger.warn(
						`${apiversion} is outdated but still supported the latest version is ${latest}`
					);
				}
			} else {
				return logger.info(`${apiversion} Is the latest version`);
			}
		})
		.catch((error) => {
			return (
				// console.log(error) &&
				logger.error(`An error has happened ${error.response.statusText}`)
			);
		});
};
