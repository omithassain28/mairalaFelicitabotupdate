const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "firstmsg",
    category: "Utility",
    description: "Check Bot",
    args: false,
    usage: "",
    permission: [],
    voteonly: false,
    owner: false,
    execute: async (message, args, client, prefix) => {

  const saichutiya = message.mentions.channels.first() ||message.guild.channels.cache.get(args[0]) || message.channel;
   const fetchMessages = await saichutiya.messages.fetch({
      after: 1,
      limit: 1,
    });
      
    const msg = fetchMessages.first();


const row = new MessageActionRow()

            .addComponents(

new MessageButton()

                    .setURL(msg.url)

                    .setLabel(`Click Here To See The First Message`)

                    .setStyle('LINK')

                

); 


    message.reply({ components:[row] })
  }
  }