const { MessageEmbed, Permissions } = require("discord.js");

module.exports = {
  name: "join",
  aliases: ["j"],
  category: "Music",
  description: "Join voice channel",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  player: false,
  inVoiceChannel: true,
  sameVoiceChannel: false,
  execute: async (message, args, client, prefix) => {

    if (!message.guild.me.permissions.has(Permissions.FLAGS.CONNECT) || !message.guild.me.permissions.has(Permissions.FLAGS.SPEAK)) {
      return message.channel.send({
        embeds: [new MessageEmbed().setColor(client.embedColor).setDescription(`<:online:1210253399031812147> | I don't have enough permissions to execute this command! Please give me permission \`CONNECT\` or \`SPEAK\`.`)]
      });
    }

    const { channel } = message.member.voice;

    if (!message.guild.me.permissionsIn(channel).has(Permissions.FLAGS.CONNECT) || !message.guild.me.permissionsIn(channel).has(Permissions.FLAGS.SPEAK)) {
      return message.channel.send({
        embeds: [new MessageEmbed().setColor(client.embedColor).setDescription(`<:online:1210253399031812147> | I don't have enough permissions to connect to your voice channel. Please give me permission \`CONNECT\` or \`SPEAK\`.`)]
      });
    }

    const emojiJoin = message.client.emoji.join;

    if (!message.guild.me.voice.channel) {

      const player = message.client.manager.create({
        guild: message.guild.id,
        voiceChannel: channel.id,
        textChannel: message.channel.id,
        volume: 80,
        selfDeafen: true,
      });

      player.connect();

      let thing = new MessageEmbed()
        .setColor(client.embedColor)
        .setDescription(`<:online:1210253399031812147> | **Successfully Joined In <#${channel.id}>**`);
      return message.reply({ embeds: [thing] });

    } else if (message.guild.me.voice.channel !== channel) {

      let thing = new MessageEmbed()
        .setColor("#303037")
        .setDescription(`<:online:1210253399031812147> | You must be in the same channel as ${message.client.user}`);
      return message.reply({ embeds: [thing] });
    }

  }
};
