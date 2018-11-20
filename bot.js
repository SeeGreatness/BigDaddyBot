const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`${client.user.tag} Is Active!`);
    client.user.setPresence({game: {name: `with you!`, type: 1}});
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
    client.user.setStatus("idle");
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}});
client.on('message', message => {
    if (message.content === 'cheyenne') {
    	message.reply('Emma loves Cheyenne!');
  	}});
client.on('message', message => {
    if (message.content === 'Emma') {
    	message.reply('Cheyenne loves emma!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
