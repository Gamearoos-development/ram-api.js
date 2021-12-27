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
