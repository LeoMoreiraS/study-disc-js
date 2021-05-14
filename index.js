//import discord.js declara o bot
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
//loga o bot no server
client.login(process.env.DISC_KEY);
const prefix = '!';

//pasta de commandos
const fs = require('fs');
client.commands =new Discord.Collection();
const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('js'));
//para cada arquivo na pasta de comandos seta um comando no objeto client.commands
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}

//inicialização do bot
client.on("ready", ()=>{
    console.log("O pai ta On!");
});

//event listener
client.on("message",message=>{
    if(!message.content.startsWith(prefix)||message.author.bot)return;
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'ping'){
            client.commands.get('ping').execute(message,args,Discord);//pega o comando execute do arquivo ping.js
            console.log('Hello World!');
        }else if(command === 'youtube'){
                client.commands.get('youtube').execute(message,args,Discord);//pega o comando youtube e executa ele
        }else if(command === 'embeds'){
                client.commands.get('embeds').execute(message,args,Discord);//pega o comando youtube e executa ele
        }
});