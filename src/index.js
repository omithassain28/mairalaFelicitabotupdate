const MusicBot = require("./structures/MusicClient");
const Topgg = require("@top-gg/sdk");
const client = new MusicBot();
client.topgg = new Topgg.Api(
  "const MusicBot = require("./structures/MusicClient");
const Topgg = require("@top-gg/sdk");
const client = new MusicBot();
client.topgg = new Topgg.Api(
  "const MusicBot = require("./structures/MusicClient");
const Topgg = require("@top-gg/sdk");
const client = new MusicBot();
client.topgg = new Topgg.Api(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0NTAwMzkzNzU0NTcyODAyMSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ4Mzg2MTA4fQ.Yfbrnwfy1SwNIFyZjt5JtOzFiDEFRbkVxyr62PM3VEs",
);
client.connect();

const http = require("http");
http
  .createServer(function (req, res) {
    res.write("king Is Alive");
    res.end();
  })
  .listen(8080);
const { MessageEmbed } = require("discord.js");

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  let options = interaction.values;
  const funny = options[0];

  if (funny === "sixth") {
    const embed6 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(
        "`serverinfo, servericon, avatar, emojilist, firstmsg, membercount, list-roles`",
      )
      .setAuthor("Utility Commands")
      .setColor(client.embedColor)
      .setFooter("king");

    interaction.reply({ embeds: [embed6], ephemeral: true });
    return;
  }

  if (funny === "first") {
    const embed1 = new MessageEmbed()
      .setColor(client.embedColor)
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription("`help, invite, ping, node, stats, uptime,`")
      .setAuthor("Information Commands")
      .setColor(client.embedColor)
      .setFooter("Feel the Quality of king Music");
    interaction.reply({ embeds: [embed1], ephemeral: true });
    return;
  }

  if (funny === "fourth") {
    const embed2 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription("`filters`")
      .setAuthor("Filter Commands")

      .setColor(client.embedColor)
      .setFooter("king");

    interaction.reply({ embeds: [embed2], ephemeral: true });
    return;
  }

  if (funny === "second") {
    const embed4 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(
        "`autoplay, clearqueue, join, leave, loop, nowplaying, pause, play, volume, destroy, queue, resume, shuffle, skip, stop`",
      )
      .setAuthor("Music Commands")
      .setColor(client.embedColor)
      .setFooter("king");

    interaction.reply({ embeds: [embed4], ephemeral: true });
    return;
  }

  if (funny === "fifth") {
    const embed5 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription("`24/7, setprefix, destroy`")
      .setAuthor("Settings")
      .setColor(client.embedColor)
      .setFooter("king");
    interaction.reply({ embeds: [embed5], ephemeral: true });
    return;
  }

  if (funny === "third") {
    const embed3 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .addField(
        "Information Commands [ 6 ]",
        "`help, invite, ping, node, stats, uptime`",
      )
      .addField(
        "Utility Commands [ 7 ]",
        "`serverinfo, servericon, avatar, emojilist, firstmsg, membercount, list-roles`",
      )

      .addField(
        "Music Commands [ 15 ] ",
        "`autoplay, clearqueue, join, leave, loop, nowplaying, pause, play, volume, destroy, queue, resume, shuffle, skip, stop`",
      )
      .addField("Filters Commands [1]", "`Filters`")
      .addField("Settings [ 3 ]", "`24/7, setprefix, destroy`")

      .setAuthor("All Commands:")
      .setColor(client.embedColor)
      .setFooter("Thanks For Using Me");
    interaction.reply({ embeds: [embed3], ephemeral: true });
    return;
  }
});

// Function to restart the bot
const restartBot = () => {
    console.log("Restarting bot...");
    // Disconnect any existing connections or resources
    client.destroy();
    // Reconnect by creating a new instance of the bot
    const newClient = new MusicBot();
    newClient.topgg = new Topgg.Api("YOUR_TOPGG_API_KEY");
    // Connect the new instance
    newClient.connect();
    // Set up auto-restart again for the next time
    setTimeout(restartBot, 60000); // Restart after 1 minute (60000 milliseconds)
};

// Initial setup for auto-restart
setTimeout(restartBot, 60000); // Restart after 1 minute (60000 milliseconds)
",
);
client.connect();

const http = require("http");
http
  .createServer(function (req, res) {
    res.write("king Is Alive");
    res.end();
  })
  .listen(8080);
const { MessageEmbed } = require("discord.js");

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  let options = interaction.values;
  const funny = options[0];

  if (funny === "sixth") {
    const embed6 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(
        "`serverinfo, servericon, avatar, emojilist, firstmsg, membercount, list-roles`",
      )
      .setAuthor("Utility Commands")
      .setColor(client.embedColor)
      .setFooter("king");

    interaction.reply({ embeds: [embed6], ephemeral: true });
    return;
  }

  if (funny === "first") {
    const embed1 = new MessageEmbed()
      .setColor(client.embedColor)
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription("`help, invite, ping, node, stats, uptime,`")
      .setAuthor("Information Commands")
      .setColor(client.embedColor)
      .setFooter("Feel the Quality of king Music");
    interaction.reply({ embeds: [embed1], ephemeral: true });
    return;
  }

  if (funny === "fourth") {
    const embed2 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription("`filters`")
      .setAuthor("Filter Commands")

      .setColor(client.embedColor)
      .setFooter("king");

    interaction.reply({ embeds: [embed2], ephemeral: true });
    return;
  }

  if (funny === "second") {
    const embed4 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(
        "`autoplay, clearqueue, join, leave, loop, nowplaying, pause, play, volume, destroy, queue, resume, shuffle, skip, stop`",
      )
      .setAuthor("Music Commands")
      .setColor(client.embedColor)
      .setFooter("king");

    interaction.reply({ embeds: [embed4], ephemeral: true });
    return;
  }

  if (funny === "fifth") {
    const embed5 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription("`24/7, setprefix, destroy`")
      .setAuthor("Settings")
      .setColor(client.embedColor)
      .setFooter("king");
    interaction.reply({ embeds: [embed5], ephemeral: true });
    return;
  }

  if (funny === "third") {
    const embed3 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .addField(
        "Information Commands [ 6 ]",
        "`help, invite, ping, node, stats, uptime`",
      )
      .addField(
        "Utility Commands [ 7 ]",
        "`serverinfo, servericon, avatar, emojilist, firstmsg, membercount, list-roles`",
      )

      .addField(
        "Music Commands [ 15 ] ",
        "`autoplay, clearqueue, join, leave, loop, nowplaying, pause, play, volume, destroy, queue, resume, shuffle, skip, stop`",
      )
      .addField("Filters Commands [1]", "`Filters`")
      .addField("Settings [ 3 ]", "`24/7, setprefix, destroy`")

      .setAuthor("All Commands:")
      .setColor(client.embedColor)
      .setFooter("Thanks For Using Me");
    interaction.reply({ embeds: [embed3], ephemeral: true });
    return;
  }
});

// Function to restart the bot
const restartBot = () => {
    console.log("Restarting bot...");
    // Disconnect any existing connections or resources
    client.destroy();
    // Reconnect by creating a new instance of the bot
    const newClient = new MusicBot();
    newClient.topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0NTAwMzkzNzU0NTcyODAyMSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ4Mzg2MTA4fQ.Yfbrnwfy1SwNIFyZjt5JtOzFiDEFRbkVxyr62PM3VEs");
    // Connect the new instance
    newClient.connect();
    // Set up auto-restart again for the next time
    setTimeout(restartBot, 60000); // Restart after 1 minute (60000 milliseconds)
};

// Initial setup for auto-restart
setTimeout(restartBot, 60000); // Restart after 1 minute (60000 milliseconds)
",
);
client.connect();

const http = require("http");
http
  .createServer(function (req, res) {
    res.write("king Is Alive");
    res.end();
  })
  .listen(8080);
const { MessageEmbed } = require("discord.js");

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isSelectMenu()) return;

  let options = interaction.values;
  const funny = options[0];

  if (funny === "sixth") {
    const embed6 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(
        "`serverinfo, servericon, avatar, emojilist, firstmsg, membercount, list-roles`",
      )
      .setAuthor("Utility Commands")
      .setColor(client.embedColor)
      .setFooter("king");

    interaction.reply({ embeds: [embed6], ephemeral: true });
    return;
  }

  if (funny === "first") {
    const embed1 = new MessageEmbed()
      .setColor(client.embedColor)
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription("`help, invite, ping, node, stats, uptime,`")
      .setAuthor("Information Commands")
      .setColor(client.embedColor)
      .setFooter("Feel the Quality of king Music");
    interaction.reply({ embeds: [embed1], ephemeral: true });
    return;
  }

  if (funny === "fourth") {
    const embed2 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription("`filters`")
      .setAuthor("Filter Commands")

      .setColor(client.embedColor)
      .setFooter("king");

    interaction.reply({ embeds: [embed2], ephemeral: true });
    return;
  }

  if (funny === "second") {
    const embed4 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(
        "`autoplay, clearqueue, join, leave, loop, nowplaying, pause, play, volume, destroy, queue, resume, shuffle, skip, stop`",
      )
      .setAuthor("Music Commands")
      .setColor(client.embedColor)
      .setFooter("king");

    interaction.reply({ embeds: [embed4], ephemeral: true });
    return;
  }

  if (funny === "fifth") {
    const embed5 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription("`24/7, setprefix, destroy`")
      .setAuthor("Settings")
      .setColor(client.embedColor)
      .setFooter("king");
    interaction.reply({ embeds: [embed5], ephemeral: true });
    return;
  }

  if (funny === "third") {
    const embed3 = new MessageEmbed()
      .setThumbnail(client.user.displayAvatarURL())
      .addField(
        "Information Commands [ 6 ]",
        "`help, invite, ping, node, stats, uptime`",
      )
      .addField(
        "Utility Commands [ 7 ]",
        "`serverinfo, servericon, avatar, emojilist, firstmsg, membercount, list-roles`",
      )

      .addField(
        "Music Commands [ 15 ] ",
        "`autoplay, clearqueue, join, leave, loop, nowplaying, pause, play, volume, destroy, queue, resume, shuffle, skip, stop`",
      )
      .addField("Filters Commands [1]", "`Filters`")
      .addField("Settings [ 3 ]", "`24/7, setprefix, destroy`")

      .setAuthor("All Commands:")
      .setColor(client.embedColor)
      .setFooter("Thanks For Using Me");
    interaction.reply({ embeds: [embed3], ephemeral: true });
    return;
  }
});

// Function to restart the bot
const restartBot = () => {
    console.log("Restarting bot...");
    // Disconnect any existing connections or resources
    client.destroy();
    // Reconnect by creating a new instance of the bot
    const newClient = new MusicBot();
    newClient.topgg = new Topgg.Api("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0NTAwMzkzNzU0NTcyODAyMSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjQ4Mzg2MTA4fQ.Yfbrnwfy1SwNIFyZjt5JtOzFiDEFRbkVxyr62PM3VEs");
    // Connect the new instance
    newClient.connect();
    // Set up auto-restart again for the next time
    setTimeout(restartBot, 60000); // Restart after 1 minute (60000 milliseconds)
};

// Initial setup for auto-restart
setTimeout(restartBot, 60000); // Restart after 1 minute (60000 milliseconds)
