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
	 * 
	 */
	constructor(apikey, version) {
		if (!apikey) return
		if (!version.startsWith("v")) version = `v${version}`;
		this.apikey = apikey;
		this.version = version;

	}
	/**
	 * 
	 * @returns 
	 */
	async ping() {
		return await utils.ping().catch(err => { });
	}
	async bday(lang = "english") {
		return await fun.birthday(this.version, this.apikey, lang);
	}
	async cry(lang = "english") {
		return await fun.cry(this.version, this.apikey, lang);
	}
	async cuddle() {
		return await fun.cuddle(this.version, this.apikey);
	}
	async gm(lang = "english") {
		return await fun.goodmorning(this.version, this.apikey, lang);
	}
	async gn(lang = "english") {
		return await fun.goodnight(this.version, this.apikey, lang);
	}
	async hello(lang = "english") {
		return await fun.hello(this.version, this.apikey, lang)
	}
	async hug() {
		return await fun.hug(this.version, this.apikey);
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
