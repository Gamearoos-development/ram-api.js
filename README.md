<div align="center">
  <br />
  <p>
    <a href="https://api.rambot.xyz"><img src="https://gamearoo.top/ram/ramapijs.png" width="546" alt="ram-api.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/5a93U2xYjZ"><img src="https://img.shields.io/discord/605900262581993472?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/ram-api.js"><img src="https://img.shields.io/npm/v/ram-api.js.svg" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/ram-api.js"><img src="https://img.shields.io/npm/dt/ram-api.js.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/Gamearoos-development/ram-api.js/actions"><img src="https://github.com/Gamearoos-development/ram-api.js/actions/workflows/text.yml/badge.svg" alt="Tests status" /></a>
  </p>
  <a href="https://nodei.co/npm/ram-api.js/"><img src="https://nodei.co/npm/ram-api.js.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

> About this package

We understand using ram api can be hard as it has alot this package calls the api for you however this wont bypass the ratelimit youll still see the ratelimit error

> Install

`npm i ram-api.js` or `yarn add ram-api.js`

> Update to 9.x

```text
new way is classes however you can add /code3 and use the older code format
```

> docs
> ** Outdated ** > https://api.rambot.xyz/packages/docs

> api key

for a api key join the discord and go to #request-api-keys https://discord.gamearoodev.com

> Example

```javascript
const { APiClient, Logs } = require("ram-api.js");

let apiclient = new APiClient("api key here", "v10");
let logger = new Logs("test bot");
let lang = "english"; //can be spanish or english

apiclient
	.ping()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.bday(lang)
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.cry(lang)
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.cuddle()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.gm(lang)
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.gn(lang)
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.hello(lang)
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.hug()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.kiss()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.laugh()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.sick()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.slap()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.tired()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient.version_check();

apiclient
	.api_info()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	._8ball(lang)
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.nekopara()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.ram_image()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.anime()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.cats()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.meme()
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));
```

> Custom Client Examples

Use this for custom items such as the custom hello in the api note add, remove or post should be a one time run type thing if all possible;

```javascript
const { APiClient, Logs, CustomClient } = require("ram-api.js");

let apiclient = new CustomClient("api key here", "v10");
let logger = new Logs("test bot");
let lang = "english";
let text = " hello";
let id = "id here";

apiclient
	.hello_add(id, text)
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.hello_get(id)
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.hello_post(text)
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));

apiclient
	.hello_delete(id, text)
	.then((data) => console.log(data))
	.catch((err) => logger.error(err));
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

typescript is currently not available at this time

> Missing endpoint

current api version is v10 if v11 is out then contact support

ram api endpoints can be found at https://api.rambot.xyz

> Support

email : support@gamearoodev.com

discord: https://discord.gamearoodev.com
