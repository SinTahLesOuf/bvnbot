const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();

var prefix = "$";
var token = process.env.TOKEN

bot.on('message',() => {
    if(message.content.includes("UwU") {
       message.delete()
       message.channel.send("Votre message a été supprimé car il contenait un mot banni.")
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

