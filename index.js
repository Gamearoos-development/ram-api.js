const { Logger } = require('simply-logger');

const { ping } = require('./items/ping');
const { RamApiPro } = require('./Endpoints/pro');
const { RamApiBasic } = require('./Endpoints/basic');
const { RamApi } = require('./Endpoints/normal');
const {RamApiBeta} = require('./Endpoints/beta');
const { Utils } = require('./Utils/utils');


const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);

class Logs {
    /**
     * 
     * @param {String} name 
     */
    constructor(name) {
        let templog = new Logger(name, "America/New_York", 12);

        this.log = templog;
    }
    /**
     * 
     * @param {String} msg 
     */
    error(msg) {
        this.log.error(msg);
    }
    /**
     * 
     * @param {String} msg 
     */
    info(msg) {
        this.log.info(msg)
    }
    /**
     * 
     * @param {String} msg 
     */
    warn(msg) {
        this.log.warn(msg);
    }

}


module.exports = {
    RamApiPro,
    Logs,
    RamApiBasic,
    RamApi,
    Utils,
    RamApiBeta
}