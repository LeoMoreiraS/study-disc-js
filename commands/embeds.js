module.exports = {
    name: 'embeds',
    description: 'embeds!',
    execute(message,args,Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#230452")
        .setTitle("Rules")
        .setDescription("This is a embed for the server rules")
        .addFields(
            {name: 'Rule 1', value: "Respeite as regras!"},
            {name: 'Rule 2', value: "não tem regras!"}
        )
        .setImage("https://unsplash.com/photos/nYKJStcr3z4")
        .setFooter("Rodapé pelas!")
        message.channel.send(newEmbed);
    }
}