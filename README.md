# ram-api.js

a npm module to connect to ram api easier

## About this package

We understand using ram api can be hard as it has alot this package calls the api for you however this wont bypass the ratelimit youll still see the ratelimit error

## Install

install axios `npm i axios` or `yarn add axios`

install the logs `npm i winston-console-format winston ` or `yarn add winston-console-format winston `

`npm i ram-api.js` or `yarn add ram-api.js`

## Update to v4.0.0

remove the code for any custom connections

# change apiversion check

```javascript
const apikey = 'apikey'
(apiv) to (apiv, apikey)

check example for more info

apiversion to apiversioncheck(apiv).then(data => {
	//code here
}).then(err => {
	//err code here
})


```

for a api key join the discord and go to #request-api-keys https://discord.gamearoodev.com

### Example

```javascript
const ramapi = require("ram-api");
const apiv = "v4"; //v2 and up are available ram api versions note versions
const apikey = "apikey"; //ask for a key by contacting support

//! note ram api has a 5 calls per 5 seconds

ramapi.executeconsole("Online", false, false); // msg to log, iferror, ifwarning

ramapi
	.apiversioncheck(apiv)
	.then((data) => {
		let apiversion = data.version;
		let ifSupported = data.supported;
		let ifOutdated = data.outdated;
		let latest = data.latest;

		if (ifOutdated) {
			if (!ifSupported) {
				ramapi.executeconsole(
					`${apiversion} is No longer supported the latest version is ${latest}`,
					true,
					false
				);
			} else {
				return ramapi.executeconsole(
					`${apiversion} is outdated but still supported the latest version is ${latest}`,
					false,
					true
				);
			}
		} else {
			ramapi.executeconsole(
				`${apiversion} is the latest version`,
				false,
				false
			);
		}
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apihug(apiv, apikey)
	.then(async (data) => {
		console.log(await data.data.url); // logs the url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apigm(apiv, apikey)
	.then(async (data) => {
		console.log(data.url); //url
		console.log(data.text); //text
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apign(apiv, apikey)
	.then(async (data) => {
		console.log(data.url); //url
		console.log(data.text); //text
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apislap(apiv, apikey, "user1", "user2")
	.then(async (data) => {
		console.log(data.url); //url
		console.log(data.text); //texts (it puts this together so the user1 and user2 would be needed)
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apikiss(apiv, apikey)
	.then((data) => {
		console.log(data.url); // returns the url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.api8ball(apiv, apikey)
	.then((data) => {
		console.log(data.text); // text
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apihello(apiv, apikey)
	.then((data) => {
		console.log(data.text); //text
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apicuddle(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apitired(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apisick(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apimeme(apiv, apikey)
	.then((data) => {
		let url = data.url;
		let title = data.title;
		let author = data.author;
		let nsfw = data.nsfw;
		let postlink = data.postLink;
		console.log(`${url} \n ${title} \n ${author} \n ${nsfw} \n ${postlink}`);
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apicry(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
		console.log(data.text); //text
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.apilol(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});
```

## Missing endpoint

current api version is v4 if v5 is out then contact support

ram api endpoints can be found at https://ram.gamearoo.top/api/docs

## Support

email : support@gamearoodev.com

discord: https://discord.gamearoodev.com
