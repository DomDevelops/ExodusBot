// Client class extraction from the discord.js library/package
const { Client } = require("discord.js");

// Initialization of the bot variable using a new Client
const bot = new Client();

bot.login("NzA5MDkxNTY2MTYwOTY5NzI5.XuXD9Q.9yslks5L-0K_PoHRa5SjXRBOXcs");

// ExistsSync function extraction from the fs library/package
const { existsSync } = require("fs");

// Creates a new Map to store music data in
const active = new Map();



// The event that fires when the bot recieves a message
bot.on("message", async message => {
  // Checks if the author isn't a bot
  if (message.author.bot) return;

  // Checks if the message starts with the prefix
  if (!message.content.startsWith(process.env.Bot_Prefix)) return;

  // Checks if the command is run in a server
  if (message.channel.type != "text")
    return message.reply("𝚈𝚘𝚞 𝚌𝚊𝚗 𝚘𝚗𝚕𝚢 𝚞𝚜𝚎 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝚒𝚗 𝚊 𝚜𝚎𝚛𝚟𝚎𝚛.");

  // Defines the arguments in the command
  let args = message.content
    .slice(process.env.Bot_Prefix.length)
    .trim()
    .split(/ +/g);

  // Defines the path to the command
  let path = `./commands/${args.shift().toLowerCase()}.js`;

  // Checks if the command exists
  if (!existsSync(path)) return;

  // Defines the command if it exists
  const command = require(path);

  // Runs the command with the variables: bot, message, args & active
  command.run(bot, message, args, active);
  console.log(bot.uptime);
});

// Simple webserver that redirects you to the bot invite page
require("express")()
  .use("/", async (q, r) => r.redirect(await bot.generateInvite()))
  .listen(1234);