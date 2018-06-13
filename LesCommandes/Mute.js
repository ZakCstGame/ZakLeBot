module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Hehee petit chanapant, il te faut quelques permissions pour faire ceci ..");

	let toMute = message.mentions.members.first() || message.guild.members.get(args[0]); 
	if(!toMute) return message.channel.send("Il faut mentionner quelqu'un Bro");
	
	if(toMute.id === message.author.id) return message.channel.sendMessage("Tu ne peux pas te Mute toi meme, ololooo vraiment un 7mar toi !");
	if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("Ha lui tu ne peux pas le test ptit frere, oublie !");

	let role = message.guild.roles.find(r => r.name === "TG Tu es Muted");
	if(!role) {
		try {
			role = await message.guild.createRole({
				name: "TG Tu es Muted",
				color: "#36393F",
				permissions: []
			});

			message.guild.channels.forEach(async (channel, id) => {
				await channel.overwritePermissions(role, {
					SEND_MESSAGES: false,
					ADD_REACTIONS: false
			});
		});
		} catch(e) {
			console.log(e.stack);
		}
	}

	if(toMute.roles.has(role.id)) return message.channel.sendMessage("Il est deja Muted, tu veux quoi de plus Enfwarey !?");
	
	await toMute.addRole(role);
	message.channel.send("c'est fait, Je l'ai Mute !");
}

module.exports.help = {
	name: "Mute"
}