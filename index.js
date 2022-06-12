const { Logger } = require('simply-logger');
const { utils, fun } = require('./code3');
const { ping } = require('./items/ping');

const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);

class APiClient {
	/**
	 * 
	 * @param {String} apikey 
	 * @param {String} version 
	 * @param {String} lang
	 */
	constructor(apikey, version, lang = 'english') {
		if (!apikey) return
		if (!version.startsWith("v")) version = `v${version}`;
		this.apikey = apikey;
		this.version = version;
		this.lang = lang;
	}
	/**
	 * 
	 * @returns 
	 */
	async ping() {
		return await utils.ping().catch(err => { });
	}

}


class Logs {
	constructor(name) {
		let templog = new Logger(name, "America/New_York", 12);

		this.log = templog;
	}
	error(msg) {
		this.log.error(msg);
	}
	info(msg) {
		this.log.info(msg)
	}
	warn(msg) {
		this.log.warn(msg);
	}
}

module.exports = {
	APiClient,
	Logs
}
