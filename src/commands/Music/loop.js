const { MessageEmbed } = require("discord.js");

module.exports = {
	  name: "loop",
    aliases: ['l'],
    category: "Music",
  	description: "Toggle music loop",
  	args: false,
    usage: "",
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
                .setDescription("<:cross:1200733725344944178> | There is no music playing.");
            return message.reply({embeds: [thing]});
        }
		  const emojiloop = message.client.emoji.loop;

        if (args.length && /queue/i.test(args[0])) {
            player.setQueueRepeat(!player.queueRepeat);
            const queueRepeat = player.queueRepeat ? "enabled" : "disabled";
			let thing = new MessageEmbed()
				.setColor(client.embedColor)
				
				.setDescription(`<:loop:1199976690345070664> | Loop queue is now **${queueRepeat}**`)
		   return message.reply({embeds: [thing]});
        }

        player.setTrackRepeat(!player.trackRepeat);
        const trackRepeat = player.trackRepeat ? "enabled" : "disabled";
		let thing = new MessageEmbed()
			.setColor(client.embedColor)
			
			.setDescription(`<:loop:1199976690345070664> | Loop track is now **${trackRepeat}**`)
		    return message.reply({embeds: [thing]});
    }
};