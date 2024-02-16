const tmi = require("tmi.js");
const etoile = "*";

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: "syberrs_bot",
    password: "oauth:c55u1e9teu1x61svt7zbwux4p6blas",
  },
  channels: ["falloxx_"],
});

client.connect();

let compteurMessage = 0;

client.on("message", (channel, tags, message, self) => {
  if (self && message.toLowerCase().includes(`pong!`)) {
    client.say(channel, `banane!`);
  }

  if (self) return;

  if (message.toLowerCase() === "!hello") {
    client.say(channel, `@${tags.username}, heya!`);
  }

  if (message.toLowerCase() === "!ping") {
    client.say(channel, `@${tags.username}, pong!`);
  }

  if (message.startsWith(etoile)) {
    let compteurMot = message.split(" ").length;
    client.say(channel, `Nombre de mots: ${compteurMot}!`);
  }

  compteurMessage += 1;

  if (message.toLowerCase() === "!message") {
    client.say(channel, `Nombre de messages:${compteurMessage}!`);
  }
});
