// Master
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`I am ready!`);
});

// Prefix
const prefix = ";";




// Commands
client.on('message', message => {

  
  msg = message.content.toLowerCase();

    if (message.author.bot) return;



    // !ping
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send({embed: {
        color: 3447003,
        title: "Client ping",
        description: 'pong' + " " + "***" + client.ping + "***" + "ms"
      }});
  }

  
  })
// Bot 
client.login(process.env.BOT_TOKEN);  //BOT_TOKEN   
