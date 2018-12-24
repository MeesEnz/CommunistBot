// Master
const Discord = require('discord.js');
const client = new Discord.Client();
const math = require('mathjs');


client.on('ready', () => {
  console.log(`I am ready!`);
});

// Prefix
const prefix = ";";








// Commands
client.on('message', message => {

  
  msg = message.content.toLowerCase();

    if (message.author.bot) return;

    exports.run = (client, message, args, tools) => {

      // check for input
      if (!args[0]) return message.channel.send('Please input a calculation.');
    
      // evalutate calculation
      let resp;
      try{
        resp = math.eval(args.join(' '));
      } catch (e) {
        return message.channel.send('Sorry, please input a valid calculation.');
      }
    
      // Send output
      const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setTitle('Math Calculation')
        .addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
        .addField('Output', `\`\`\`js\n${resp}\`\`\``)
    
      message.channel.send(embed);
    }

    // !ping
    if (message.content.startsWith(prefix + "ping")) {
      message.channel.send({embed: {
        color: 3447003,
        title: "Client ping",
        description: 'pong' + " " + "***" + client.ping + "***" + "ms"
      }});
  }


    // !calc (calculates stuff)


  
  })
// Bot 
client.login(process.env.BOT_TOKEN);  //BOT_TOKEN   
