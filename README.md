<div align="center">
  <br />
  <p>
    <a href="https://api.rambot.xyz"><img src="https://gamearoo.top/ram/ramapijs.png" width="546" alt="ram-api.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/s5SmhGYTSZ"><img src="https://img.shields.io/discord/1068088656377692170?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
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

> Update to 10.x

```text
changed classes to use old one add /oldclasscode
```

> api key

for a api key join the discord and go to #request-api-keys https://discord.gg/s5SmhGYTSZ

> Examples

```javascript
const ramapi = require("ram-api.js");
const key = "apikey here";
//normal
const apiclient = new ramapi.RamApi(key, "v11");
const version = "latest"
//pro
const apiclient = new ramapi.RamApiPro(key, "v11");
//basic
const apiclient = new ramapi.RamApiBasic("v11");

//beta
const betaapi = new ramapi.RamApiBeta();
const logger = new ramapi.Logs("Name Here");
const lang = "english";
const utils = new ramapi.Utils("Name Here");

apiclient
	.helloAsync(lang)
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional;

apiclient
	._8ballAsync(lang)
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional

apiclient
	.cuddleAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional

apiclient
	.goodmorningAsync(lang)
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.goodnightAsync(lang)
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.hugAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.kissAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.slapAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.sickAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.tiredAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.cryAsync(lang)
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.laughAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.birthdayAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.version_infoAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional

apiclient
	.ratelimitAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional

apiclient
	.ramAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.nekoparaAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional

apiclient.version_checkAsync();

apiclient
	.rpsAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional

apiclient
	.randomNumberAsync(min, max)
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
apiclient
	.suggestionAsync(suggestion, user)
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); //finally is optional
// Basic only endpoints

// No Basic only endpoints atm

// Normal only endpoints

// Pro only endpoints

//no pro only endpoints at this time

//beta only endpoints



//utils

utils
	.pingAsync()//this runs on the basic endpoint
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!")); 
utils
	.packageVersionCheckAsync()
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!"));
utils
	.updatePackageAsync(version);

utils
	.customAsync(endpoint, api_key) // api_key not needed for basic endpoints endpoint Example: /basic/v13/hello?lang=english or /basic/v12/public/hello/english
	.then((data) => console.log(data)) //then is optional with a await
	.catch((error) => logger.errorAsync(error)) //catch is required
	.finally(() => logger.infoAsync("Completed!"));
```

> Missing endpoint

current api version is v12 if v13 is out then contact support

ram api endpoints can be found at https://api.rambot.xyz

> Support

email : support@rambot.xyz

discord: https://discord.gg/5a93U2xYjZ
