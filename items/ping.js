module.exports = { ping };

async function ping() {
    let dat = Date.now();

    let p2 = new Promise(async (resolve, reject) => {
        await axios
            .get(`/version/v10`, {
                headers: {
                    "Content-Type": "application/json",
                },
                baseURL: `${url}/public`,
            })
            .then(async function (response) {
                let data = {
                    ping: `${Date.now() - dat}ms`,
                    time: time,
                };

                resolve(data);
            })
            .catch((error) => {
                errors(version, apikey, error, reject, resolve, hug);
            });
    })
    return p2;
};

