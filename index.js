const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '$'; 

client.once('ready', () => {
    console.log('Anonymous1 is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping'){
        message.channel.send('pong!');
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UCd2kpbJi2gbEsWsUf42GCuQ');
    }    
 });

client.login("ODM0NzIzMzUxMTA4MTI0NzAy.YIFCsw.pnQqAGSmFDFh7Nl7RPX9rojyb6o")