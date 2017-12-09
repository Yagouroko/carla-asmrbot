const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = (".");

bot.on('ready', function() {
    bot.user.setGame("By MhBurgerKing. Command: .help");
    console.log("Le bot a bien ete connecte");
});

bot.login("Mzg4NzM2NzY2MzU5NjMzOTIx.DQ1VwQ.bBA9lVDyF6G4q33wPkDlfuNUyKY");


bot.on('message', message => {
    if (message.content(prefix + "help")){
        message.channel.sendMessage("Test: \n -.help");
    }
});

