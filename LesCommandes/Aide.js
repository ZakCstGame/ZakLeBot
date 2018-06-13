const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) =>{

	let help_embed = new Discord.RichEmbed()
		.setColor(0xFFC256)
		.setThumbnail(message.author.avatarURL)
		.setDescription("Je suis le meilleur bot, ramene moi n'importe quelle machine tu verra ..")
		.addField("Voici les commandes du bot :", ".aide pour afficher les commandes du bot !")
		.addField("INTERACTiONS :", ".zak suivis d'une question ?")
		.addField("*Info", "Le bot vous envoie des informations sur votre profile")
		.setFooter("Menu d'aide est en cours de reglage .. relax enfwarey")
	message.channel.sendMessage(help_embed);
}

module.exports.help = {
	name: "Aide"
}
