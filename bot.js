// Master
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`I am ready!`);
});

// Prefix
const prefix = "!";



//client.on("guildCreate", guild => {
  //guild.defaultChannel.sendMessage(`test`);
  
  

//})




// Commands
client.on('message', message => {


  // check if user has that is
  
  msg = message.content.toLowerCase();

    if (message.author.bot) return;

})

    if(message.content.startswith("!ping")){
        message.reply("Pong Pong, boii!")
    }



// Bot 
client.login(process.env.BOT_TOKEN);  //BOT_TOKEN  
