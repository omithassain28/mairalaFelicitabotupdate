const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "list-roles",
    category: "Utility",
    description: "Check Bot",
    aliases: [ "listroles" ],
    args: false,
    usage: "",
    permission: [],
    voteonly: false,
    owner: false,
    execute: async (message, args, client, prefix) => {

  let bm = message.guild.roles.cache.map(r => `<@&${r.id}>`)
    if(!bm || bm === null || bm === 0){
      bm = "No Roles"
    }

let lm = message.guild.roles.cache.size;
    if(!lm || lm === null || lm === 0){
      lm = "0"
    }
    message.reply({
      embeds: [
                  new MessageEmbed()
        .setTitle(`Role list (${lm})`)
                  .setDescription(`${(bm).join(" | ").replace("@@everyone", "")}`)
                  .setColor(client.embedColor)
    ]
    })
  },
};
