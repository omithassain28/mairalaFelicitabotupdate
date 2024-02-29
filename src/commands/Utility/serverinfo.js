const { MessageEmbed } = require("discord.js");

const moment = require("moment")

const verificationLevels = {

  NONE: "None",

  LOW: "Low",

  MEDIUM: "Medium",

  HIGH: "High",

  VERY_HIGH: "Very High"

}

const booster = {

  NONE: 'Level 0',

  TIER_1: 'Level: 1',

  TIER_2: 'Level: 2',

  TIER_3: 'Level: 3'

}

const disabled = '<:online:1210253399031812147>'

const enabled = '<:online:1210253399031812147>'

module.exports = {
    name: "serverinfo",
    category: "Utility",
    description: "Check Bot",
    aliases: [ "si" ],
    args: false,
    usage: "",
    permission: [],
    voteonly: false,
    owner: false,
    execute: async (message, args, client, prefix) => {

      this.client = client;

      const guild = message.guild;

      const { createdTimestamp, ownerId , description} = guild;

      function checkDays(date) {

        let now = new Date();

        let diff = now.getTime() - date.getTime();

        let days = Math.floor(diff / 86400000);

              return days + (days == 1 ? " day" : " days") + " ago";

      };

      const roles = guild.roles.cache

        .sort((a, b) => b.position - a.position)

        .map(role => role.toString())

        .slice(0, -1)

      let rolesdisplay;

      if (roles.length < 15) {

        rolesdisplay = roles.join(' ')

        if (roles.length < 1) rolesdisplay = "None"

      } else {

        rolesdisplay = `\`Too many roles to show..\``

      }

      if(rolesdisplay.length > 1024)

        rolesdisplay = `${roles.slice(4).join(" ")} \`more..\``

      const members = guild.members.cache

      const channels = guild.channels.cache

      const emojis = guild.emojis.cache

      let data = guild.bannerURL

      if(data){

        return message.reply({embeds: [new MessageEmbed()

          .setColor(client.embedColor)

          .setTitle(`${guild.name}'s Information`)

          .setThumbnail(guild.iconURL({ dynamic: true }))

          .setImage(guild.bannerURL({size: 4096}))

          .addFields([

            {

              name: '__**About**__',

              value: `**Name**: ${guild.name} \n**ID**: ${guild.id} \n**Owner <:online:1210253399031812147>:** <@!${guild.ownerId}> (${guild.ownerId})\n**Created at:** <t:${parseInt(createdTimestamp / 1000)}:R>\n**Members: **${guild.memberCount}`

            },

            {

              name: '__**Server Information**__',

              value: `**Verification Level:** ${verificationLevels[guild.verificationLevel]}\n**Inactive Channel: **${guild.afkChannelId ? `<#${guild.afkChannelId}>` : `${disabled}`}\n**Inactive Timeout: **${guild.afkTimeout/60} mins\n**System Messages Channel: **${guild.systemChannelId ? `<#${guild.systemChannelId}>` : disabled}\n**Boost Bar Enabled: **${guild.premiumProgressBarEnabled ? enabled : disabled}`

            },

            {

              name: '__**Channels**__',

              value: `**Total: ** ${channels.size}\n**Channels: **<:online:1210253399031812147> ${channels.filter(channel => channel.type === 'GUILD_TEXT').size} | <:online:1210253399031812147> ${channels.filter(channel => channel.type === 'GUILD_VOICE').size}`

            },

            {

              name: '__**Emoji Info**__',

              value: `**Regurlar:** ${emojis.filter(emoji => !emoji.animated).size} \n**Animated:** ${emojis.filter(emoji => emoji.animated).size} \n**Total:** ${emojis.size}`

            },

            {

              name: '__**Boost Stats**__',

              value: `${booster[guild.premiumTier]} [<:online:1210253399031812147> ${guild.premiumSubscriptionCount || '0'} Boosts]`

            },

            {

              name: `__**Server Roles**__ [${roles.length}]`,

              value: `${rolesdisplay}`

            }

          ])

                                       .setFooter("𝑲𝒊𝒏𝒈 💖")

          .setTimestamp()

        ]})

      }

  }

};