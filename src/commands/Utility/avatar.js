const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "avatar",
    category: "Utility",
    description: "Check Bot",
    aliases: [ "av" ],
    args: false,
    usage: "",
    permission: [],
    voteonly: false,
    owner: false,
    execute: async (message, args, client, prefix) => {

  
   const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;
      let image = member.displayAvatarURL({dynamic: true, size: 4096}) 
const row = new MessageActionRow()

			.addComponents(

new MessageButton()

					.setURL(image)

					.setLabel('Download')

					.setStyle('LINK'))
    const embed = new MessageEmbed()
    .setImage(image)
    .setColor(client.embedColor)

    message.reply({ embeds: [embed], components:[row]})
  }
     }