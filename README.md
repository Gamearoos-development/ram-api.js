<div align="center">
  <br />
  <p>
    <a href="https://api.rambot.xyz"><img src="https://gamearoo.top/ram/ramapijs.png" width="546" alt="ram-api.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.com/invite/a3vBXUJadY"><img src="https://img.shields.io/discord/605900262581993472?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/ram-api.js"><img src="https://img.shields.io/npm/v/ram-api.js.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/ram-api.js"><img src="https://img.shields.io/npm/dt/ram-api.js.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/Gamearoos-development/ram-api.js/actions"><img src="https://github.com/Gamearoos-development/ram-api.js/actions/workflows/text.yml/badge.svg" alt="Tests status" /></a>
  </p>
</div>

> About this package

We understand using ram api can be hard as it has alot this package calls the api for you however this wont bypass the ratelimit youll still see the ratelimit error

> Install

`npm i ram-api.js` or `yarn add ram-api.js`

> Update to 6.2.0

```javascript
added;
ram_api_ping()
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));
```

> docs

https://api.rambot.xyz/packages/docs

> api key

for a api key join the discord and go to #request-api-keys https://discord.gamearoodev.com

> Example

NOTE: typescript look at typescripts example

```javascript
const ramapi = require("ram-api.js"); // Ram api get endpoints
// V use this for extended and ^ this for normal
const ramapi = require("ram-api.js/extended"); // remember these don't need a apikey
const apiv = "v9";
const lang = "english"; // english and spanish is the choices atm
const apikey = "apikey"; //ask for a key by contacting support
const helloid = "id to custom hello"; //use the post method to receive the id
//! note ram api has a 8 calls per 8 seconds  if using v9 or higher the package will attempt a retry
ramapi.error("error");

rama.ping()
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.fun
	.hug(apiv, apikey)
	.then((data) => {
		console.log(data);
	})
	.catch((error) => ram_api_error(error);

ramapi.games
	._8ball(apiv, apikey, lang)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.fun
	.cuddle(apiv, apikey)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => ram_api_error(err));

ramapi.fun
	.goodmorning(apiv, apikey, lang)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.fun
	.goodnight(apiv, apikey, lang)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.fun
	.hello(apiv, apikey, lang)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.fun
	.kiss(apiv, apikey)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.fun
	.slap(apiv, apikey)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.fun
	.sick(apiv, apikey)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.fun
	.tired(apiv, apikey)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.fun
	.cry(apiv, apikey, lang)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.fun
	.laugh(apiv, apikey)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.fun
	.birthday(apiv, apikey, lang)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.info.version_check(apiv); //the version checker no longer returns errors or data as it now logs it to console from the api

ramapi.info
	.apiinfo(apikey)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.reddit
	.meme(apiv, apikey)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.reddit
	.cats(apiv, apikey)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.reddit
	.anime(apiv, apikey)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ramapi.images
	.ram_image(apiv, apikey)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

//new stuff

ramapi.custom
	.custom_hello(apiv, apikey, helloid)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

// this is all stuff to edit custom entries not recomended to public bots unless restricted to your id

ramapi.custom
	.custom_hello_add(apiv, apikey, helloid, "hi how are you") //.then isnt needed as it logs to console how ever data return is completed
	.catch((err) => ram_api_error(err));

ramapi.custom
	.custom_hello_remove(apiv, apikey, helloid, "hi how are you") //just like put .then isn't needed
	.catch((err) => ram_api_error(err));

ramapi.custom
	.custom_hello_create(apiv, apikey, "hello") //.then isnt need it only returns check console
	.catch((err) => ram_api_error(err)); //the id this outputs plz save it you wont be able to get it back if lost
```

> Checks

Our new advanced error checker works well and will attempt to retry a connection if the rate limit was reached
New logs
NOTE: v8 and under will use old code from past ram-api.js packages so unless your using v9 or higher these checkers wont run

> use old code instead of new

To use the old code if not using v9 you can access it by
NOTE: all though you can do this its suggested to use the ones in example as it will pull from these

```javascript
const ramapi = require("ram-api.js/oldcode");

let version = "v8"; // for version 9 or higher use the codes in example

let key = "key";

//code here
```

> typescript examples

```typescript
import ramapi from "ram-api.js";
const apiv = "v9";
const lang = "english"; // english and spanish is the choices atm
const apikey = "apikey"; //ask for a key by contacting support
const helloid = "id to custom hello"; //use the post method to receive the id
//! note ram api has a 8 calls per 8 seconds  if using v9 or higher the package will attempt a retry

//the rest in the example is the same
```

> Missing endpoint

current api version is v9 if v10 is out then contact support

ram api endpoints can be found at https://api.rambot.xyz/docs

> Support

email : support@gamearoodev.com

discord: https://discord.gamearoodev.com
