const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "invite",
  category: "Information",
  aliases: ["addme", "i", "inv"],
  description: "Invite Bot",
  args: false,
  usage: "",
  permission: [],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Invite")
        .setStyle("LINK")
        .setEmoji("🔗")
        .setURL(`https://discord.gg/k7euMVR4q6`),
      new MessageButton()
        .setLabel("Support")
        .setStyle("LINK")
        .setEmoji("🔗")
        .setURL("https://discord.gg/k7euMVR4q6"),
    );

    const mainPage = new MessageEmbed()

      .setAuthor({
        name: `Invite Arezo`,
        iconURL: client.user.displayAvatarURL(),
      })

      .setColor(client.embedColor)
      .setDescription(
        `[Click here](https://discord.gg/k7euMVR4q6) To Invite Or The Below Button To Invite`,
      );
    message.reply({ embeds: [mainPage], components: [row] });
  },
};
