const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "ping",
  category: "Information",
  description: "Check Ping Bot",
  args: false,
  usage: "",
  permission: [],
  voteonly: false,
  owner: false,
  execute: async (message, args, client, prefix) => {
    const Chup = new MessageEmbed()
      .setDescription(`<:online:1210253399031812147> | Ping: ${client.ws.ping}ms`)
      .setColor("#303037");

    message.reply({ embeds: [Chup] });
  },
};
