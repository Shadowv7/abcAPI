const abcAPI = require('../src/index');

const { Client } = require('discord.js'),
       client = new Client();

client.login("Bot TOKEN");

client.on('ready',() =>{    
const abcApi = new abc("API TOKEN",client.user.id) // => require to use this module, log in to abcAPI
abcAPI.postStats(client); // => made simple post to this abcAPI
});
