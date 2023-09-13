```javascript
import \* as ramapi from "ram-api.js"; // typescript
const ramapi = require("ram-api.js"); // javascript

new ramapi.DemoEndpoints(60000, 1)
.laughAsync()
.then((data) => {
console.log(data);
})
.catch((error) => {});
```
