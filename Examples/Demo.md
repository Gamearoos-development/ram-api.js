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
    
  </p>
  <a href="https://nodei.co/npm/ram-api.js/"><img src="https://nodei.co/npm/ram-api.js.png?downloads=true&downloadRank=true&stars=true"></a>
</div>

> Demo Examples

```javascript
import \* as ramapi from "ram-api.js"; // typescript
const ramapi = require("ram-api.js"); // javascript

const lang = "english"; // "spanish" for spanish

new ramapi.DemoEndpoints(60000, 1)
.laughAsync()
.then((data) => {
console.log(data);
})
.catch((error) => {});

new ramapi.DemoEndpoints(60000, 1).birthdayAsync(lang).then(data => {console.log(data)}).catch(error => {})

new ramapi.DemoEndpoints(60000, 1).cryAsync(lang).then(data => {console.log(data)}).catch(error => {})
```
