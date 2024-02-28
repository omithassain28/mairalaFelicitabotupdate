const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "server-icon",
    category: "Utility",
    description: "Check Bot",
    aliases: [ "sicon" ],
    args: false,
    usage: "",
    permission: [],
    voteonly: false,
    owner: false,
    execute: async (message, args, client, prefix) => {

    let image = message.guild.iconURL({ dynamic: true, size: 2048 })
const row = new MessageActionRow()

			.addComponents(

new MessageButton()

					.setURL(image)

					.setLabel('Download')

					.setStyle('LINK'))
    const embed = new MessageEmbed()
    .setTitle(`${message.guild.name}'s Icon`)
    .setImage(image)
    .setColor(client.embedColor)

    message.reply({ embeds: [embed], components:[row]})
  }
  }