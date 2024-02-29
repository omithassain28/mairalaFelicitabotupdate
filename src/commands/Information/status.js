const {
  MessageEmbed,
  version,
  MessageActionRow,
  MessageButton,
} = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const os = require("os");
const si = require("systeminformation");

module.exports = {
  name: "status",
  category: "Information",
  aliases: ["stats"],
  description: "Show status bot",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const duration1 = moment
      .duration(message.client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");
    const cpu = await si.cpu();
    const about = message.client.emoji.about;
    let ccount = client.channels.cache.size;
    let scount = client.guilds.cache.size;
    let mcount = 0;
    client.guilds.cache.forEach((guild) => {
      mcount += guild.memberCount;
    });
    let fck = client.ws.ping;
    const embed = new MessageEmbed()
      .setAuthor("𝑲𝒊𝒏𝒈 Stats", "")
      .setColor(client.embedColor)
      .setThumbnail("")
      .setDescription(`**__Bot Stats__**\n<:online:1210253399031812147>Bot Name : ${client.user.username}\n<:online:1210253399031812147>Servers : ${scount}\n<:online:1210253399031812147>Users : ${mcount}\n<:online:1210253399031812147>Ping : ${Math.round(client.ws.ping)}ms\n<:online:1210253399031812147>Uptime : ${duration1}\n\n**__Bot Storage__**\n <:online:1210253399031812147>Bot Version : 𝑲𝒊𝒏𝒈 V1\n <:online:1210253399031812147>Js Version : 13.6.0\n\n**__Creator__**\n[king](https://discord.gg/k7euMVR4q6)

      `);
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel(` Servers ${scount}`)
        .setStyle("DANGER")
        .setDisabled("true")
        .setCustomId("bc")
        .setEmoji("⚡"),

      new MessageButton()
        .setLabel(`Users ${mcount}`)
        .setStyle("DANGER")
        .setCustomId("lawde")
        .setDisabled("true")
        .setEmoji("👥"),
    );
    message.reply({ embeds: [embed], components: [button] });
  },
};
