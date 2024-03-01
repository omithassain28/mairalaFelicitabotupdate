const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { convertTime } = require("../../utils/convert.js");
const i18n = require("../../utils/i18n");

module.exports = async (client, player, track, payload) => {
  const emojiplay = client.emoji.play;
  const volumeEmoji = client.emoji.volumehigh;
  const emojistop = client.emoji.stop;
  const emojipause = client.emoji.pause;
  const emojiresume = client.emoji.resume;
  const emojiskip = client.emoji.skip;

  const thing = new MessageEmbed()
    .setDescription(
      `${i18n.__("cmd.play.embed")}\n [${track.title}](https://discord.gg/k7euMVR4q6)  \n\n\`🕧 ${convertTime(track.duration)}\n\`
<:online:1210253399031812147> **Requester**\n${track.requester.tag}`,
    )

    .setThumbnail(
      track?.thumbnail ??
        (await client.manager.getMetaThumbnail(track?.uri ?? queue.uri)),
    )
    .setFooter("king <3")
    .setColor(client.embedColor)
    .setTimestamp();
  const But1 = new MessageButton()
    .setEmoji("<:vdown:1213034736654753843>")
    .setCustomId("vdown")
    .setStyle("SECONDARY");

  const But2 = new MessageButton()
    .setEmoji("<:online:1210253399031812147>")
    .setCustomId("stop")
    .setStyle("SECONDARY");

  const But3 = new MessageButton()
    .setCustomId("pause")
    .setEmoji("<:online:1210253399031812147>")
    .setStyle("SECONDARY");

  const But4 = new MessageButton()
    .setCustomId("skip")
    .setEmoji("<:online:1210253399031812147>")
    .setStyle("SECONDARY");

  const But5 = new MessageButton()
    .setCustomId("vup")
    .setEmoji("<:online:1210253399031812147>")
    .setStyle("SECONDARY");

  const row = new MessageActionRow().addComponents(
    But1,
    But2,
    But3,
    But4,
    But5,
  );

  let NowPlaying = await client.channels.cache
    .get(player.textChannel)
    .send({ embeds: [thing], components: [row] });
  player.setNowplayingMessage(NowPlaying);

  const embed = new MessageEmbed().setColor(client.embedColor).setTimestamp();
  const collector = NowPlaying.createMessageComponentCollector({
    filter: (b) => {
      if (
        b.guild.me.voice.channel &&
        b.guild.me.voice.channelId === b.member.voice.channelId
      )
        return true;
      else {
        b.reply({
          content: `${i18n.__mf("but.vcmst", { Vc: b.guild.me.voice.channel })}`,
          ephemeral: true,
        });
        return false;
      }
    },
    time: track.duration,
  });
  collector.on("collect", async (i) => {
    await i.deferReply({
      ephemeral: false,
    });
    if (i.customId === "vdown") {
      if (!player) {
        return collector.stop();
      }
      let amount = Number(player.volume) - 10;
      await player.setVolume(amount);
      i.editReply({
        embeds: [
          embed
            .setAuthor({
              name: i.member.user.tag,
              iconURL: i.member.user.displayAvatarURL({ dynamic: true }),
            })
            .setDescription(
              `${volumeEmoji} ${i18n.__("cmd.vol.embed")} **${amount}**`,
            ),
        ],
      }).then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 10000);
      });
    } else if (i.customId === "stop") {
      if (!player) {
        return collector.stop();
      }
      await player.stop();
      await player.queue.clear();
      i.editReply({
        embeds: [
          embed
            .setAuthor({
              name: i.member.user.tag,
              iconURL: i.member.user.displayAvatarURL({ dynamic: true }),
            })
            .setDescription(`${emojistop} ${i18n.__("cmd.stop.embed")}`),
        ],
      }).then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 10000);
      });
      return collector.stop();
    } else if (i.customId === "pause") {
      if (!player) {
        return collector.stop();
      }
      player.pause(!player.paused);
      const Text = player.paused
        ? `${emojipause} **Paused**`
        : `${emojiresume} **Resumed**`;
      i.editReply({
        embeds: [
          embed
            .setAuthor({
              name: i.member.user.tag,
              iconURL: i.member.user.displayAvatarURL({ dynamic: true }),
            })
            .setDescription(
              `${Text} \n[${player.queue.current.title}](${player.queue.current.uri})`,
            ),
        ],
      }).then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 10000);
      });
    } else if (i.customId === "skip") {
      if (!player) {
        return collector.stop();
      }
      await player.stop();
      i.editReply({
        embeds: [
          embed
            .setAuthor({
              name: i.member.user.tag,
              iconURL: i.member.user.displayAvatarURL({ dynamic: true }),
            })
            .setDescription(
              `${emojiskip} ${i18n.__("cmd.skip.embed")}\n[${player.queue.current.title}](https://discord.gg/k7euMVR4q6)`,
            ),
        ],
      }).then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 10000);
      });
      if (track.length === 1) {
        return collector.stop();
      }
    } else if (i.customId === "vup") {
      if (!player) {
        return collector.stop();
      }
      let amount = Number(player.volume) + 10;
      if (amount >= 150)
        return i
          .editReply({
            embeds: [
              embed
                .setAuthor({
                  name: i.member.user.tag,
                  iconURL: i.member.user.displayAvatarURL({ dynamic: true }),
                })
                .setDescription(`${i18n.__("cmd.vol.embed2")}`),
            ],
          })
          .then((msg) => {
            setTimeout(() => {
              msg.delete();
            }, 10000);
          });
      await player.setVolume(amount);
      i.editReply({
        embeds: [
          embed
            .setAuthor({
              name: i.member.user.tag,
              iconURL: i.member.user.displayAvatarURL({ dynamic: true }),
            })
            .setDescription(
              `${volumeEmoji} ${i18n.__("cmd.vol.embed")} **${amount}**`,
            ),
        ],
      }).then((msg) => {
        setTimeout(() => {
          msg.delete();
        }, 10000);
      });
      return;
    }
  });
};
