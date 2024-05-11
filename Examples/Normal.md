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

> Normal Examples

```javascript
import \* as ramapi from "ram-api.js"; // typescript
const ramapi = require("ram-api.js"); // javascript

const lang = "english"; // "spanish" for spanish

let RamApi = new ramapi.NormalEndpoints("api key here", "v16", 60000, 1);


RamApi.laughAsync()
.then((data) => {
console.log(data);
})
.catch((error) => {});

RamApi.versionInfoAsync().then(data => {console.log(data)}).catch(error => {})

RamApi.birthdayAsync(lang).then(data => {console.log(data)}).catch(error => {})

RamApi.cryAsync(lang).then(data => {console.log(data)}).catch(error => {})

RamApi.tiredAsync().then(data => {console.log(data)}).catch(error => {})

RamApi.sickAsync().then(data => {console.log(data)}).catch(error => {})

RamApi.slapAsync("user1", "user2").then(data => {console.log(data)}).catch(error => {})

RamApi.kissAsync().then(data => {console.log(data)}).catch(error => {})

RamApi.hugAsync().then(data => {console.log(data)}).catch(error => {})

RamApi.goodNightAsync(lang).then(data => {console.log(data)}).catch(error => {})

RamApi.goodMorningAsync(lang).then(data => {console.log(data)}).catch(error => {})

RamApi.cuddleAsync().then(data => {console.log(data)}).catch(error => {})

RamApi.helloAsync(lang).then(data => {console.log(data)}).catch(error => {})

RamApi.rpsAsync("paper").then(data => {console.log(data)}).catch(error => {})

RamApi._8ballAsync(lang).then(data => {console.log(data)}).catch(error => {})

RamApi.rateLimitAsync().then(data => {console.log(data)}).catch(error => {})

RamApi.randomNumberAsync(9, 7).then(data => {console.log(data)}).catch(error => {})

RamApi.suggestionAsync("This is a suggestion", "Example User").then(data => {console.log(data)}).catch(error => {})

RamApi.pingAsync().then(data => {console.log(data)}).catch(error => {})

RamApi.ramAsync().then(data => {console.log(data)}).catch(error => {})

RamApi.nekoparaAsync().then(data => {console.log(data)}).catch(error => {})

RamApi.mikuAsync().then(data => {console.log(data)}).catch(error => {})
```
