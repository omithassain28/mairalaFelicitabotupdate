const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "autoplay",
  aliases: ["ap"],
  category: "Music",
  description: "Toggle music autoplay.",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  player: true,
  inVoiceChannel: true,
  sameVoiceChannel: true,
  execute: async (message, args, client, prefix) => {
    const player = client.manager.get(message.guild.id);

    const autoplay = player.get("autoplay");

    const emojireplay = client.emoji.autoplay;

    if (!player.queue.current)
      return message.reply({
        content: `<:autoplay:1213063170512519200> | Please play a song before using this command.`,
      });
    
    

    if (autoplay) {
      player.set("autoplay", false);
      let thing = new MessageEmbed()
        .setColor(client.embedColor)
      
        .setDescription(`<:autoplay:1213063170512519200> | Disabled autoplay.`);
      return message.channel.send({ embeds: [thing] });
    } else {
      const identifier = player.queue.current.identifier;
      player.set("autoplay", true);
      player.set("requester", client.user);
      player.set("identifier", identifier);
      const search = `https://www.youtube.com/watch?v=${identifier}&list=RD${identifier}`;
      const res = await player.search(search, message.author);
      player.queue.add(
        res.tracks[Math.floor(Math.random() * res.tracks.length) ?? 1]
      );
      let thing = new MessageEmbed()
        .setColor(client.embedColor)
        
        .setDescription(`<:autoplay:1213063170512519200> | Successfully enabled autoplay.`);

      return message.channel.send({ embeds: [thing] });
    }
  },
};
