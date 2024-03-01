const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "clearqueue",
    aliases: ["cq"],
    category: "Music",
  	description: "Clear Queue",
	  args: false,
    usage: "<Number of song in queue>",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: true,
    sameVoiceChannel: true,
	 execute: async (message, args, client, prefix) => {
  
		const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("#303037")
                .setDescription("<:queue:1213063749557297192> | There is no music playing.");
            return message.reply({embeds: [thing]});
        }

		player.queue.clear();

		const emojieject = message.client.emoji.remove;

		let thing = new MessageEmbed()
			.setColor(message.client.embedColor)
			
			.setDescription(`<:queue:1213063749557297192> | Successfully Removed all songs from the queue`)
			  return message.reply({embeds: [thing]});
    }
};
