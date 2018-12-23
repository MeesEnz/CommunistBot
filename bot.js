// Master
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`I am ready!`);
});

// Prefix
const prefix = "!";



// Bot 
client.login(process.env.BOT_TOKEN);  // BOT_TOKEN  
