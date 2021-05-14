module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    
    execute(message,args,Discord){

        let role = message.guild.roles.cache.find(r => r.name === 'Mod');
        if(message.member.permissions.has('KICK_MEMBERS')){
            message.channel.send('You have the permission to kick members')
        }else{
            message.channel.send('You dont have the permission to ban members')
        }

        if(message.member.roles.cache.some(r => r.name === 'Mod'))
            message.channel.send('pong!');
    }
}