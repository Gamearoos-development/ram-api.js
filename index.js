const { Logger } = require('simply-logger');
const { utils, fun, info } = require('./oldcode2');
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
	async kiss() {
		return await fun.kiss(this.version, this.apikey)
	}
	async laugh() {
		return await fun.laugh(this.version, this.apikey)
	}
	async sick() {
		return await fun.sick(this.version, this.apikey);
	}
	async slap() {
		return await fun.slap(this.version, this.apikey);
	}
	async tired() {
		return await fun.tired(this.version, this.apikey);
	}
	async version_check() {
		await info.version_check(this.version).catch(err => logger.error(err));

		return;
	}
	async api_info() {
		return await info.apiinfo(this.apikey);
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
