/* INCLURE */
const Discord = require('discord.js');
/*const Google = require('./LesCommandes/Random/google')
const Play = require('./LesCommandes/Random/play');*/
const commando = require('discord.js-commando');
const bot = new commando.Client();
/*bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/LesCommandes");*/
/* VARIABLES */

const PREFIX = ".";
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('database.json')
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()

var storynumber = db.get("histoires").map("story_value").value();
var randnum = 0;
var fortunes = [
	"Oui",
	"Demande a ton pere",
	"Je ne comprend pas ..",
	"C'est totalement ridicule ..",
	"Pfff .. ",
	"Tu m'as saoulé xSSS",
	"Laisse moi tranquille aussi, non !? ",
	"Non",
	"Peut-etre",
	"Je sais pas frere",
	"Euu..",
	"Biensur",
	"Oui, et !?",
	"NTM",
	"bon, on arrete maintenant ?!",
	"Pourquoi tu veux savoir ?",
	"Il ne vaut mieux pas que tu sache ..",
	"Demande a quelqu'un d'autre",
	"Ba biensur que NON, sale 7mar",
	"Je suis en cours de reglage, je ne saurais pas t'etre tres utile pour l'insant"
];

function generateHex() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

function story_random(min, max) {
	min = Math.ceil(0);
	max = Math.floor(storynumber);
	randnum = Math.floor(Math.random() * (max - min +1) + min);
}

function random(min, max) {
	min = Math.ceil(0);
	max = Math.floor(3);
	randnum = Math.floor(Math.random() * (max - min +1) + min);
};


/* FONCTIONS 

function sendError(message, description) {
	message.channel.send({embed: {
		color: 15158332,
		description: ':middle_finger: ' + description
	}});
}*/
/* COMMANDES et INSTRUCTIONS */

/*bot.on('message', message => {
	if(message.content === '.ZakCstGame') {
            const embed = new Discord.RichEmbed();
            embed.setTitle('Voici ma chaine Yoututbe')
            .setAuthor('Merci pour ton soutiens la Familiana!', 'https://scontent-atl3-1.cdninstagram.com/vp/2fe4a3e66dd72b753cd7ed3ed14a183d/5B97A300/t51.2885-15/e35/30830152_893895250813876_4433143965939662848_n.jpg')
            .setColor(0xF4A460)
            .setDescription("Merci pour ton soutiens la Familiana, j'ai une chaine Youtube où je fais des vidéos Gaming")
            .setFooter('ZakCstGame', 'https://cdn.discordapp.com/attachments/427931248514564127/449675000014700574/image.png')
            .setImage('https://scontent-atl3-1.cdninstagram.com/vp/2fe4a3e66dd72b753cd7ed3ed14a183d/5B97A300/t51.2885-15/e35/30830152_893895250813876_4433143965939662848_n.jpg')
            .setThumbnail("https://discord.gg/cCerN6F")
            .setTimestamp()
            .setURL('https://www.youtube.com/channel/UC88VHjLuOhgautADpcD4pkw');

            embed.addField("SALUT SALAM SHALOM ", "__**MON SERVEUR DiSCORD**__ :", "http://discord.gg/cCerN6F")
            .addField("ZakCstGame est un serveur Familial. Il y'a des gameurs, des petits Youtubeurs et toutes sortes de Broseurs. On accepte tout les frères et sœurs.", "Chez nous tu pourra **discuter** de tout et n'importe quoi : de tout ce qui est lie aux __Jeux__ (notamment Mobile Legends, AoV, PUBG, Fortnite...) et __YouTube__ avec les **joueurs**. Tu peux trouvez des equipes, des coequipiers ou des amis avec lesquels tu pourra jouer et vous classer ensemble. Tu peux aussi **discuter** des strategies, des builds et des astuces pour un certain heros afin d'ameliorer tes competences.")
			.addField("Si tu as une question ?", " ~~N'hésite~~ surtout ~~pas~~ a me demander !! ")
			.addBlankField(true)
            .addField("BiENVENUE !");

            message.channel.send({embed: embed});
        }
});*/

bot.on("ready", async () => {
	console.log(`Jui al frerot ! ${bot.user.username}`);
	bot.user.setPresence({ game: { name: "ZakCstGame on YouTube", type:0} });
});

/*bot.on("guildMemberAdd", member => {
	member.guild.channels.find("name", "tout-ce-qui-se-passe").send(`:hamburger: ${member.user.username} vient de rejoindre la Familiana !`)
});

bot.on("guildMemberRemove", member => {
	member.guild.channels.find("name", "tout-ce-qui-se-passe").send(`:ski: ${member.user.username} vient de quitter la Familiana... `)
});

bot.on("guildMemberAdd", function(member) {
	member.createDM().then(function(channel) {
		channel.send('Bienvenue parmis nous La Familiana, bizoux Enfwarey ' + member.displayName)
	})
	member.guild.channels.find("name", "namek").sendMessage(member.toString() + " Bienvenue dans la Familiana enfwarey");

	member.addRole(member.guild.roles.find("name", "lopette"));

	member.guild.createRole({
		name: member.user.username,
		color: generateHex(),
		permissions: []
	}).then(function(role) {
		member.addRole(role);
	});
});

bot.on('message', function (message) {
	let commandUsed = Google.parse(message) || Play.parse(message)
	});*/

bot.on('message', message => {
	if (message.content === "Wesh"){
		random();

		if (randnum == 3){
			message.reply("Wesh bien ou quoi Gros ?!");
		} 
		   
		if (randnum == 1){
			message.reply("Ouais bien ? La famille ? les enfants ? les voisins ? tout le monde !");
		}

		if (randnum == 2){
			message.reply("Les Wesh sont interdits (Que moi qu'a le droit) U.U");
		}
	}
});

bot.on('message', message => {

	var msgauthor = message.author.id;

	if(message.author.bot)return;

	if(!db.get("xp").find({user: msgauthor}).value()){
		db.get("xp").push({user: msgauthor, xp: 1}).write();
	}else{
		var userxpdb = db.get("xp").filter({user: msgauthor}).find("xp").value();
		console.log(userxpdb);
		var userxp = Object.values(userxpdb)
		console.log(userxp);
		console.log(`Nombre d'xp : ${userxp[1]}`)
		db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp [1] += 1}).write();
	}
});

bot.on("message", async message => {
	if (message.author.equals(bot.user)) return;

	if (!message.content.startsWith(PREFIX)) return;

	var args = message.content.substring(PREFIX.length).split(" ");

	switch (args[0].toLowerCase()) {

		case "newstory":
			var value = message.content.substr(10);
			var author = message.author.toString();
			var number = db.get("histoires").map('id').value();
		//	var storyid = number +1;
			console.log(value);
			message.reply("Ajout de l'histoire a la base de donees")
			db.get("histoires")
				.push({ story_value: value, story_author: author})
				.write()
			break;
		case "tellstory" :
			story_random();
			console.log(randnum);
			var story = db.get(`histoires[${randnum}].story_value`).toString().value();
			var author_story = db.get(`histoires[${randnum}].story_author`).toString().value();
			console.log(story);
			message.channel.send(`Voici l'histoire : ${story} (Histoire de ${author_story})`)
			break;
		case "aide":
			var help_embed = new Discord.RichEmbed()
				.setColor(0xFFC256)
				.setThumbnail(message.author.avatarURL)
				.setDescription("Je suis le meilleur bot, ramene moi n'importe quelle machine tu verra ..")
				.addField("Voici les commandes du bot :", ".aide pour afficher les commandes du bot !")
				.addField("INTERACTiONS :", ".zak suivis d'une question ?")
				.addField("*Info", "Le bot vous envoie des informations sur votre profile")
				.setFooter("Menu d'aide est en cours de reglage .. relax enfwarey")
			message.channel.sendMessage(help_embed);
			console.log("Commande Help demandée !");
			break;
		case "wesh":
			message.channel.sendMessage("Bien ou quoi la Familiana ?!");
			break;
		case "xp":
			var msgauthor = message.author.id;
			var xp = db.get("xp").filter({user: msgauthor}).find("xp").value()
			var xpfinal = Object.values(xp);
			var xp_embed = new Discord.RichEmbed()
				.setColor(0xFF80D5)
				.setTitle(`XP de ${message.author.username}`)
				.setDescription("Voici le total de tes XP enfwarey !")
				.addField("Bravo à toi :", `${message.author.username}#${message.author.discriminator}`)
				.addField("Tu as actuellement :", `${xpfinal[1]} xp`)
			message.channel.send({embed: xp_embed});
			break;
		case "zak":
			if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
			else message.channel.sendMessage("Oui, quoi !? Pose tes foutues questions a deux balles allez ..");
			break;
		case "info":
			var info_embed = new Discord.RichEmbed()
				.setTitle("Voici les infos de ce foutu serveur")
				.addField("Descriminateur du bot :notepad_spiral:", `#${bot.user.discriminator}`)
				.addField("ID :id: ", `${bot.user.id}`)
				.addField("LE NOM DU DISCORD", message.guild.name)
				.addField("on a ouvert nos portes le", message.guild.createdAt)
				.addField("Tu nous as rejoint le ", message.member.joinedAt)
				.addField("Nous sommes", message.guild.memberCount)
				.addField("Nombre de categories et de salons", message.guild.channels.size)
				.setColor(0xE764EC)
				.setFooter("Ooh oui toi meme tu vois de quoi je veux etre entrain d'avoir deja parler")
				.setThumbnail(message.author.avatarURL)
			message.channel.sendMessage(info_embed);
			break;
		case "moi":
			message.channel.sendMessage(message.author.toString() + " <- Enfwarey te voila notifiey");
			var moi_embed = new Discord.RichEmbed()
				.setAuthor(message.author.username)
				.setDescription("ça c'est toi Enfwarey, c'est tes infos !")
				.setColor(0x9B59B6)
				.addField(":id:", message.author.id)
				.addField("Cree le :", message.author.createdAt);
			message.channel.sendEmbed(moi_embed);
			break;
		case "jenesuispas":
			message.member.removeRole(message.member.guild.roles.find("name", "lopette"));
			break;
		case "SupprimerLeRole":
			message.guild.roles.find("name", "lopette").delete();
			break;
		case "ping":
		message.channel.sendMessage('Le temps de Latence avec le serveur : `' + `${message.createdTimestamp - Date.now()}` + ' ms`');
			break;
		case "kick":
			if(message.mentions.users.size == 0) {
				return message.channel.send("Mentionne quelqu'un si tu veux que ca marche !")
			}
			if (!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")){
				message.reply("Tu n'as pas le droit de kick, tu t'es pris pour qui enfwarey !?")
			}else{
				var memberkick = message.mentions.users.first();
				console.log(memberkick)
				console.log(message.guild.member(memberkick).kickable)
				if(!memberkick){
					message.reply("Ce mec n'existe pas, oh !");
				}else{
					if(!message.guild.member(memberkick).kickable){
						message.reply("Wesh tu ne peux pas kick ce Mec, tu t'es pris pour qui ?");
					}else{
						message.guild.member(memberkick).kick().then((member) => {
						message.channel.send(`${member.user.username} a ete kick ! ${message.author.username} A decide qu'on avait pas besoin de gens comme lui ici !`);
					}).catch(() => {
						message.channe.send("Le kick t'a ete refuse, hehee !")
					})
				}
			}
			}
			break;
		case "ban":
			if(message.mentions.users.size == 0) {
				return message.channel.send("Mentionne quelqu'un si tu veux que ca marche !")
			}
			if (!message.channel.permissionsFor(message.member).hasPermission("BAN_MEMBERS")){
				message.reply("Tu n'as pas le droit de ban, tu t'es pris pour qui enfwarey !?")
			}else{
				var memberban = message.mentions.users.first();
				console.log(memberban)
				console.log(message.guild.member(memberban).kickable)
				if(!memberban){
					message.reply("Ce mec n'existe pas, oh !");
				}else{
					if(!message.guild.member(memberban).kickable){
						message.reply("Wesh tu ne peux pas ban ce Mec, tu t'es pris pour qui ?");
					}else{
						message.guild.member(memberban).kick().then((member) => {
						message.channel.send(`${member.user.username} a ete ban ! ${message.author.username} en a decide ainsi !`);
					}).catch(() => {
						sendError('message', "Le ban t'a ete refuse, hehee !")
					})
				}
			}
			}
			break;
		case "mute":
			if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Hehee petit chanapant, il te faut quelques permissions pour faire ceci ..");

			let toMute = message.mentions.members.first() || message.guild.members.get(args[0]); 
			if(!toMute) return message.channel.sendMessage("Il faut mentionner quelqu'un Bro");

			if(toMute.id === message.author.id) return message.channel.sendMessage("Tu ne peux pas te Mute toi meme, ololooo vraiment un 7mar toi !");
			if(toMute.highestRole.position >= message.member.highestRole.position) return message.channel.sendMessage("Ha lui tu ne peux pas le test ptit frere, oublie !");

			let role = message.guild.roles.find(r => r.name === "TG Tu es Muted");
			if(!role) {
				try {
					role = await message.guild.createRole({
						name: "TG Tu es Muted",
						color: "#581845",
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
			message.channel.sendMessage("c'est fait, Je l'ai Mute !");
			break;
		case "unmute":
			if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Je comprend mais il te faut quand meme quelques permissions pour faire cela ..");
			let toMute = message.mentions.members.first() || message.guild.members.get(args[0]); 
			if(!toMute) return message.channel.sendMessage("Il faut mentionner quelqu'un Bro");
			let role = message.guild.roles.find(r => r.name === "TG Tu es Muted");
			if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Il est deja Muted, tu veux quoi de plus Enfwarey !?");
			await toMute.removeRole(role);
			message.channel.sendMessage("c'est fait, Je l'ai unMute !");
			break;

		default:
			message.channel.sendMessage("Commande invalide 7mar");

	}

});

// Connexion
bot.login(process.env.TOKEN); // Token
