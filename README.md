# ram-api.js

a npm module to connect to ram api easier

## About this package

We understand using ram api can be hard as it has alot this package calls the api for you however this wont bypass the ratelimit youll still see the ratelimit error

## Install

`npm i ram-api.js` or `yarn add ram-api.js`

## Update to v5.0.0

remove the code for any custom connections

# change apiversion check

```javascript
const apikey = 'apikey'
(apiv) to (apiv, apikey)

check example for more info

apiversion to versioncheck(apiv).then(data => {
	//code here
}).then(err => {
	//err code here
})

//remove api from the beginning of things

//example apihug too hug

//for 8ball do _8ball


```

for a api key join the discord and go to #request-api-keys https://discord.gamearoodev.com

### Example

```javascript
const ramapi = require("ram-api.js");
const apiv = "v7"; //v2 and up are available ram api versions note versions
const lang = "english"; // english and spanish is the choices atm
const apikey = "apikey"; //ask for a key by contacting support

//! note ram api has a 5 calls per 5 seconds

ramapi.consoleerror("test error");

ramapi.consoleinfo("test info");
ramapi.consolewarn("test warn");

ramapi
	.versioncheck(apiv)
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
	.hug(apiv, apikey)
	.then(async (data) => {
		console.log(await data.data.url); // logs the url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.gm(apiv, apikey, lang)
	.then(async (data) => {
		console.log(data.url); //url
		console.log(data.text); //text
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.gn(apiv, apikey, lang)
	.then(async (data) => {
		console.log(data.url); //url
		console.log(data.text); //text
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.slap(apiv, apikey, lang)
	.then(async (data) => {
		console.log(data.url); //url
		console.log(data.text); //texts (it puts this together so the user1 and user2 would be needed)
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.kiss(apiv, apikey)
	.then((data) => {
		console.log(data.url); // returns the url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	._8ball(apiv, apikey, lang)
	.then((data) => {
		console.log(data.text); // text
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.hello(apiv, apikey, lang)
	.then((data) => {
		console.log(data.text); //text
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.cuddle(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.tired(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.sick(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.meme(apiv, apikey)
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
	.cry(apiv, apikey, lang)
	.then((data) => {
		console.log(data.url); //url
		console.log(data.text); //text
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.lol(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.bday(apiv, apikey, lang)
	.then((data) => {
		let text = data.text;
		let url = data.url;

		console.log(text + "\n" + url);
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});

ramapi
	.ramimage(apiv, apikey)
	.then((data) => console.log(data))
	.catch((err) => ramapi.executeconsole(err, true, false));
ramapi
	.getinfo(apiv, apikey)
	.then((data) => {
		let { supported, outdated, version, name, package } = data;

		let arraysup = [
			supported.api,
			supported.v6,
			supported.v5,
			supported.v4,
			supported.v3,
			supported.v2,
			supported.v1,
		];

		let arrayout = [
			outdated.api,
			outdated.v6,
			outdated.v5,
			outdated.v4,
			outdated.v3,
			outdated.v2,
			outdated.v1,
		];

		console.log(name);
		console.log(version);
		console.log(package); // this package  is what it links
		let mappedsup = arraysup.map((m) => `- ${m}`).join("\n");
		console.log(mappedsup);
		let mappedout = arrayout.map((m) => `- ${m}`).join("\n");
		console.log(mappedout);
	})
	.catch((err) => {
		ramapi.executeconsole(err, true, false);
	});
```

## Missing endpoint

current api version is v7 if v8 is out then contact support

ram api endpoints can be found at https://api.rambot.xyz/docs

## Support

email : support@gamearoodev.com

discord: https://discord.gamearoodev.com
