const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  run: async (client, message, args) => {
    const helpembed = new MessageEmbed()
    .setTitle("HELP COMMANDS")
    .setDescription(" **setlogchannel**: Log kanalını ayarlamak için \n```Kullanım: !setlogchannel #channel```\n**Uptime**: Botların çalışma süresi elde etmek için \n```Kullanım: !uptime```")
    .setColor("GREEN")
    message.channel.send(helpembed)
    
    
    
    
  }}