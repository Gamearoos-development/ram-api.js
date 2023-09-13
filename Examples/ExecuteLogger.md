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

[Back to ReadME](../README.md)

> Execute Examples

```javascript
import \* as ramapi from "ram-api.js"; // typescript
const ramapi = require("ram-api.js"); // javascript

new ramapi.ExecuteLogger("Test Logger").infoAsync("testing without a process name")
new ramapi.ExecuteLogger("Test Logger").infoAsync("testing with a process name", "Process")

new ramapi.ExecuteLogger("Test Logger").errorAsync("testing without a process name")
new ramapi.ExecuteLogger("Test Logger").errorAsync("testing with a process name", "Process")

new ramapi.ExecuteLogger("Test Logger").warnAsync("testing without a process name")
new ramapi.ExecuteLogger("Test Logger").warnAsync("testing with a process name", "Process")

//fatal will close your program when called useful in situations with fatal errors or errors youll like to close the program with

new ramapi.ExecuteLogger("Test Logger").fatalAsync("testing without a process name")
new ramapi.ExecuteLogger("Test Logger").fatalAsync("testing with a process name", "Process")
```
