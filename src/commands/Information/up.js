const { Message, Client, MessageEmbed } = require("discord.js");


module.exports = {
    name: "uptime",
    category: "Information",
    aliases: [ "up" ],
    description: "Get Uptime Of Bot",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
     
     let days = Math.floor(client.uptime / 86400000 );

    let hours = Math.floor(client.uptime / 3600000 ) % 24;

    let minutes = Math.floor(client.uptime / 60000) % 60;

    let seconds = Math.floor(client.uptime / 1000) % 60;  

     let uptime = `${days}d, ${hours}h , ${minutes}m, ${seconds}s`;
         
const emk = new MessageEmbed()
.setAuthor({name: client.user.username +"'s Uptime", iconURL: client.user.displayAvatarURL()})
.setThumbnail(`${client.user.displayAvatarURL()}`) 

.setDescription(`\`${uptime}\``)
      .setColor(client.embedColor)
.setTimestamp()
    message.reply({embeds: [emk]})  
    },
};