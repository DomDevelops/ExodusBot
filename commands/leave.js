// Basic command structure, importing bot, message and the args
exports.run = async (bot, m, args) => {
  
    // Deletes the user's message
    m.delete()
    
    // Checks if the member is in a voice channel
    if(!m.member.voice.channel) return m.channel.send("𝚈𝚘𝚞 𝚊𝚛𝚎 𝚗𝚘𝚝 𝚒𝚗 𝚊 𝚟𝚘𝚒𝚌𝚎 𝚌𝚑𝚊𝚗𝚗𝚎𝚕.");
    
    // Checks if the bot is in a voice channel
    if(!m.guild.me.voice.channel) return m.channel.send("𝙸 𝚊𝚖 𝚗𝚘𝚝 𝚒𝚗 𝚊 𝚟𝚘𝚒𝚌𝚎 𝚌𝚑𝚊𝚗𝚗𝚎𝚕.");
    
    // Checks if the bot and the member are in the same voice channel
    if(m.guild.me.voice.channel.id !== m.member.voice.channel.id) return m.channel.send("𝚆𝚎'𝚛𝚎 𝚗𝚘𝚝 𝚒𝚗 𝚝𝚑𝚎 𝚜𝚊𝚖𝚎 𝚟𝚘𝚒𝚌𝚎 𝚌𝚑𝚊𝚗𝚗𝚎𝚕.");
    
    // Leaves the voice channel if all checks passes
    m.guild.me.voice.channel.leave();
    
    // Tells the member the bot left the voice channel
    m.channel.send("𝙻𝚎𝚏𝚝 𝚝𝚑𝚎 𝚟𝚘𝚒𝚌𝚎 𝚌𝚑𝚊𝚗𝚗𝚎𝚕.");
  }