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
