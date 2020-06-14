

const {MessageEmbed} = require("discord.js");

const bot = new MessageEmbed();

// Basic command structure, importing bot, message and the args
exports.run = async (bot, message, args) => {
    
    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
  
  // Send the commands list
  message.channel.send(
    new MessageEmbed()
      .setTitle("Exodus Uptime")
      .addField("Days", days)
      .addField("Hours", hours)
      .addField("Minutes", minutes)
      .setColor(0x2ECC71)
      .setTimestamp()
      
  )
  
  // Delete the user's message
  message.delete()
  
}
