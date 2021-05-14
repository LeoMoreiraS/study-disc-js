module.exports = {
    name: 'youtube',
    description: 'youtube channel',
    execute(message,args,Discord){
        if(message.member.permissions.has("KICK_MEMBERS")){
            message.channel.send("Você tem permissão para expulsar membros");
        }
        if(message.member.roles.cache.has('823517227868225597')){
            message.channel
            .send('https://www.youtube.com/watch?v=AUOb9_aAk7U&list=PLbbLC0BLaGjpyzN1rg-gK4dUqbn8eJQq4&index=3');
            message.member.roles
            .remove('823517227868225597')
            .catch(console.error);
        }else{
            message.channel
            .send('Você não tem permissão para executar esse comando, vou te dar a permissão');
            message.member.roles
            .add('823517227868225597')
            .catch(console.error);
        }  
    }
}