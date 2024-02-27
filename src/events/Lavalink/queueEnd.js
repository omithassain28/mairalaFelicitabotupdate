const delay = require("delay");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const ms = require('ms');
const i18n = require("../../utils/i18n");

module.exports = async (client, player) => {

	const channel = client.channels.cache.get(player.textChannel);
	const emojiwarn = client.emoji.warn;

  const tmkc = new MessageActionRow() 
    
  
	let thing = new MessageEmbed()
		.setColor(client.embedColor)
		.setDescription(`<:icons_queue:1199976398484406274> | Queue has been ended.`)
		.setAuthor({name: `${client.user.username}`, iconURL: client.user.displayAvatarURL()});
	channel.send({embeds: [thing], components: [tmkc]});
}