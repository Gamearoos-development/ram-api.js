<div align="center">
  <br />
  <p>
    <a href="https://api.rambot.xyz"><img src="https://gamearoo.top/ram/ramapijs.png" width="546" alt="ram-api.js" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/q3ycRjBG9q"><img src="https://img.shields.io/discord/1068088656377692170?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/ram-api.js"><img src="https://img.shields.io/npm/v/ram-api.js.svg" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/ram-api.js"><img src="https://img.shields.io/npm/dt/ram-api.js.svg?maxAge=3600" alt="npm downloads" /></a>
    <a href="https://github.com/Gamearoos-development/ram-api.js/actions"><img src="https://github.com/Gamearoos-development/ram-api.js/actions/workflows/text.yml/badge.svg" alt="Tests status" /></a>
    
  </p>
  <a href="https://nodei.co/npm/ram-api.js/"><img src="https://nodei.co/npm/ram-api.js.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

[Back to readme](../README.md)

[Back to Utils](./Utils.md)

> Custom Endpoints Example

```javascript

import \* as ramapi from "ram-api.js"; // typescript
const ramapi = require("ram-api.js"); // javascript
const lang = "english"; // "spanish" for spanish
//demo v14+
new ramapi.Utils().customAsync("/hello", "demo", { params: { lang: lang } }).then(data => { console.log(data); }).catch(err => { });

//basic v13 or under

new ramapi.Utils().customAsync("/hello", "basic", { version: "v13", params: { lang: lang } }).then(data => { console.log(data); }).catch(err => { });

//pro, normal, or extended are also available options instead of demo or basic below are examples NOTICE: extended only exists in v14 and above


//v16 & up
new ramapi.Utils().customAsync("/hello", "normal", { params: { lang: lang }, headers: {"token": "api key here"} }).then(data => { console.log(data); }).catch(err => { });
//provide version ex v16 (v16 and up)
new ramapi.Utils().customAsync("/hello", "normal", { version: "v16", params: { lang: lang }, headers: {"token": "api key here"} }).then(data => { console.log(data); }).catch(err => { });

//provide version ex v13 (v15 and under)
new ramapi.Utils().customAsync("/hello", "normal", { version: "v15", params: { lang: lang }, headers: {"api-key": "api key here"} }).then(data => { console.log(data); }).catch(err => { });


```
