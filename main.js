const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();

var prefix = "$";
var token = "ODc4MDM1MTkxNjUyODMxMjUz.YR7T_g._4quOQcLSQfx5VNVWEGsVPfRfag";

bot.on("guildMemberAdd", member => {

    member.guild.channels.cache.get("846358448526721036").send(`**Bienvenue** à toi <@${member.id}> ! N'hésite pas à aller prendre tes <#${"846356951138697276"}> et venir discuter tranquillement avec nous ! 🎉`).then(
        member.guild.channels.cache.get("864489838903033867").send(`**${member.user.tag}** a rejoint le serveur.`)
    )
}
)

bot.on("guildMemberRemove", member => {
member.guild.channels.cache.get("864489838903033867").send(`**${member.user.tag}** a quitté le serveur.`)
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

