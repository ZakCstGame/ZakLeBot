const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) =>{

	let moi_embed = new Discord.RichEmbed()
		.setAuthor(message.author.username)
		.setDescription("ça c'est toi Enfwarey, c'est tes infos !")
		.setColor(0x9B59B6)
		.addField(":id:", message.author.id)
		.addField("Cree le :", message.author.createdAt);
	
	message.channel.sendEmbed(moi_embed);
}

module.exports.help = {
	name: "Moi"
}
