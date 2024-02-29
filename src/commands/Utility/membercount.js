const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "membercount",
    category: "Utility",
    description: "Check Bot",
    aliases: [ "mc" ],
    args: false,
    usage: "",
    permission: [],
    voteonly: false,
    owner: false,
    execute: async (message, args, client, prefix) => {

  const emk = new MessageEmbed()
.setTitle('Members')
.setDescription(`${message.guild.memberCount}`)
.setTimestamp()
      .setColor(client.embedColor)
    message.reply({embeds: [emk]})  
    },
};