const ramapi = require("ram-api");
const apiv = "v3"; //v2 and up are available ram api versions note versions

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
