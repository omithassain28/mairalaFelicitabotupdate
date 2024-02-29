const { MessageEmbed } = require("discord.js");
const i18n = require("../../utils/i18n");

module.exports = {
  name: i18n.__("cmd.resume.name"),
  category: "Music",
  description: i18n.__("cmd.resume.des"),
  args: false,
  usage: "",
  permission: [],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    const player = client.manager.get(message.guild.id);
    const song = player.queue.current;

    if (!player.queue.current) {
      let thing = new MessageEmbed()
        .setColor("#303037")
        .setDescription(i18n.__("player.nomusic"));
      return message.reply({ embeds: [thing] });
    }

    const emojiresume = client.emoji.resume;

    if (!player.paused) {
      let thing = new MessageEmbed()
        .setColor("#303037")
        .setDescription(`<:online:1210253399031812147> | The player is already resumed.`)
        
      return message.reply({ embeds: [thing] });
    }

    player.pause(false);

    let thing = new MessageEmbed()
      .setDescription("<:online:1210253399031812147>  |  Successfully Resumed The Current Playing Song.") 
      
      .setColor(client.embedColor)
      
    return message.reply({ embeds: [thing] });
  },
};
