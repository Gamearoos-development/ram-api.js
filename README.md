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

```javascript
const {
	get: ram_api_get,
	post: ram_api_post,
	put: ram_api_put,
	delete: ram_api_delete,
} = require("ram-api.js"); // Ram api get endpoints
const apiv = "v9";
const lang = "english"; // english and spanish is the choices atm
const apikey = "apikey"; //ask for a key by contacting support
const helloid = "id to custom hello"; //use the post method to receive the id
//! note ram api has a 5 calls per 5 seconds

ramapi.consoleerror("test error");

ramapi.consoleinfo("test info");
ramapi.consolewarn("test warn");

ram_api_get
	.hug(apiv, apikey)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
	});

ram_api_get
	.apiinfo(apikey)
	.then((data) => {
		console.log(data);
	})
	.catch((err) => console.log(data));

ram_api_get
	._8ball(apiv, apikey)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

// V code for custom msgs adding or create should not be used by production use get endpoints in production builds (MAKE SURE ONLY YOU OR TRUSTED DEVS CAN USE THE POST, PUT, OR DELETE ENDPOINTS)

ram_api_post
	.custom_hello_create(apiv, apikey, "hello") //.then can be used but isnt needed as it logs the id to console
	.catch((err) => console.log(err));

ram_api_put
	.custom_hello_add(apiv, apikey, "hi", helloid)
	.then((data) => console.log(data))
	.catch((err) => console.log(err));

ram_api_delete
	.custom_hello_remove(apiv, apikey, "hi", helloid)
	.then((data) => console.log(data))
	.catch((err) => {
		console.log(err); // you may get the special error response
	});
```

## Missing endpoint

current api version is v7 if v8 is out then contact support

ram api endpoints can be found at https://api.rambot.xyz/docs

## Support

email : support@gamearoodev.com

discord: https://discord.gamearoodev.com
