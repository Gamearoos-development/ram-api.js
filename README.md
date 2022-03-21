# ram-api.js

a npm module to connect to ram api easier

## About this package

We understand using ram api can be hard as it has alot this package calls the api for you however this wont bypass the ratelimit youll still see the ratelimit error

## Install

`npm i ram-api.js` or `yarn add ram-api.js`

## Update to 6.0.0

remove the code for any custom connections

# change apiversion check

```javascript
//look at example

add get  in front as such

hug to get.hug and kiss to get.kiss
```

for a api key join the discord and go to #request-api-keys https://discord.gamearoodev.com

### Example

NOTE: typescript look at typescripts example

```javascript
const {
	get: ram_api_get,
	post: ram_api_post,
	put: ram_api_put,
	delete: ram_api_delete,
	error: ram_api_error, // error masks a error in console as the package
} = require("ram-api.js"); // Ram api get endpoints
const apiv = "v9";
const lang = "english"; // english and spanish is the choices atm
const apikey = "apikey"; //ask for a key by contacting support
const helloid = "id to custom hello"; //use the post method to receive the id
//! note ram api has a 8 calls per 8 seconds  if using v9 or higher the package will attempt a retry
ram_api_err("error");

ram_api_get
	.hug(apiv, apikey)
	.then((data) => {
		console.log(data);
	})
	.catch((error) => ram_api_error(error);

ram_api_get
	._8ball(apiv, apikey, lang)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ram_api_get
	.cuddle(apiv, apikey)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => ram_api_error(err));
```

## Checks

Our new advanced error checker works well and will attempt to retry a connection if the rate limit was reached
New logs
NOTE: v8 and under will use old code from past ram-api.js packages so unless your using v9 or higher these checkers wont run

## use old code instead of new

To use the old code if not using v9 you can access it by
NOTE: all though you can do this its suggested to use the ones in example as it will pull from these

```javascript
const ramapi = require("ram-api.js/oldcode");

let version = "v8"; // for version 9 or higher use the codes in example

let key = "key";

//code here
```

## typescript examples

```typescript
import {
	get: ram_api_get,
	post: ram_api_post,
	put: ram_api_put,
	delete: ram_api_delete,
	error: ram_api_error, // error masks a error in console as the package
} from ("ram-api.js"); // Ram api get endpoints
const apiv = "v9";
const lang = "english"; // english and spanish is the choices atm
const apikey = "apikey"; //ask for a key by contacting support
const helloid = "id to custom hello"; //use the post method to receive the id
//! note ram api has a 8 calls per 8 seconds  if using v9 or higher the package will attempt a retry
ram_api_err("error");

ram_api_get
	.hug(apiv, apikey)
	.then((data) => {
		console.log(data);
	})
	.catch((error) => ram_api_error(error);

ram_api_get
	._8ball(apiv, apikey, lang)
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ram_api_get
	.cuddle(apiv, apikey)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => ram_api_error(err));

```

## Missing endpoint

current api version is v9 if v10 is out then contact support

ram api endpoints can be found at https://api.rambot.xyz/docs

## Support

email : support@gamearoodev.com

discord: https://discord.gamearoodev.com
