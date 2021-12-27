# ram-api.js

a npm module to connect to ram api easier

## About this package

We understand using ram api can be hard as it has alot this package calls the api for you however this wont bypass the ratelimit youll still see the ratelimit error

## Install

install axios `npm i axios` or `yarn add axios`
install the logs `npm i winston-console-format winston ` or `yarn add winston-console-format winston `

`npm i ram-api.js` or `yarn add ram-api.js`

### Example

```
can be found under example.js

```

## Custom connections

```javascript
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
