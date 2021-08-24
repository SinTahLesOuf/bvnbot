const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();

var prefix = "$";
var token = process.env.TOKEN

bot.on('message',() => {
    
    let user = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author;
    let avatar = user.avatarURL({ dynamic: true, size: 1024 });
    
    if(message.content.includes("UwU")) {
       message.delete()
       message.channel.send("Votre message a été supprimé car il contenait un mot banni.")
       }
       
    if(message.content.startsWith(prefix + "pp")) {
        let PP = new Discord.MessageEmbed()
        .setAuthor(`Voici l'avatar de ${user}`)
        .setImage(avatar)
        .setFooter(`Requis par ${message.author.tag}`)
        
        message.delete()
        message.channel.send(PP)
    }
})

bot.on('ready',() => {

let statuses = [
    `By SinFR`,
    `.gg/agarthafr`
]

setInterval(function() {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {type: "STREAMING", url: 'https://www.twitch.tv/sinfr_'});
}, 10000)
})

bot.login(token);

