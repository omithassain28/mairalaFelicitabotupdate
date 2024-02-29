const { MessageEmbed } = require("discord.js");
const { convertTime } = require('../../utils/convert.js');
const { progressbar } = require('../../utils/progressbar.js')

module.exports = {
    name: "nowplaying",
    aliases: ["np"],
    category: "Music",
    description: "Show now playing song",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    player: true,
    inVoiceChannel: false,
    sameVoiceChannel: false,
execute: async (message, args, client, prefix) => {
  
        const player = message.client.manager.get(message.guild.id);

        if (!player.queue.current) {
            let thing = new MessageEmbed()
                .setColor("#303037")
                .setDescription("<:online:1210253399031812147> | There is no music playing.");
            return message.channel.send(thing);
        }
        const song = player.queue.current
        const emojimusic = client.emoji.music;
        var total = song.duration;
        var current = player.position;
        
        let embed = new MessageEmbed()
          
          .setThumbnail(`${message.author.displayAvatarURL()}`)
          .addField(`<:online:1210253399031812147> **Song**`,`[${song.title}](https://discord.gg/k7euMVR4q6)`)
  
  .addField ("<:online:1210253399031812147> **Requester**",`${song.requester}`) 
  
         
          .setImage(`https://img.youtube.com/vi/${song.identifier}/mqdefault.jpg`)

  .addField ("<:online:1210253399031812147> **Duration**", `[ \`${convertTime(current)} / ${convertTime(total)}\` ]`)
  
  .setColor(client.embedColor)

  .setAuthor({name: `| Now Playing`, iconURL: client.user.displayAvatarURL()});
            	
            return message.channel.send({embeds: [embed]})

    }
}
