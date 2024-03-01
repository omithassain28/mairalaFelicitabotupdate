const { MessageEmbed } = require("discord.js");
const { Manager } = require("erela.js");

// Updated system from a Discord music bot by SudhanPlayz

Manager.extend(
  "Player",
  (Player) =>
    class extends Player {
      /**
       * Sets the currently playing message for future deletion
       * @param {MessageEmbed} message
       */
      setNowPlayingMessage(message) {
        if (this.nowPlayingMessage && !this.nowPlayingMessage.deleted)
          this.nowPlayingMessage.delete();
        return (this.nowPlayingMessage = message);
      }
    }
);
