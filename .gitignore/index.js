const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = ".";
bot.on('ready', function() {
    bot.user.setGame("CarlaAsmrBot, .help");
    console.log("Le bot a bien ete connecte");
});


bot.on('message', message => {
    if(message.content[0] === PREFIX) {
        if(message.content === '.help') {
            message.channel.send('Liste des commandes: .insta , .youtube , / Ce bot contient des commandes cachées :)');
        
        
        }
    }
});

bot.login("Mzg4NzM2NzY2MzU5NjMzOTIx.DQ1VwQ.bBA9lVDyF6G4q33wPkDlfuNUyKY");
