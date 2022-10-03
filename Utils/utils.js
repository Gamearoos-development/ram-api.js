const { Logs } = require('../index');
const { ping } = require('../items/ping');

class Utils {
    /**
     * Creates an instance of Utils.
     * @param {String} [name="ram-api.js"]
     * @memberof Utils
     */
    constructor(name = "ram-api.js") {
        this.log = new Logs(name);
        this.apilogs = new Logs("Ram Api");
    }
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
     *
     * @param {String} endpoint
     * @param {String} version
     * @param {Object} [Options={ pro: false, basic: true, api_key: "NULL", lang: "english" }]
     * @return {*} 
     * @memberof Utils
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

module.exports = { Utils }; 