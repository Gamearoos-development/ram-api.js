## ram-api.js

a npm module to connect to ram api easier

> About this package

We understand using ram api can be hard as it has alot this package calls the api for you however this wont bypass the ratelimit youll still see the ratelimit error

> Install

`npm i ram-api.js` or `yarn add ram-api.js`

to install dev build `npm i ram-api.js@dev``

> Update to 6.3.0

```javascript
added;
ram_api_ping()
	.then((data) => console.log(data))
	.catch((err) => ram_api_error(err));

ram_api_custom(version, apikey, lang);
```

> api key

for a api key join the discord and go to #request-api-keys https://discord.gamearoodev.com

> Example

read https://api.rambot.xyz/package/docs

> Checks

Our new advanced error checker works well and will attempt to retry a connection if the rate limit was reached
New logs
NOTE: v8 and under will use old code from past ram-api.js packages so unless your using v9 or higher these checkers wont run

> Missing endpoint

current api version is v9 if v10 is out then contact support

or use our new custom endpoint function

custom(endpoint, key, lang) //dosn't work with the new ramapi custom response system and only works for v9 or higher

ram api endpoints can be found at https://api.rambot.xyz/docs

> Support

email : support@gamearoodev.com

discord: https://discord.gamearoodev.com
