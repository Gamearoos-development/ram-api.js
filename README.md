# ram-api.js

a npm module to connect to ram api easier

## About this package

We understand using ram api can be hard as it has alot this package calls the api for you however this wont bypass the ratelimit youll still see the ratelimit error

## Install

install axios `npm i axios` or `yarn add axios`
install the logs `npm i winston-console-format winston ` or `yarn add winston-console-format winston `

`npm i ram-api.js` or `yarn add ram-api.js`

### Example

```javascript
const ramapi = require("ram-api");
const apiv = "v3"; //v2 and up are available ram api versions note versions

//! note ram api has a 5 calls per 5 seconds

ramapi.apiversion(apiv); // outputs rather the api is outdated or not also this console logs for you

ramapi.apihug(apiv).then(async (data) => {
	console.log(await data.data.url); // logs the url
});

ramapi.apigm(apiv).then(async (data) => {
	console.log(data.url); //url
	console.log(data.text); //text
});

ramapi.apign(apiv).then(async (data) => {
	console.log(data.url); //url
	console.log(data.text); //text
});

ramapi.apislap(apiv, "user1", "user2").then(async (data) => {
	console.log(data.url); //url
	console.log(data.text); //texts (it puts this together so the user1 and user2 would be needed)
});

ramapi.apikiss(apiv).then((data) => {
	console.log(data.url); // returns the url
});

ramapi.api8ball(apiv).then((data) => {
	console.log(data.text); // text
});

ramapi.apihello(apiv).then((data) => {
	console.log(data.text); //text
});

ramapi.apicuddle(apiv).then((data) => {
	console.log(data.url); //url
});

ramapi.apitired(apiv).then((data) => {
	console.log(data.url); //url
});

ramapi.apisick(apiv).then((data) => {
	console.log(data.url); //url
});

ramapi.apimeme(apiv).then((data) => {
	let url = data.url;
	let title = data.title;
	let author = data.author;
	let nsfw = data.nsfw;
	let postlink = data.postLink;
	console.log(`${url} \n ${title} \n ${author} \n ${nsfw} \n ${postlink}`);
});

ramapi.apicry(apiv).then((data) => {
	console.log(data.url); //url
	console.log(data.text); //text
});
```

## Custom connections

```javascript
const ramapi = require("ram-api");
const apiv = "v3"; //v2 and up are available ram api versions note versions
ramapi.custom(apiv, "endpoint").then((data) => {
	console.log(data); //its up to u to figure this out
});
```

example endpoint is /version
ram api endpoints can be found at https://ram.gamearoo.top/api/docs
Note v3 is the latest version so using v2 or under can lead to unexpected responses if not part of said version

## Support

email : support@gamearoodev.com
discord: https://discord.gamearoodev.com
