const { MessageEmbed } = require("discord.js");
const { post } = require("node-superfetch");

module.exports = {
  name: "eval",
  category: "Owner",
  description: "Eval Code",
  aliases: [ "ev" ],
  args: false,
  usage: "<string>",
  permission: [],
  owner: true,
  execute: async (message, args, client, prefix) => {
    const embed = new MessageEmbed().addField(
      "<:dwnld_icons:1199965654225256450> Input",
      "```js\n" + args.join(" ") + "```"
    );

    try {
      const code = args.join(" ");
      if (!code) return message.channel.send("Please include the code.");
      let evaled;

      if (
        code.includes(`SECRET`) ||
        code.includes(`TOKEN`) ||
        code.includes("process.env")
      ) {
        evaled = "Chal Bhosdike :]";
      } else {
        evaled = await eval(code);
      }

      if (typeof evaled !== "string")
        evaled = await require("util").inspect(evaled, { depth: 0 });

      let output = clean(evaled);
      if (output.length > 1024) {
        const { body } = await post("https://hastebin.com/documents").send(
          output
        );
        embed
          .addField("<:icons_archive:1199965775457423370> Output", `https://hastebin.com/${body.key}.js`)
          .setColor(client.embedColor);
      } else {
        embed
          .addField("<:icons_archive:1199965775457423370> Output", "```js\n" + output + "```")
          .setColor(client.embedColor);
      }

      message.channel.send({ embeds: [embed] });
    } catch (error) {
      let err = clean(error);
      if (err.length > 1024) {
        const { body } = await post("https://hastebin.com/documents").send(err);
        embed
          .addField("<:icons_archive:1199965775457423370> Output", `https://hastebin.com/${body.key}.js`)
          .setColor("RED");
      } else {
        embed.addField("<:icons_archive:1199965775457423370> Output", "```js\n" + err + "```").setColor("#303037");
      }

      message.channel.send({ embeds: [embed] });
    }
  },
};

function clean(string) {
  if (typeof text === "string") {
    return string
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
  } else {
    return string;
  }
}
