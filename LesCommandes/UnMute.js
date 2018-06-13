module.exports.run = async (bot, message, args) => {
	if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Tu n'as pas les permission, relax ..");

	let toMute = message.mentions.members.first() || message.guild.member.get(args[0]);
	if(!toMute) return message.channel.send("Mentionne quelqu'un Enfwarey ..");
	
	let role = message.guild.roles.find(r => r.name === "TG Tu es Muted");
	
	if(!role || !toMute.roles.has(role.id)) return message.channel.send("Il n'est pas en Sourdine, c'est bon Enfwarey !!");
	
	await toMute.removeRole(role);
	message.channel.send("c'est fait, Je l'ai unMute !");
}

module.exports.help = {
	name: "UnMute"
}