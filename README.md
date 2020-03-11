---
__abcAPI__

- __The official module for the arcane-botcenter.xyz's API__

---

##### Example:
  Discord.js 11 and 12
```js
const abc = require('abcapi');

const { Client } = require('discord.js'),
    client = new Client();

client.login('Bot TOKEN');

client.on('ready',() => {
const abcApi = new abc("API TOKEN",client.user.id) // => require to use this module, log in to abcAPI
abcAPI.postStats(client); // => made simple post to this abcAPI
});
```

Eris Sharder

```js
//On your ready event 

const abc = require('abcapi');
const abcAPI = new abc("API TOKEN",this.bot.user.id)
abcAPI.postStats(this.bot);
```

___

