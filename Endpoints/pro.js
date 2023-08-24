const { Logger } = require("simply-logger");

const { ping } = require("../items/ping");

const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);
var tryagain = "false";

const axios = require("axios");
const { date } = require("better-date.js"); // better date lol
const url = `https://api.rambot.xyz`;

const outdated = ["v0", "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"];
const publicCheck = ["v10", "v11", "v12"]
class RamApiPro {
    /**
     *
     * @param {String} apikey
     * @param {String} version
     *
     */
    constructor(apikey, version) {
        if (!apikey) return;
        if (!version.startsWith("v")) version = `v${version}`;
        this.apikey = apikey;
        this.version = version;

        this.newBase = `${url}/pro/${this.version}`

        if (publicCheck.includes(this.version)) {
            this.baseURL = `${url}/pro/${this.version}/public`;

        } else {
            this.baseURL = `${url}/pro/${this.version}`;

        }
    }
    /**
   * 
   * @param {String} suggestion 
   * @param {String} user 
   * @returns 
   */
    suggestionAsync(suggestion, user = "anonymous") {

        let p = new Promise(async (resolve, reject) => {
            if (!suggestion) return reject('Suggestion is needed!')
            await axios
                .post(`/suggestion/${suggestion}?requestedBy=${user}`, {}, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("randomNumberAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    /**
   * 
   * @param {Number} min 
   * @param {Number} max 
   * @returns 
   */
    randomNumberAsync(min, max) {
        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/randomNumber?min=${min}?max=${max}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("randomNumberAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    /**
     *
     * @param {String} lang
     */
    helloAsync(lang = "english") {
        let p = new Promise(async (resolve, reject) => {

            if (publicCheck.includes(this.version)) {
                lang = '/${lang}'
            } else {
                lang = '?lang=${lang}'
            }


            await axios
                .get(`/hello${lang}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("helloAsync", error);
                    reject("Error Check Console for more info!");
                });



        });
        return p;
    }
    /**
     *
     * @param {String} lang
     */
    _8ballAsync(lang = "english") {
        let p = new Promise(async (resolve, reject) => {
            if (publicCheck.includes(this.version)) {
                lang = '/${lang}'
            } else {
                lang = '?lang=${lang}'
            }
            await axios
                .get(`/8ball${lang}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("_8ballAsync", error);
                    reject("Error Check Console for more info!");
                });

        });
        return p;
    }
    cuddleAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/cuddle`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("cuddleAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    /**
     *
     * @param {String} lang
     */
    goodmorningAsync(lang = "english") {
        let url1 = 'gm'
        if (publicCheck.includes(this.version)) {
            lang = '/${lang}'
        } else {
            lang = '?lang=${lang}'
            url1 = 'goodMorning'
        }
        let p = new Promise(async (resolve, reject) => {

            await axios
                .get(`/${url1}${lang}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("goodmorningAsync", error);
                    reject("Error Check Console for more info!");
                });


        });
        return p;
    }
    /**
     *
     * @param {String} lang
     */
    goodnightAsync(lang = "english") {
        let url1 = 'gn'
        if (publicCheck.includes(this.version)) {
            lang = '/${lang}'
        } else {
            lang = '?lang=${lang}'
            url1 = 'goodNight'
        }
        let p = new Promise(async (resolve, reject) => {

            await axios
                .get(`/${url1}${lang}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("goodnightAsync", error);
                    reject("Error Check Console for more info!");
                });
        })

        return p;
    }


    hugAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/hug`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("hugAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    kissAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/kiss`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("kissAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    /**
   * 
   * @param {String} user1 
   * @param {String} user2 
   * @returns 
   */
    slapAsync(user1, user2) {
        let p = new Promise(async (resolve, reject) => {
            let url4;
            if (publicCheck.includes(this.version)) {
                url4 = "/slap"
            } else {
                url4 = `/slap?user1=${user1}&user2=${user2}`
            }
            await axios
                .get(url4, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("slapAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    sickAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/sick`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("sickAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    tiredAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/tired`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("tiredAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    /**
     *
     * @param {String} lang
     */
    cryAsync(lang = "english") {

        if (publicCheck.includes(this.version)) {
            lang = '/${lang}'
        } else {
            lang = '?lang=${lang}'
        }


        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/cry${lang}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("cryAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    laughAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/laugh`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("laughAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    /**
     *
     * @param {String} lang
     *
     */
    birthdayAsync(lang = "english") {

        if (publicCheck.includes(this.version)) {
            lang = '/${lang}'
        } else {
            lang = '?lang=${lang}'
        }


        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/bday${lang}`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("birthdayAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }

    version_infoAsync() {

        if (publicCheck.includes(this.version)) {

            let p = new Promise(async (resolve, reject) => {
                await axios
                    .get(`${url}/public/version/${this.version}`)
                    .then(async function (res) {
                        resolve(res.data);
                    })
                    .catch(async (error) => {
                        errors("version_infoAsync", error);
                        reject("Error Check Console for more info!");
                    });
            });
            return p;
        } else {
            let p = new Promise(async (resolve, reject) => {
                await axios
                    .get(`/versionCheck`, {
                        headers: {
                            "Content-Type": "application/json",
                            "api-key": this.apikey,
                        },
                        baseURL: this.baseURL,
                    })
                    .then(async function (res) {
                        resolve(res.data);
                    })
                    .catch(async (error) => {
                        errors("version_infoAsync", error);
                        reject("Error Check Console for more info!");
                    });
            });
            return p;
        }
    }


    async version_checkAsync() {

        if (publicCheck.includes(this.version)) {
            axios
                .get(`${url}/public/version/${this.version}`)
                .then((data) => {
                    let ifSupported = data.data.supported;
                    let ifOutdated = data.data.outdated;
                    let latest = data.data.latest;

                    if (ifOutdated) {
                        if (ifSupported == false) {
                            return apilogger.error(
                                `${this.version} is no longer supported latest is ${latest} `
                            );
                        }
                        if (ifSupported == true) {
                            return apilogger.warn(
                                `${this.version} is outdated but still supported! Latest is ${latest} `
                            );
                        }
                    } else {
                        apilogger.info(
                            `${this.version} matches ${latest} this version is up to date!`
                        );
                    }
                })
                .catch((err) => {
                    errors("version_checkAsync", err);
                });
        } else {
            axios
                .get("/versionCheck", {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then((data) => {
                    let ifSupported = data.data.supported;
                    let ifOutdated = data.data.outdated;
                    let latest = data.data.latest;

                    if (ifOutdated) {
                        if (ifSupported == false) {
                            return apilogger.error(
                                `${this.version} is no longer supported latest is ${latest} `
                            );
                        }
                        if (ifSupported == true) {
                            return apilogger.warn(
                                `${this.version} is outdated but still supported! Latest is ${latest} `
                            );
                        }
                    } else {
                        apilogger.info(
                            `${this.version} matches ${latest} this version is up to date!`
                        );
                    }
                })
                .catch((err) => {
                    errors("version_checkAsync", err);
                });
        }
    }

    ratelimitAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/ratelimit`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("ratelimitAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }

    ramAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/ram`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("ramAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    nekoparaAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/nekopara`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("nekoparaAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
    rpsAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios
                .get(`/rps`, {
                    headers: {
                        "Content-Type": "application/json",
                        "api-key": this.apikey,
                    },
                    baseURL: this.baseURL,
                })
                .then(async function (res) {
                    resolve(res.data);
                })
                .catch(async (error) => {
                    errors("rpsAsync", error);
                    reject("Error Check Console for more info!");
                });
        });
        return p;
    }
}

async function errors(name, error) {
    if (error.response) {
        let err = `Status: ${error.response.status} | Error: ${error.response.statusText}`;
        apilogger.error(err);
        if (error.response.data.error.message)
            logger.error(
                `Ram Api Ran into a error while running ${name}. The problem is: ${error.response.data.error.message}.`
            );
    } else {
        console.log(error);
        logger.error(
            `error running ${name}. Please report to the developers the error logged into your console!`
        );
    }
}

module.exports = { RamApiPro };
