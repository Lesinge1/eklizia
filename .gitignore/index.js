const Discord = require("discord.js");
	
const TOKEN = "NDk4NzgyNzEwNTcyMTIyMTMy.DqIyQQ.3eWo18oGSeOi9CgI-5QChtmlsf8";
const PREFIX = ";";

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    bot.user.setGame("https://eklizia.thost.tk/")
    bot.user.setStatus("online");
    console.log("Ready");
});



bot.on("message", function(message) {
    
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
            message.channel.sendMessage("Toutes les informations sont disponibles dans un salon didié.");
            break;
        case "screens":
            message.channel.sendMessage('Par défaut , nos tournois se déroulent en 3 gamesA la fin de chaque game vous devrez remplir les formulaires présent dans ##formulaire-game-1-:tulip:  ##formulaire-game-2-:hibiscus:  ##formulaire-game-3-');
            break;
        case "heures":
         message.channel.sendMessage("le tournois commencera de 15h30 jusqu'à 17h30 pour tous les modes Solo/Duo/Squad Game illimitées entre 15h30 et 17h30");
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .addField("`screens` - Ou envoyer les screens?")
                .addField("Autres", "`info` - Avoir des informations \n `heures` - heure des tournois")
                .addField("Liens", "[Twitch](https://www.twitch.tv/eklizia_tournament) \n [Site](https://eklizia.thost.tk/) \n [discord GNS](https://discord.gg/jhkYXp)")
                .setAuthor("Eklizia Tournament", "https://cdn.discordapp.com/attachments/485479483890204682/499218691737780234/image0.png")
                .setColor("#01AEE3")
                .setFooter("Crer par Singe#7427")
                .setThumbnail(message.author.avatarURL)
                .setTimestamp()
            message.channel.sendEmbed(embed);
            break;
        case "kick":
            if (!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")) {
            var embed = new Discord.RichEmbed()
                .setTitle("Erreur")
                .setDescription("Tu n'as pas la permission de kick !")
                .setAuthor("Eklizia Tournament", "https://cdn.discordapp.com/attachments/485479483890204682/499218691737780234/image0.png")
                .setColor("#B9121B")
                .setFooter("Crer par Singe#7427")
                .setTimestamp()
            message.channel.sendEmbed(embed);
        }else{ 
            var memberkick = message.mentions.users.first();
            console.log(memberkick)
            console.log(message.guild.member(memberkick).kickable)
            if(!memberkick){
               var embed = new Discord.RichEmbed()
                   .setTitle("Erreur")
                   .setDescription("L'utilisateur n'existe pas !")
                   .setAuthor("Eklilzia Tournament", "https://cdn.discordapp.com/attachments/485479483890204682/499218691737780234/image0.png")
                   .setColor("#B9121B")
                   .setFooter("Crer par Singe#7427")
                   .setTimestamp()
               message.channel.sendEmbed(embed);
        }else{
            if(!message.guild.member(memberkick).kickable){
                var embed = new Discord.RichEmbed()
                    .setTitle("Erreur")
                    .setDescription("Impossible de kick l'utilisateur")
                    .setAuthor("Eklizia Tournament", "https://cdn.discordapp.com/attachments/485479483890204682/499218691737780234/image0.png")
                    .setColor("#B9121B")
                    .setFooter("Crer par Singe#7427")
                    .setTimestamp()
                message.channel.sendEmbed(embed);
        }else{
            message.guild.member(memberkick).kick().then((member) => {
                var embed = new Discord.RichEmbed()
                    .setTitle("Succés")
                    .setDescription(`${member.displayName} à étais kick avec succés !`)
                    .setAuthor("Eklizia Tournament", "https://cdn.discordapp.com/attachments/485479483890204682/499218691737780234/image0.png")
                    .setColor("#96CA2D")
                    .setFooter("Crer par Singe#7427")
                    .setTimestamp()
                message.channel.sendEmbed(embed);
            }).catch(() => {
                var embed = new Discord.RichEmbed()
                    .setTitle("Erreur")
                    .setDescription("Le kick à étais refuser !")
                    .setAuthor("Eklizia Tournament", "https://cdn.discordapp.com/attachments/485479483890204682/499218691737780234/image0.png")
                    .setColor("#B9121B")
                    .setFooter("Crer par Singe#7427")
                    .setTimestamp()
                message.channel.sendEmbed(embed);
            })
            }
        }
        }
        break;
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == "Bonjour") {
        message.channel.sendMessage("Hey, comment ça va ?");
    }

    if (message.content == "Combien de games") {
        message.channel.sendMessage("Games illimité entre 15h30 et 17h30.");    
    }
    
    if (message.content == "a quand les résultats?") {
        message.channel.sendMessage("1H aprés la fin du tournois."); 
    }

    if (message.content == "C'est en parties publique ou privée?") {
        message.channel.sendMessage("Les parties sont en publique."); 
    }

    if (message.content == "Comment rejoindre une partie?") {
        message.channel.sendMessage("Vou devez lancer des games normal entre 15h30 et 17h30."); 
    }

    if (message.content == "Pourquoi vous ne faites pas de parties privées?") {
        message.channel.sendMessage("Les parties privées sont interdites pour les communautées."); 
    }

    if (message.content == "Esqu'il y a un cash prize") {
        message.channel.sendMessage("Si il y en a une annonce sera faites."); 
    }

    if (message.content == "Salut") {
        message.channel.sendMessage("Hey, comment vas-tu ?");
    }

        if(message.content.includes('Bonjour') || message.content.includes('bonjour') || message.content.includes('Coucou') || message.content.includes('coucou') || message.content.includes('yo') || message.content.includes('Yo')){
            if(message.channel.name = "general") {
                message.channel.sendMessage("Salut, comment Ã§a va ?");
            }else{
                if(message.content.includes('Bonjour') || message.content.includes('bonjour') || message.content.includes('Coucou') || message.content.includes('coucou') || message.content.includes('yo') || message.content.includes('Yo')){
            if(message.channel.name = "general") {
   
            }
        }
                //ignore
            }

    }
});

bot.login(TOKEN);
