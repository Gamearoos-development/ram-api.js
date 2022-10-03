const { Logger } = require('simply-logger');



const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);

class Utils {

    constructor() {

    }
    /**
     * 
     * @returns 
     */
    async pingAsync() {
        let dat = Date.now();
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/hello/${lang}`, {
                headers: {
                    "Content-Type": "application/json",

                },
                baseURL: `https://api.rambot.xyz/basic/v11`
            }).then(async function (res) {
                let data = {
                    ping: `${Date.now() - dat}ms`,
                    time: time,
                };

                resolve(data);
            }).catch(async (error) => {
                reject('Ping Failed! ' + error)
            })
        })
        return p;
    }
    /**
     * 
     * @param {String} endpoint 
     * @param {String} version 
     * @param {Object} Options = { pro: false, basic: true, api_key: "NULL", lang: "english" }
     * @returns 
     */
    async customAsync(endpoint, version, Options = { pro: false, basic: true, api_key: "NULL", lang: "english" }) {
        let p = new Promise(async (resolve, reject) => {



            let url = `/${version}/${endpoint}/`

            if (Options.pro) url = `/pro${url}`;
            if (Options.basic) url = `/basic${url}`

            if (Options.lang) url = `${url}/${lang}`

            await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": Options.api_key

                },
                baseURL: `https://api.rambot.xyz/`
            }).then(async function (res) {

                resolve(res.data);
            }).catch(async (error) => {
                reject('Custom Failed **note** if error is related to a invalid endpoint check api.rambot.xyz for endpoint names! ' + error);

            })
        })
        return p;
    }
}

async function errors(name, error) {
    if (error.response) {
        let err = `Status: ${error.response.status} | Error: ${error.response.statusText}`;
        apilogger.error(err);
        if (error.response.data.error.message) logger.error(`Ram Api Ran into a error while running ${name}. The problem is: ${error.response.data.error.message}.`)
    }
    else {
        console.log(error)
        logger.error(`error running ${name}. Please report to the developers the error logged into your console!`)
    }
}

module.exports = { Utils };
