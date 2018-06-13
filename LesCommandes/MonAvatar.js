let Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
	
	let msg = await message.channel.send("J'essaie de charger ton Foutu AVATAR ... ");
	await message.channel.send({files: [
		{
			attachment: message.author.displayAvatarURL,
			name: "avatar.png"
		}
	]});
	msg.delete();
}

module.exports.help = {
	name: "MonAvatar"
}