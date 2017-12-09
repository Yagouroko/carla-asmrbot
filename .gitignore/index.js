const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("CarlaAsmrBot, !help");
    console.log("Le bot a bien ete connecte");
});

bot.login("Mzg4NzM2NzY2MzU5NjMzOTIx.DQ1VwQ.bBA9lVDyF6G4q33wPkDlfuNUyKY");

bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '!help') {
            message.reply('Aucune commande disponible actuellement.');
        }
    }
});
