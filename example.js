const ramapi = require("ram-api");
const apiv = "v4"; //v2 and up are available ram api versions note versions
const apikey = "keygoeshere";

//! note ram api has a 5 calls per 5 seconds

ramapi.apiv, apikeyersion(apiv, apikey); // outputs rather the api is outdated or not also this console logs for you

ramapi.apihug(apiv, apikey).then(async (data) => {
	console.log(await data.data.url); // logs the url
});

ramapi.apigm(apiv, apikey).then(async (data) => {
	console.log(data.url); //url
	console.log(data.text); //text
});

ramapi.apign(apiv, apikey).then(async (data) => {
	console.log(data.url); //url
	console.log(data.text); //text
});

ramapi.apislap(apiv, apikey, "user1", "user2").then(async (data) => {
	console.log(data.url); //url
	console.log(data.text); //texts (it puts this together so the user1 and user2 would be needed)
});

ramapi.apikiss(apiv, apikey).then((data) => {
	console.log(data.url); // returns the url
});

ramapi.api8ball(apiv, apikey).then((data) => {
	console.log(data.text); // text
});

ramapi.apihello(apiv, apikey).then((data) => {
	console.log(data.text); //text
});

ramapi.apicuddle(apiv, apikey).then((data) => {
	console.log(data.url); //url
});

ramapi.apitired(apiv, apikey).then((data) => {
	console.log(data.url); //url
});

ramapi.apisick(apiv, apikey).then((data) => {
	console.log(data.url); //url
});

ramapi.apimeme(apiv, apikey).then((data) => {
	let url = data.url;
	let title = data.title;
	let author = data.author;
	let nsfw = data.nsfw;
	let postlink = data.postLink;
	console.log(`${url} \n ${title} \n ${author} \n ${nsfw} \n ${postlink}`);
});

ramapi.apicry(apiv, apikey).then((data) => {
	console.log(data.url); //url
	console.log(data.text); //text
});

ramapi.apilol(apiv, apikey).then((data) => {
	console.log(data.url); //url
});
