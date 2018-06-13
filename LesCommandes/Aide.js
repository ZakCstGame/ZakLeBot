const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) =>{

	let help_embed = new Discord.RichEmbed()
		.setColor(0xFFCCFF)
		.setThumbnail(message.author.avatarURL)
		.setDescription("Hey bro, voici les commandes du moment : _(ATTENTiON AUX MAJUSCULES ET LE PREFiX C'EST UN POiNT . )_ ")
		.addField(".Aide :", "C'est pour afficher les commandes du bot !")
		.addField(".MonAvatar :", "C'est pour afficher l'image de ton avatar")
		.addField(".Moi :", "C'est pour découvrir les informations de ton profile")
		.setFooter("_Menu d'aide est en cours de reglage .. relax enfwarey_")
	message.channel.sendMessage(help_embed);
}

module.exports.help = {
	name: "Aide"
}
