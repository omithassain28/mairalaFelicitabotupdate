const { MessageEmbed } = require("discord.js");

module.exports = {
	name: "destroy",
    aliases: ["dc"],
    category: "Music",
    description: "Fix The Music",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    voteonly: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
 execute: async (message, args, client, prefix) => {
       
        const player = message.client.manager.get(message.guild.id);

        const emojiLeave = message.client.emoji.leave;

        player.destroy();
        
        let thing = new MessageEmbed()
            .setColor(client.embedColor)
            .setAuthor("| Destroyed The Player","https://media.discordapp.net/attachments/1162795987014787162/1200740625750954024/tkthao219-bubududu.gif?ex=65c747d9&is=65b4d2d9&hm=57b6b8e775877f61a875041613c462deff19872fd4f4375d45dc46ed596c1331&=&width=300&height=300")
          return message.reply({embeds: [thing]});
	
    }
};