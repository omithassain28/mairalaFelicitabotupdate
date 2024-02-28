require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || "", // your bot token
  prefix: process.env.PREFIX || "*", // bot prefix
  ownerID: process.env.OWNERID || ["823101214564417536"], //your discord id
  mongourl:
    process.env.MONGO_URI ||
    "mongodb+srv://Rakibxox:omit968965@cluster0.lbvtu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // MongoDb URL
  topggapi: "",
  embedColor: process.env.COlOR || "#303037", // embed colour
  logs: process.env.LOGS || "1205476519158489138", // channel id for guild create and delete logs
  langs: process.env.LANGS || "en",
  nodes: [
    {
      host: process.env.NODE_HOST || "103.178.158.190",
      identifer: process.env.NODE_ID || "Main",

      port: parseInt(process.env.NODE_PORT || "1181"),
      password: process.env.NODE_PASSWORD || "shadow",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),
    },
  ],
};

function parseBoolean(value) {
  if (typeof value === "string") {
    value = value.trim().toLowerCase();
  }
  switch (value) {
    case true:
    case "true":
      return true;
    default:
      return false;
  }
}
