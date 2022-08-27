const { Logger } = require('simply-logger');

const { ping } = require('../items/ping');

const logger = new Logger(`ram-api.js`, "America/New_York", 12);

const apilogger = new Logger("Ram Api", "America/New_York", 12);
var tryagain = "false"

const axios = require("axios");
const { date } = require("better-date.js"); // better date lol
const url = `https://api.rambot.xyz`;

const outdated = ["v0", "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"];
class RamApi {
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
        this.baseURL = `${url}/${this.version}/public`

    }
    /**
     * 
     * @param {String} lang 
     */
    helloAsync(lang = "english") {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/hello/${lang}`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('helloAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    /**
     * 
     * @param {String} lang 
     */
    _8ballAsync(lang = "english") {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/8ball/${lang}`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('_8ballAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    cuddleAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/cuddle`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('cuddleAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    /**
     * 
     * @param {String} lang 
     */
    goodmorningAsync(lang = "english") {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/gm/${lang}`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('goodmorningAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    /**
     * 
     * @param {String} lang 
     */
    goodnightAsync(lang = "english") {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/gn/${lang}`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('goodnightAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };

    hugAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/hug`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('hugAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    kissAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/kiss`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('kissAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    slapAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/slap`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('slapAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    sickAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/sick`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('sickAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    tiredAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/tired`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('tiredAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    /**
    * 
    * @param {String} lang 
    */
    cryAsync(lang = "english") {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/cry/${lang}`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('cryAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    laughAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/laugh`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('laughAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    /**
     * 
     * @param {String} lang 
     * 
     */
    birthdayAsync(lang = "english") {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/lbday/${lang}`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('birthdayAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };

    version_infoAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/version/${this.version}`, {

                baseURL: `${url}/public`
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('version_infoAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    }

    async version_checkAsync() {
        axios
            .get(`${url}/public/version/${this.version}`)
            .then((data) => {
                let ifSupported = data.data.supported;
                let ifOutdated = data.data.outdated;
                let latest = data.data.latest;



                if (ifOutdated) {
                    if (ifSupported == false) {
                        return apilogger.error(
                            `${this.version} is no longer supported latest is ${latest}`
                        );
                    }
                    if (ifSupported == true) {
                        return apilogger.warn(
                            `${this.version} is outdated but still supported! Latest is ${latest}`
                        );
                    }
                } else {
                    apilogger.info(
                        `${this.version} matches ${latest} this version is up to date!`
                    );
                }
            })
            .catch((err) => {
                errors('version_checkAsync', err)

            });
    }
    apiinfoAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/apiinfo`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: `${url}/public`
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('apiinfoAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    ratelimitAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/ratelimit`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('ratelimitAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    memeAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/meme`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('memeAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    catsAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/cats`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('catsAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    animeAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/anime`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('animeAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    ramAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/ram`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('ramAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };
    nekoparaAsync() {
        let p = new Promise(async (resolve, reject) => {
            await axios.get(`/nekopara`, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": this.apikey,
                },
                baseURL: this.baseURL
            }).then(async function (res) {
                resolve(res.data);
            }).catch(async (error) => {

                errors('nekoparaAsync', error)
                reject('Error Check Console for more info!')
            })
        })
        return p;
    };

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


module.exports = { RamApi }; 