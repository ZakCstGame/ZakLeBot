module.exports.run = async (bot, message, args) => {
	
	let msg = await message.channel.send("Chargement de l'icone du Serveur, Enfwarey ... ");
	
	if(!message.guild.iconURL) return msg.edit("Pas d'icone, Enfwarey !");
	
	await message.channel.send({files: [
		{
			attachment: message.guild.iconURL,
			name: "icon.png"
		}
	]});

	msg.delete();
}

module.exports.help = {
	name: "Icon"
}