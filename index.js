const express = require("express");
const app = express();

app.listen(() => console.log("youssefgames bot system v2"));
require('events').EventEmitter.defaultMaxListeners = 30;
app.use('/ping', (req, res) => {
  res.send(new Date());
});
///ممنوع السرقة youssefgames
///thx naar cods 
const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
const parse = require ("parse-ms");
const probot = require("probot-tax");
const db = require('quick.db');


/////////////////
///ممنوع السرقة youssefgames
const prefix = "+"//بيرفكس الى تبيه
const developers = "1029712969610838037"//الايدي حقك


//play
client.on("ready", () => {
  client.user.setActivity(`LAKASA LAND`)//غير الحالة الي تريد
});

//commends common

//profile

client.on('message', message => {
    if (message.content.startsWith(prefix + "profile")) {
      var args = message.content.split(" ").slice(1);
      let user = message.mentions.users.first();
      var men = message.mentions.users.first();
      let uus = message.mentions.users.first() || message.author;
  
      message.guild.fetchInvites().then(invites => {
  
        let personalInvites = invites.filter(
          i => i.inviter.id === message.mentions.users.first() || message.author.id
        );
        
        let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      
        var heg;
        if (men) {
          heg = men
        } else {
          heg = message.author
        }
        var mentionned = message.mentions.members.first();
        var h;
        if (mentionned) {
          h = mentionned
        } else {
          h = message.member
        }
  
  
        var id = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setImage(`https://api.probot.io/profile/${uus.id}`)
        .setFooter(`${prefix}help`,client.user.avatarURL())
        message.channel.send(id)
      }
      );
    }
    });

//server

client.on("message", russi => {
  if (russi.content === prefix + "server") {


    let embed = new Discord.MessageEmbed()
    .setTitle(`${russi.guild.name}`)///Russi
    .setThumbnail(client.user.avatarURL())
    .setColor('#3a6bff')///Russi
    .setFooter(`Requested | ${russi.author.tag}`, russi.author.avatarURL())
    .addField('> <:ID:791203015708770304> ID Server :', `${russi.guild.id}`)
    .addField('> :crown: Owner Server :', `${russi.guild.owner}`)
    .addField('> :calendar: Created : ', `${russi.guild.createdAt.toLocaleString()}`)
    .addField('> :busts_in_silhouette: Members : ', `${russi.guild.memberCount}`)
    .addField('> :speech_balloon: Channels : ', `${russi.guild.channels.cache.size}`)
    .addField('> :earth_americas: Region : ', `${russi.guild.region}`)
    .setTimestamp()///Russi
    russi.channel.send(embed);
  }
});

//bans

client.on('message', message => {
  if (message.content.startsWith(prefix + "bans")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`:small_orange_diamond: **Server Ban List :** ${bans.size} `))
      .catch(console.error);
  }
});

//avatarserver

client.on("message", msg => {
  if (msg.content === prefix + "avatarserver") {
    let embed = new Discord.MessageEmbed()
.setImage(msg.guild.iconURL());
    msg.channel.send(embed);
  }
});

//credit

client.on("message", niro =>{//@ニロ#3892
  if(niro.content.startsWith(prefix + "credit")){//@ニロ#3892
 let user = niro.mentions.users.first() || niro.author;//@ニロ#3892
    let bal = db.fetch(`money_${user.id}`)//@ニロ#3892
    if (bal === null) bal = 0;//@ニロ#3892
      return niro.channel.send(`:bank: | **${user.username} , your account balance is** \`\`$${bal}\`\`.`)//@ニロ#3892
}});//@ニロ#3892

//تفعيل
client.on("message", message => {
if (message.content.startsWith(prefix +"تفعيل")){
if(!message.member.roles.cache.has('1035242225916985344'))//ايدي رتبه اداره علياء
if(!message.member.roles.cache.has(''))//ايدي رتبه اداره السيرفر
if(!message.member.roles.cache.has(''))//ايدي رتبه اداره الاصغره
return message.channel.send(`ليس لديك صلاحية لأستعمال هذا الأمر`)
const member = message.mentions.members.first()
if (!member) return;

let role = message.guild.roles.cache.find(role => role.id === '1035242304203661392');
let role2 = message.guild.roles.cache.find(role => role.id === '1035242302572081243');
let role3 = message.guild.roles.cache.find(role => role.id === '1035242302010052729');
let role4 = message.guild.roles.cache.find(role => role.id === '1035242300969865298');
let role5 = message.guild.roles.cache.find(role => role.id === '');
member.roles.remove(role)
member.roles.add(role2)
member.roles.add(role3)
member.roles.add(role4)
member.roles.add(role5)

  var embed = new Discord.MessageEmbed()
.setTitle(`${message.guild.name}`)
.addField("  تم التفعيل بنجح "  , `:white_check_mark:`)
.setColor("BLACK")
.setThumbnail(message.guild.iconURL())
.setFooter(` تم التفعيل من ${message.author.username}`)
message.channel.send(embed)
 
}
})
//daily

client.on("message", async niro =>{//@ニロ#3892
if(niro.content.startsWith(prefix + "daily")){//@ニロ#3892
    let timeout = 86400000/2 //by Ashour
  let amount = Math.floor(Math.random() * 1000) + 1;//@ニロ#3892
    let daily = await db.fetch(`daily_${niro.author.id}`);//@ニロ#3892
    if (daily !== null && timeout - (Date.now() - daily) > 0) {//@ニロ#3892
        let time = ms(timeout - (Date.now() - daily));//@ニロ#3892
        niro.channel.send(`:rolling_eyes: **| ${niro.author.username}, your daily credits refreshes in ${time.hours}h ${time.minutes}m ${time.seconds}s .** `)//@ニロ#3892
    } else {
    niro.channel.send(`:moneybag: **${niro.author.username}, you got :dollar: ${amount} daily credits!**`)//@ニロ#3892
    db.add(`money_${niro.author.id}`, amount)//@ニロ#3892
    db.set(`daily_${niro.author.id}`, Date.now())//@ニロ#3892
    }}});//@ニロ#3892

//trans

client.on("message", async niro =>{//@ニロ#3892
  if(niro.content.startsWith(prefix + "trans")){//@ニロ#3892
    let args = niro.content.split(" ").slice(2); //@ニロ#3892
    let user = niro.mentions.members.first() //@ニロ#3892
    let member = db.fetch(`money_${niro.author.id}`)//@ニロ#3892
    if (!user) {//@ニロ#3892
        return niro.channel.send(`:rolling_eyes: | ** ${niro.author.username}, I Cant Find a User**`)
    }//@ニロ#3892
    if (!args) {
        return niro.channel.send(`:rolling_eyes: | **${niro.author.username}, type the credit you need to transfer!**`)//@ニロ#3892
    }
    if (niro.content.includes('-')) { //@ニロ#3892
      return niro.channel.send(`:rolling_eyes: | **${niro.author.username}, Type a Amount \`Not Negative\`**`)//@ニロ#3892
    }
    if (member < args) {//@ニロ#3892
        return niro.channel.send(`:thinking: ** | ${niro.author.username}, Your balance is not enough for that!**`)//@ニロ#3892
    }
    if(isNaN(args)) 
return niro.channel.send(`:rolling_eyes: Numbers Only`)//@ニロ#3892
    niro.channel.send(`:moneybag: **| ${niro.author.username}, has transferred \`$${args}\` to ${user}**`)//@ニロ#3892
    user.send(`:atm:  |  Transfer Receipt \n\`\`\`You have received $${args} from user ${niro.author.username} (ID: ${user.id})\`\`\``)//@ニロ#3892
    db.add(`money_${user.id}`, args)//@ニロ#3892
    db.subtract(`money_${niro.author.id}`, args)//@ニロ#3892
}});

//tax

client.on("message", message => {
    if(message.content.startsWith( prefix + 'tax')) {
    let args = message.content.split(" ").slice(1).join(" ");
    if(!args) return message.reply('ياقلبي حط المبلغ ازا ما تحط ما ارد عليك ')
    let embed = new Discord.MessageEmbed()
    .setColor('RED')
    .addFields(
      {
      name:"`المبلغ المراد دفعه : `", value:`**${args}**`
 
    },
    {
      name:"`المبلغ شامل الضريبة :  `", value:`**${probot.taxs(args)}**`
 
    },
    ///ممنوع السرقة youssefgames
 
    )
    .setFooter(`By  : ${message.author.username}`, `${message.author.displayAvatarURL()}`)
    .setThumbnail(message.author.displayAvatarURL())
    .setTimestamp()
 
        message.channel.send(embed)
    }
});

//id

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'id')) {
    var user = message.guild.member (message.mentions.members.first() || message.author);
      const embed = new Discord.MessageEmbed()
  .setColor("RANDOM") 
   .addField(`ID USER : [ ${user.id} ]`,`${user.user}`)
   .setThumbnail(user.user.avatarURL())
  .setFooter(`- Requested By: ${message.author.tag}`)
  message.channel.send({embed});
      }
  });

  //uptime

  client.on('message', msg =>{
if(msg.content === prefix +"uptime"){
      let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;
      const up = new Discord.MessageEmbed()
      .setColor("#44ff00")
      .setThumbnail(client.user.avatarURL())
      .setTitle("**__Uptime :__**")
      .setAuthor(client.user.username,client.user.avatarURL())
      .addField('**-**', `**${seconds}**` + ' **seconds**')
      .addField('**-**', `**${minutes}**` + ' **minutes**')
      .addField('**-**', `**${hours}**` + ' **hours**')
      .addField('**-**', `**${days}**` + ' **days**')
      msg.channel.send(up)   
 ///ممنوع السرقة youssefgames
}
});

//user

client.on("message",message => {
    if(message.content.startsWith(prefix + "user")){
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setAuthor(message.author.username,message.author.avatarURL())
  .setThumbnail(message.author.avatarURL())
  .setTitle("Info User")
  .addField('``Name``', ` ${message.author.tag} `, true)
  .addField('``ID``', ` ${message.author.id} `, true)  
  .addField('``Created At``', ` ${message.author.createdAt.toLocaleString()} `, true)
  .setTimestamp(); 
  message.channel.send(embed)
  }
  });

  //ping

  client.on('message', message =>{
  if(message.content === prefix + 'ping'){
message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Ping : ${client.ws.ping} ms\`\`\``);
  });
  }
});

//bot

client.on('message', msg =>{
if(msg.content === prefix +"bot"){
const embed = new Discord.MessageEmbed()
.setColor("bleu")
.setTitle(` ${client.user.username} `)
.addField('``My Name``' , ` ${client.user.tag}` , true)
.addField('``servers``', ` ${client.guilds.cache.size} `, true)
.addField('``channels``', ` ${client.channels.cache.size} `, true)
.addField('``Users``', ` ${client.users.cache.size} `, true)
.addField('``My ID``' , ` ${client.user.id} ` , true)
.setFooter(`Code By youssefgames`)
msg.channel.send(embed);
}
});

//report

client.on('message', badboy => {
if(badboy.content.startsWith(prefix + "report")){
const reason = badboy.content.split(" ").slice(2).join(" ");
let reportschannel = badboy.guild.channels.cache.find(channel => channel.name === "report");
if(!reportschannel) return badboy.channel.send("لا استطيع العثور على روم الابلاعات");
const user = badboy.mentions.users.first();user
if(!user) return badboy.channel.send("منشن العضو");
if(!reason) return badboy.channel.send("اكتب السبب");
  if (user.id == badboy.author.id)
        return badboy.channel.send("لا تسطيع الابلاغ على نفسك")

              if(user.bot) return badboy.channel.send("لا تسطيع الابلاغ عن بوت")

if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")

const embed = new Discord.MessageEmbed()
.setTitle("ابلاغ جديد")
.addField("العضو", `${user.username}`)
.addField("السبب", `${reason}`)
.addField("اسم المبلغ", `${badboy.author.username}`)
.addField("ايدي المبلغ", `${badboy.author.id}`)
.setFooter("ابلاغ جديد")

reportschannel.send(embed)
badboy.channel.send("تم ارسال ابلاغك بنجاح")
}

});

///ممنوع السرقة youssefgames

///ممنوع السرقة youssefgames

//fedback

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "fedback")){
    const args = badboy.content.split(" ").slice(1).join(" ")
    if(!args) return badboy.channel.send("اكتب تقيمك")
    var fedbackchannel = badboy.guild.channels.cache.find(channel => channel.name === "fedback"); //اسم الروم

    const embed = new Discord.MessageEmbed()
    .setTitle("NEW FEDBACK 🤩")
    .setThumbnail(`${badboy.author.avatarURL({dynamic : true})}`)
    .setDescription(`${args}`)
    .setFooter("THX FOR FEDBACK ❤️❤️❤️")
    badboy.channel.send("شكرا لتفيمك")
fedbackchannel.send(embed).then(badboy => {
  badboy.react("❤️")
})

  }
});

//sug

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "sug")){
    const args = badboy.content.split(" ").slice(1).join(" ")
    if(!args) return badboy.channel.send("اكتب اقتراح")
    var fedbackchannel = badboy.guild.channels.cache.find(channel => channel.name === "suggestion"); //اسم الروم

    const embed = new Discord.MessageEmbed()
    .setTitle("NEW SUGGESTION :bulb: ")
    .setThumbnail(`${badboy.author.avatarURL({dynamic : true})}`)
    .setDescription(`${args}`)
    .setFooter("THX FOR SUGGESTION ❤️❤️❤️")
    badboy.channel.send("تم ارسال اقتراحك ")
fedbackchannel.send(embed).then(badboy => {
  badboy.react("👍")
  badboy.react("👎")
})

  }
});

//anime

const { getInfoFromName } = require('myanimelists');
 
 
 
client.on('message', message => {
let anime = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'anime')) {
    if(!anime) return message.channel.send('Please Write The Anime Name Example: =anime dragon ball')
getInfoFromName(anime)  
    .then(result => message.channel.send(result.url))
    .catch(error => console.log(error));
}
});

//avatar

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "avatar")) {
    const mention = message.mentions.users.first()

    if (!mention) return console.log("")
    let embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setAuthor(`${mention.username}#${mention.discriminator}`, `${mention.avatarURL()}`)
      .setTitle("Avatar Link")
      .setURL(`${mention.avatarURL()}`)
      .setImage(`${mention.avatarURL()}`)
      .setFooter(`Requested By ${message.author.tag}`, `${message.author.avatarURL()}`)
    message.channel.send(embed)
  }
});

//guilds

client.on('message',function(message) {
   if(message.content.startsWith(prefix + "guilds")) {
       message.channel.send(`Guilds: \`\`${client.guilds.cache.size}\`\``);
   } 
});

//boost and level

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "boost")){
    
 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
 
    
    let level = badboy.guild.premiumTier === 0 ? "No Level" : `${badboy.guild.premiumTier}`;
 
    let boost = badboy.guild.premiumSubscriptionCount;
    
    
    
    let embed = new Discord.MessageEmbed()
    .setTitle(`Boost of ${badboy.guild.name}`)

.addField("Boost", `${boost}`)
.addField("Level", `${level}`)
 .setColor("BLUE")
 
 badboy.channel.send(embed)
 
  }
});

///ممنوع السرقة youssefgames
//rules حط الالقوانين الى تحبها

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "rules")){
    if (badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")

    var embed = new Discord.MessageEmbed()
    .setTitle(`rules of ${badboy.guild.name}`)
.setDescription(`
1-ممنوع السب
2-ممنوع السبام 
3-ممنوع نشر الروابط
4-احترام الأعضاء 
5-بدك اي مساعدة كلم اي واحد عنده رانك @Owner Ship   في الخاص او الشات العام 
6-لا تشتري من احد إلا اللي يكون عنده رانك تاجر @seller
7-اكتب الأوامر اللي بدك اياها في شات #اوامــر-الـبـوتـات
8-ممنوع طلب الرانكات كل رانك له سعر والرانكات مش لعبة
9-عدم التنمر على اي احد من الأعضاء 
10-ممنوع تخش الرومات الصوتية للإزعاج
11-ممنوع انفايتات للسيرفرات داخل السيرفر


`)
.setColor("BLUE")

    .setThumbnail(badboy.guild.iconURL({dynamic: true}))
    badboy.channel.send(embed)
  }
});

//A5

///ممنوع السرقة youssefgames
//rules حط الالقوانين الى تحبها

client.on('message', badboy => {
  if(badboy.content.startsWith("A5")){
    if (badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")

    var embed = new Discord.MessageEmbed()
    .setTitle(` ${badboy.guild.name} للتفعيل `)
.setDescription(`اكتب ايديك فقط 

1- اهم شي تروح تراجع القوانين <#1035242785546195074>

2- تكتب ايدك للتفعيل


@everyone

`)
.setColor("BLACK")

    .setThumbnail(badboy.guild.iconURL({dynamic: true}))
    badboy.channel.send(embed)
  }
});

//invite

const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', () => {
  wait(1000);
  client.guilds.cache.forEach(king => {
    king.fetchInvites().then(guildInvites => {
      invites[king.id] = guildInvites;
    });
  });
});


//////////////////////////////////////////////////////
  client.on('message',message =>{
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'invite') {
let guild = message.guild
var codes = [""]
 var nul = 0
      
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
    nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}
 
})
  if (nul > 0) {
      const e = new Discord.MessageEmbed()
      .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
      .setColor('#36393e')
      message.channel.send(e)
  }else {
                       var embed = new Discord.MessageEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.MessageEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.channel.send({ embed: embed });
return;
} else {
    var embed = new Discord.MessageEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes :\n${codes.join("\n")}`)
.setColor('#36393e')
message.channel.send({ embed: embed });
return;
}
})
}

});

client.on('message',message =>{
    if(message.content.startsWith(prefix + 'topinvites')) {
     
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.MessageEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
           message.channel.send({ embed: embed });
   
  });
   
    }
  });
  client.on('message', message => {
if(message.content === prefix + 'info') {
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id;
        let Tag = message.mentions.users.first() ? message.mentions.users.first().tag : message.author.tag;
        let Username = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
        let Avatar = message.mentions.users.first() ? message.mentions.users.first().avatarURL() : message.author.avatarURL();
       
        message.guild.fetchInvites().then(invs => {
            let member = client.guilds.cache.get(message.guild.id).members.cache.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            let inviteCode = personalInvites.reduce((p, v) => v.code);
            let possibleInvites = [['Total de membros recrutados:']];
            possibleInvites.push([inviteCount, inviteCode]);
            let user = message.mentions.users.first() || message.author;
            let mem = message.guild.member(user);
            let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
            let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
           
            var inviteInfo = new Discord.MessageEmbed()
            .setTitle(`:incoming_envelope: **[INVITE INFO]** ${Username}`)
            .setThumbnail(client.user.avatarURL())
            .addField('**الدعوات**', `** ↝** [ شخص **${Number(inviteCount)}** ]`)
            .addField('**تم الانضمام للسيرفر من**', `** ↝** [ يوم **${daysJoined.toFixed(0)}** ]`)
            .addField('**رابط دعوة الانضمام**', `** ↝** [ **${inviteCode || 'Zm2U6we'}** ]`)
            .setColor('#36393e')
            .setTimestamp()
            .setFooter(Tag, Avatar)
           
            message.channel.send(inviteInfo);
    })
           
                                     
                                     
                                      };
});

//fun commend

//spank

const DIG = require("discord-image-generation");
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "spank")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Spank().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Spank.png");;
        message.channel.send(attach)
    }
});

//hug

client.on('message', russi => {
  if(russi.content.startsWith(prefix + "hug")){
let member = russi.mentions.users.first();
if(!member) return russi.reply("**Please Mention Member**")
    let hugs = [
      'https://cdn.discordapp.com/attachments/782532317729652757/797086131018924032/tenor.gif',
      

      ];
let hug1 = hugs[Math.floor(Math.random() * hugs.length)];

var embed = new Discord.MessageEmbed()
.setTitle("HUG")
.setColor("RANDOM")
.setImage(`${hug1}`)
.setFooter(`you hug by ${russi.author.username}`)
russi.channel.send(embed)
 
  }
});



//wanted

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "wanted")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Wanted().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Wanted.png");;
        message.channel.send(attach)
    }
});

//game

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "game")){
let args = badboy.content.split(" ").slice(0);
var user = badboy.mentions.users.first() || badboy.author;
    if (user.bot || !badboy.guild) return;

 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
let win = [
 ':upside_down: :upside_down: :upside_down:  win',
 ':upside_down: :face_with_raised_eyebrow: :zany_face: lose',
 ':upside_down: :face_with_raised_eyebrow: :upside_down: lose',
 ' :yum: :yum: :yum: win',
 ' :kissing_heart:  :kissing_heart:  :kissing_heart:  win', 
 ' :frowning2: :frowning2: :kissing_heart: lose',
 
  ];
            
            let an = win[Math.floor(Math.random() * win.length)];

  var embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`${an}`)
 badboy.channel.send(embed)
  }

});

//kill

client.on('message', message => {
    if (message.content.startsWith(prefix + 'kill')) {
        let user = message.mentions.users.first();
        if (!user) {
           message.reply(`You've to mention user you want to kill.`)
        }
        let kill = [                   'https://steamuserimages-a.akamaihd.net/ugc/782985908083449716/7D8D3247449A582D75182D76E083F3C11F7A9A1F/','حط الصورة الي تبغاها',            ``        ];
        message.channel.send({
            embed: new Discord.MessageEmbed()
               .setDescription(`${message.author} killed **${user}**`)
            .setImage(
                kill[Math.floor(Math.random() * kill.length)]
            )
        });
    }
});

//iq
 

//triggered

client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "triggered")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Triggered().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "Triggered.gif");;
        message.channel.send(attach)
    }
});

//deletes

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "deletes")) {
              let user = message.mentions.users.first();
              if(!user) return message.reply("need mention user")
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Delete().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Delete.png");;
        message.channel.send(attach)
    }
});

//trash

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "trash")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Trash().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Trash.png");;
        message.channel.send(attach)
    }
});

//slap

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "slap")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Batslap().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "slap.png");;
        message.channel.send(attach)
    }
});

//winer

client.on('message',vest=>{
  let winer1 = vest.content.split(" ")[1]
 let winer2  = vest.content.split(" ")[2]
  let score1  = (Math.floor (Math.random() * 40));
  let score2  = (Math.floor (Math.random() * 40));
  if(vest.content.startsWith(prefix+'winer')){
  let usage =  new Discord.MessageEmbed()
      .setTitle(' ERROR :')
      .setColor("Gray")
      .setDescription(`
      Usage :
      ${prefix}winer <palyer1> <palyer 2>
 
      Ex :
      ${prefix}winer ${vest.author} <palyer2>
      `)
      .setAuthor(vest.author.username
  ,vest.author.avatarURL())
 
      .setFooter(`Requsted by: ${vest.author.username}`)
    if(!winer1||!winer2) return vest.channel.send(usage)
if(score2 > score1){
        let fff = new Discord.MessageEmbed()
      .setTitle(' Winer  :')
      .setColor("Gray")
      .setAuthor(vest.author.username
  ,vest.author.avatarURL())
 
      .setDescription(`
     Winer{${winer2} : ${score2}}
 
 
     Lozer {${winer1}: ${score1}}
 
 
      `)
      vest.channel.send(fff)
 
}else {if(score1 > score2 ){
       let ff = new Discord.MessageEmbed()
      .setTitle(` Winer  :`)
      .setColor("Gray")
 
      .setAuthor(vest.author.username
  ,vest.author.avatarURL())
 
      .setDescription(`
     Winer{${winer1}: ${score1} }
 
 
     Lozer {${winer2} : ${score2}}
 
 
      `)
      vest.channel.send(ff)
 
} else { if(score1=score2){
      let equal = new Discord.MessageEmbed()
      .setTitle(' Equal :')
      .setColor("Gray")
      .setAuthor(vest.author.username
  ,vest.author.avatarURL())
 
      .setDescription(`
     Equal{ ${winer1}: ${score1} }
 
 
     Equal {${winer2} : ${score2} }
 
 
      `)
      vest.channel.send(equal)
}}
 
}
 
 
 
}
 
});

//meme

client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "meme")){
    let reply =[
      'https://pm1.narvii.com/7630/ca050d19dc9832424a888f017e6f1c28762d8f17r1-863-540v2_hq.jpg',
      'https://i.pinimg.com/originals/9a/b7/b7/9ab7b7e225f2cc5ee190e8a67c126c66.jpg',
      'https://pbs.twimg.com/media/Ecq6FxYWkAIQ8pE.jpg',
      'https://i.ytimg.com/vi/sm6z50Qoxqg/maxresdefault.jpg',
      'https://64.media.tumblr.com/tumblr_m7mw1u9vb81rr8kmyo1_1280.jpg',
      'https://i.ytimg.com/vi/7lTvO9wxqPw/hqdefault.jpg',
      'https://pm1.narvii.com/7723/6ed7ca7c14b84d2f36a9383ba01751a600e537f8r1-799-624v2_uhq.jpg',
      'https://i.pinimg.com/564x/04/80/c8/0480c863e93e5f83f3eb087c0579961a.jpg',
      'https://i.ytimg.com/vi/rlOT3GCBVjE/hqdefault.jpg',
      'https://i.ytimg.com/vi/C7-hq9Ffcj8/maxresdefault.jpg',
      'https://pbs.twimg.com/media/ESnM7BbXQAAb0w2.jpg',
      'https://i.ytimg.com/vi/0Hp2a-lrm_o/hqdefault.jpg',
      'https://i.ytimg.com/vi/SRrIcSkwYGQ/mqdefault.jpg',
      'https://stepcdn.com/assets/2019-04/18/11/43vc5/55944951_2568294106575830_8991684621687062528_n-700x.jpg',
      'https://i.pinimg.com/originals/cb/bf/da/cbbfdaf0da7743a491e832cb86e95ea3.jpg',
      'https://i.pinimg.com/736x/09/01/e3/0901e327b98ca708b81e64917a02d2a0.jpg',
      'https://i.pinimg.com/originals/df/91/4e/df914ee1f44c13ad4e7a1a472bf582c3.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8p_FAfFjnwjtMTPBLPINsIurByWcBYziQIQ&usqp=CAU',
      'https://64.media.tumblr.com/48616c5f37aa9b702b0838a8cfff058f/9663137ce20047ec-52/s1280x1920/77f01452f0473b4edf142cfd8649a8bb2b8a2f40.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBPFTRZcVlYXkAQYa0dEYuUHgYoFHbCAE7Zw&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0BkWoPcUKvxRJY1mQk87ST2d-zPxc89Epiw&usqp=CAU',
     
      ];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
});

//nokta

client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "nokta")){
    let reply =[
      'https://i.pinimg.com/originals/90/4a/e9/904ae9fdd07d8d7afbd3b89c0067a24e.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlE0X6Q3y_CXhdJThWUnVvwKQQZOS_PBu_MQ&usqp=CAU',
      'https://i.pinimg.com/564x/4f/c3/d0/4fc3d08016a6398836d7c64c7d64d7ba.jpg',
      'https://www.aljawab24.com/wp-content/uploads/2020/10/%D9%86%D9%83%D8%AA-1-1-1-6-845x475.jpg',
      'https://i.pinimg.com/564x/ed/14/bf/ed14bfbcbfaeef8afdcf399f9c81681b.jpg',
      'https://m7et.com/wp-content/uploads/2020/04/dd78334190a889394039a9a72ea07c40.jpg',
      'https://i.pinimg.com/474x/90/92/d2/9092d2e5586919b5c4892a1f99a95ace.jpg',
      'https://www.i7lm.com/wp-content/uploads/2019/04/%D9%86%D9%83%D8%AA-%D9%85%D8%B6%D8%AD%D9%83%D8%A9.png',
      'https://www.eqrae.com/wp-content/uploads/2020/09/%D9%83-3.jpg',
      'https://media.gemini.media/img/large/2017/3/23/2017_3_23_16_51_15_362.jpg',
      'https://www.meshwarmedia.com/wp-content/uploads/2017/10/%D9%86%D9%83%D8%AA%D8%A9-12.jpg',
      'https://womenss.net/wp-content/uploads/2020/02/1713.jpg',
      'https://www.nsowo.com/wp-content/uploads/2019/02/%D9%86%D9%83%D8%AA-%D9%85%D8%B6%D8%AD%D9%83%D8%A9-%D9%85%D8%B9-%D9%86%D9%83%D8%AA%D9%87-%D8%B4%D8%B1%D8%B7%D9%8A-300x224.jpg',
      'https://www.i7lm.com/wp-content/uploads/2020/03/3333-5.jpg',
      'https://pbs.twimg.com/profile_images/378800000670246023/33e11a886fb45f462552bfdde1a5c40b_400x400.jpeg',
      
      ];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
});

//الاستغفار
client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "الاستغفار")){
    let reply =[
      "||اللهم اغفر لي خطيئتي وجهلي وإسرافي في أمري وما أنت اعلم به مني اللهم اغفر لي جَدِّي وهزلي وخطئي وعمدي وكل ذلك عندي اللهم اغفر لي ما قدمت وما أخرت وما أسررت وما أعلنت وما أنت أعلم به مني أنت المقدم وأنت المؤخر وأنت علي كل شيء قدير [متفق علية]||",
      "||أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه [الترمذي]||",
      "||سبحانك اللهم وبحمدك اللهم اغفر لي [متفق علية]||",
      "||اللهم أنت ربي لا إله إلا أنت خلقتني وأنا عبدك وأنا علي عهدك ووعدك ما استطعت أعوذ بك من شر ما صنعت وأبؤ لك بنعمتك علي وابؤ لك بذنبي فاغفر لي فانه لا يغفر الذنوب إلا أنت [رواه البخاري]||",
      "||عن أبي هريرة رضى الله عنه أن رسول الله صلى الله عليه وسلم قال:”ينـزلُ ربُّنا تبارَكَ وتعالى كلّ ليلةٍ إلى سماءِ الدنيا, حينَ يَبقى ثُلثُ الليلِ الآخرُ فيقولُ: مَن يدعوني؟ فأستجيبَ لهُ, من يسألُني؟ فأعطِيَه, من يستغفرُني؟ فأغفر له. رواه البخاري||",
      "||اللهم أنت ربي لا إله إلا أنت، خلقْتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعتُ، أعوذ بك من شر ما صنعتُ، أبوء لك بنعمتك عليّ، وأبوء بذنبي فاغفر لي، فإنه لا يغفر الذنوب إلا أنت” قال: “من قالها بالنهار موقنًا بها، فمات من يومه قبل أن يُمْسِي؛ فهو من أهل الجنة، ومن قالها من الليل، وهو موقن بها، فمات قبل أن يُصْبِح؛ فهو من أهل الجنة”. رواه البخاري.||",
      "||عن أنس رضى الله عنه قال سمعت رسول اللهصلى الله عليه وسلم يقول: “قال الله يا ابنَ آدمَ! إنّك ما دَعوتَني ورجَوتَني, غفرتُ لكَ عَلَى ما كانَ منكَ, ولا أُبَالي, يا ابنَ آدَمَ! لو بلَغَتْ ذنُوبُكَ عنَانَ السَّماءِ, ثمّ استغفرتَنِي غفرتُ لكَ, ولا أُبَالي, يا ابن آدَمَ إنّكَ لو أتَيتنِي بِقُرَابِ الأرضِ خطَايَا ثمّ لقِيتَني لا تُشرِكُ بي شيئاً, لأتيتُك بقُرابها مغفرةً. [صحيح الترمذي]||",
      "||عن أبي سعيد الخدري رضى الله عنه عن النبي صلى الله عليه وسلم قال: قال إبليسُ: وعَزّتك لا أبرح أُغوي عبادك ما دامت أرواحهم في أجسادهم فقال: وعِزّتي وجلالي, لا أزال أغفرَ لهم ما اسْتغفروني [صحيح الترغيب]||",
      "||قُلِ اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي إِنَّكَ أَنْتَ الغفور الرحيم. [متفق عليه]||",
      "||سيد الاستغفار أن تقول: اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي فَاغْفِرْ لِي، إِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ. وَمَنْ قَالَهَا مِنَ النَّهَارِ مُوقِنًا بِهَا، فَمَاتَ مِنْ يَوْمِهِ قَبْلَ أَنْ يُمْسِيَ، فَهُوَ مِنْ أَهْلِ الجَنَّةِ، وَمَنْ قَالَهَا مِنَ اللَّيْلِ وَهُوَ مُوقِنٌ بِهَا، فَمَاتَ قَبْلَ أَنْ يُصْبِحَ، فَهُوَ مِنْ أَهْلِ الجَنَّةِ. [رواه البخاري].||",
      
      ];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
});

//هل تعلم

client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "هل تعلم")){
    let reply =[
       "https://cdn.discordapp.com/attachments/479044877745782801/479045993132720128/download_1.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046003937247253/download_2.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046011956887552/download_3.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046019904962562/download_4.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046030214692864/download_5.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046039794352151/download_6.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046055581974549/download_7.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046065367154712/download.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046084442980354/images_1.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046105674547216/images_4.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046113945583639/images_5.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046119838580756/images_6.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046131796672513/images_7.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046143318425621/images_8.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046152491368448/images_9.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046158979825686/images_10.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046162247188498/images_11.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046196434960416/images_12.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046214571130882/images_13.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046219528929290/images_14.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479072892022161408/images_15.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046222045511685/images_16.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046225086382081/images_18.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046228047560736/images_19.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046230794829834/images_20.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046233533710336/images_21.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479074274850766863/images_22.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046289477337089/images_23.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046293436629041/images_24.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046294925606914/images_25.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046303330992169/images_26.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046307072311317/images_27.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046315100340224/images_28.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046325619392537/images_29.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046333114875907/images_30.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046334825889807/images_31.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046338718466058/images_32.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046340379148288/images_33.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046342795198484/images_34.jpg",
  "https://cdn.discordapp.com/attachments/479044877745782801/479046349644365827/images.jpg"

      ];
    let an = reply[Math.floor(Math.random() * reply.length)];
    badboy.channel.send(`${an}`)
  }
});

//cut
///ممنوع السرقة youssefgames
client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "cut")){
    let cuts = [
      'ما هو لون هاتفك',
      'ما هو باسورد هاتفك',
      'هل تامن بلحب من اول نظرة؟',
      'كم مرا حبيت بنت',
      ' ._. هل تحب البطاطا',
      'هل تحب امك',
      'هل تحب اخوك',
      'هل تحب ابوك',
      'هل تحب بنت',
      'ماهو لون شعرك',
      'ماهو افضل فصل بنسبة لك',
      'هل سرقت ابوك',
      'هل سرقت يوم من السوبر ماركة',
      'انت تلعب ماين كرافت',
     
      
      ];
      //تقدر تضيف كمان كت
    
   let cut2 = cuts[Math.floor(Math.random() * cuts.length)];
var embed = new Discord.MessageEmbed()
.setTitle("Cut")
.setDescription(`${cut2}`)
.setThumbnail(`${badboy.author.avatarURL({dynamic : true})}`)
.setColor("BLUE")
.setFooter(`Requsted By ${badboy.author.username}`, badboy.author.avatarURL({dynamic : true}))

      badboy.channel.send(embed)
      
  }
});


//brodcast

client.on('message', message => { // هاذا للبرودكسات
        // هنا تقدر تغير البرفكس
	var command = message.content.split(" ")[0];
	if(command == prefix + 'ebc') { // الكوماند ebc
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don`t have **MANAGE_MESSAGES** permission!");
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
		if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc كلامك`);
		if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don`t have **MANAGE_MESSAGES** permission!");
		
		let bcSure = new Discord.MessageEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
		.setThumbnail(client.user.avatarURL())
		.setColor('RANDOM')
		.setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL())
		
		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				        message.guild.members.cache.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.MessageEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#000000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});



client.on('message',async message => {
  if(message.channel.type === 'dm') return;
  if(message.author.bot) return;
  let args = message.content.split(' ');
  if(args[0] === `${prefix}obc`) {
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
  if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
 
  let msgCount = 0;
  let errorCount = 0;
  let successCount = 0;
    let status;
    if(msgCount === message.guild.memberCount) {
        status = 'Sent';
    } else if(msgCount !== message.guild.memberCount) {
        status = 'Sending';
    }
  message.channel.send(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسلة**`).then(msg => {
    message.guild.members.cache.forEach(g => {
      g.send(args.slice(1).join(' ')).then(() => {
        successCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      }).catch(e => {
        errorCount++;
        msgCount++;
                if(!msg) return;
        msg.edit(`**- [ 🔖 :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ 📥 :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ 📤 :: ${errorCount} ]・عدد الرسائل الغير مستلمة\n- [ ▫ :: ${status} ]・حالة الرسائل المرسل**`);
      });
    });
  });
}
});

//commend admin

//ca

client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "ca")){
    if(!badboy.member.hasPermission("MANAGE_GUILD")) return badboy.reply("حرك")
 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
 
    let args = badboy.content.split(" ").slice(1).join(" ")
if(!args) return badboy.reply("اعطي اسم لكتغري حقك")
    let embed = new Discord.MessageEmbed()
    .setTitle(`Are you Sure `)
   .setDescription(`are you Sure to make a category if you Sure type yes`)
   badboy.channel.send(embed).then((m) => {
      badboy.channel.awaitMessages(response => response.content === 'yes', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
          .then((collected) => {

badboy.guild.channels.create(`${args}`, { type: "category" })
badboy.channel.send("Done")
        
 
       .catch(() => {

       })
       
          })
          })
   }
  });

  //cv

  client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "cv")){
    if(!badboy.member.hasPermission("MANAGE_GUILD")) return badboy.reply("انت لاتملك صلاحيات MANAGE_GUILD")
 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
 
    let args = badboy.content.split(" ").slice(1).join(" ")
if(!args) return badboy.reply("اعطي اسم لروم حقك")
    let embed = new Discord.MessageEmbed()
    .setTitle(`Are you Sure `)
   .setDescription(`are you Sure to make a room if you Sure type yes`)
   badboy.channel.send(embed).then((m) => {
      badboy.channel.awaitMessages(response => response.content === 'yes', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
          .then((collected) => {

badboy.guild.channels.create(`${args}`, { type: "voice" }).then(badboyy => {
  badboy.channel.send("Done")
        })
 
       .catch(() => {

       })
       
          })
          })
   }
  });

  //cc
///ممنوع السرقة youssefgames
  client.on('message', badboy => {
  if(badboy.content.startsWith(prefix + "cc")){
    if(!badboy.member.hasPermission("MANAGE_GUILD")) return badboy.reply("لاملك صلاحيات")
 if(badboy.author.bot || !badboy.guild) return badboy.reply("this command for server only")
 
    let args = badboy.content.split(" ").slice(1).join(" ")
if(!args) return badboy.reply("اعطي اسم لروم حقك")
    let embed = new Discord.MessageEmbed()
    .setTitle(`Are you Sure `)
   .setDescription(`are you Sure to make a room if you Sure type yes`)
   badboy.channel.send(embed).then((m) => {
      badboy.channel.awaitMessages(response => response.content === 'yes', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
          .then((collected) => {

badboy.guild.channels.create(`${args}`, { type: "text" }).then(badboyy => {
  badboy.channel.send("Done")
        })
 
       .catch(() => {

       })
       
          })
          })
   }
  });

//say

  client.on('message', msg => {
  if (msg.author.bot) return;
  let args = msg.content.split(" ").slice(1).join(" ")
  if (msg.content.startsWith(prefix + "say")) {
    msg.delete(100);
    const embed = new Discord.MessageEmbed()
      .setColor(``)
      .setDescription(args)
    msg.channel.send(embed)
  }
});

//short

const shorten = require('isgd');
client.on('message', ninja => {

  if (ninja.content.startsWith(prefix + 'short')) {
    if (!ninja.channel.guild) return;
    ninja.channel
    if (!ninja.member.hasPermission('ADMINISTRATOR'))
      return ninja.channel.send('**ليس لديك صلاحيات**');
    let args = ninja.content.split(" ").slice(1);
    if (!args[0]) return ninja.channel.send('**استعمل**: ' + prefix + 'short <رابط>')
    if (!args[1]) {
      shorten.shorten(args[0], function(res) {
        if (res.startsWith('Error:')) return ninja.channel.send('**Usage**: ' + prefix + 'short ');
        ninja.channel.send(`اختصار الرابط:**${res}**`);
      })
    } else {
      shorten.custom(args[0], args[1], function(res) {
        if (res.startsWith('Error:')) return ninja.channel.send(`اختصار الرابط:**${res}**`);
        ninja.channel.send(`اختصار الرابط:**${res}**`);
      })
    }
  }
});



//lock

client.on('message', prof=>{
 
    if(prof.content.startsWith(prefix + 'lock'))
    {
       if(!prof.guild.me.hasPermission('MANAGE_CHANNELS'))return prof.reply('**i dont hava premission `MANAGE_CHANNELS`:pleading_face: **')
  if(!prof.member.hasPermission('MANAGE_CHANNELS'))return prof.reply('**you dont hava`MANAGE_CHANNELS`Permission.!**')
  
  prof.channel.overwritePermissions([{
      id:prof.guild.id,
      deny:['SEND_MESSAGES'],
    }]).then(p=>{
        var professor = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setThumbnail(client.user.avatarURL())
        .setTitle(`Locked ${prof.channel.name} `)
        .setDescription(`This Channel is <#${prof.channel.id}> Locked `)
        prof.channel.send(professor);
    })
        
  //unlock

    }
    if(prof.content.startsWith(prefix + 'unlock'))
    {
       if(!prof.guild.me.hasPermission('MANAGE_CHANNELS'))return prof.reply('**i dont hava premission `MANAGE_CHANNELS`:pleading_face: **')
  if(!prof.member.hasPermission('MANAGE_CHANNELS'))return prof.reply('**you dont hava`MANAGE_CHANNELS`Permission.!**')
  
  prof.channel.overwritePermissions([{
      id:prof.guild.id,
      allow:['SEND_MESSAGES'],
    }]).then(p=>{
        var professor = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setThumbnail(client.user.avatarURL())
        .setTitle(`open ${prof.channel.name}  `)
        .setDescription(`This Channel is <#${prof.channel.id}> open `)
        prof.channel.send(professor);
    })
  
    }
  
  
});

//hide 

client.on('message', message =>{
if(message.content === prefix +"hide"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : false
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
               .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done Hide This Room ${message.channel}**`)
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
                })
}
});

//show

client.on('message', message =>{
if(message.content === prefix +"show"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
               VIEW_CHANNEL: true
            }).then(() => {
                const embed = new Discord.MessageEmbed()
                .setColor("#RANDOM")
                .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done Show This Room ${message.channel}**`)
 
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
                })
}
});

//clear

client.on("message",async message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}clear` || command == `${prefix}مسح` || command == `${prefix}cr`) { 
message.delete({timeout: 0})
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);
 
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.channel.send(`\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``).then(messages => messages.delete(5000))
if(!messagecount) messagecount = '100';
    message.channel.messages.fetch({limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
    message.channel.send(`\`\`\`js
${msgs.size} عدد الرسائل التي تم مسحها
\`\`\``).then(messages => 
messages.delete({timeout:3000}));
    })
  }    
});

//ban

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith( prefix + 'ban')) {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS"))
      return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
    if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS"))
      return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");      
 
    const user = message.mentions.users.first();
  
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
 
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            
                        const embed = new Discord.MessageEmbed()
           .setColor("0F750E")
          .setTitle(`Successfully banned ${user.tag}`)
          message.channel.send(embed);
          })
          .catch(err => {
 
            message.reply('I was unable to ban the member');
           
            console.error(err);
          });
      } else {
       
        message.reply("That user isn't in this guild!");
      }
    } else {
      
      const embed = new Discord.MessageEmbed()
.setColor("FF0000")
.setTitle("``You didn't mention the user to ban!`` ❌")
message.channel.send(embed);
    }
  }
});

//unban

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "all") {
      message.guild.fetchBans().then(zg => {
        zg.cache.forEach(NoNo => {
          message.guild.members.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all members **");
    }
    if (!args)
      return message.channel.send("**Please Type the member ID / all**");
    message.guild
    .members.unban(args)
      .then(m => {
        message.channel.send(`**✅ Unbanned ${m.username}**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

//waren

client.on('message', message => {
 
     if(message.content.startsWith(prefix + "warn")) {
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`You Don't have the permission `);
 let args = message.content.split(" ").slice(1);
 
    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp();
 
    if (!user) {
        embed.addField("**منشن الشخص** ", ` ${message.author.tag}?`)
            .setTimestamp();
        return message.channel.send(embed);
    } if (!reason) {
        embed.addField("**لماذا تريد اعطاء الشخص أنذار** ? ", ` ${user.tag}?`)
        return message.channel.send(embed);
    }
    embed.addField("**تم ارسال الانذار** ", ` ${user.tag}!`)
        .setTimestamp();
    message.channel.send(embed);
    const embed1 = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp()
        .addField("لقد اخذت انذار", `
 
          السبب : **${reason}**`)
        .setFooter(`
        انذار بواسطة ${message.author.tag}.`);
    user.send(embed1);
    message.delete();
}
});

//setnick


  client.on("message", message => {
if(message.content.startsWith(prefix + "setnick")){
if(message.author.bot || message.channel.type == "dm" || !message.member.hasPermission("MANAGE_NICKNAMES") || !message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return;
var user = message.mentions.members.first();
var args = message.content.split(" ").slice(2);
var nick = args.join(" ");
if(!user || !args) return message.channel.send(`
\`\`\`js
Command: setnick
تغيير لقب العضو.
 
الاستخدام:
#setnick (العضو)
#setnick (العضو) (اللقب الجديد)
 
أمثله للأمر:
#setnick @youssefgames
#setnick @youssefgames يوسف قيمز
\`\`\`

`);
message.guild.member(user.user).setNickname(`${nick}`);
message.channel.send(`Successfully changed **${user}** nickname to **${nick}**`);
}
});

//mute

client.on('message', async message => {
if(message.content.startsWith(prefix + 'mute')) {
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`>>> \`\`\`You Don't have the permission : \`\`\` \n\n **\`MUTE_MEMBERS\`**`);
let mention = message.mentions.members.first();
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!role) {
    message.guild.roles.create({
        data: {
            name: 'Muted',
            permissions: [],
            color: 'random'
        }
    })
}
if(!mention) return message.channel.send(`**Usage: ${prefix}mute \`<@user>\`**`);
message.guild.channels.cache.forEach(c => {
c.updateOverwrite(role , {
SEND_MESSAGES: false, 
ADD_REACTIONS: false
});
});
mention.roles.add(role)
message.channel.send(`**✅ - Successfully Muted ${mention.user.tag}**`)
}
});

//unmute

client.on('message', async message => {
if(message.content.startsWith(prefix + 'unmute')) {
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
let mention = message.mentions.members.first();
var args = message.content.split(" ").slice(2).join(" ")
let member = message.mentions.members.first()
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!mention) return message.channel.send(`**Usage: ${prefix}unmute \`<@user>\` **`);
if (member.user.id === client.user.id) return message.channel.send(`**لم اجد الشخص**`);
mention.roles.remove(role)
message.channel.send(`**✅ - تم بنجاح ${mention.user.tag} **`)
let mens = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setTitle(`You Have Been UnMuted`)
.setDescription(`**
 In Server : ${message.guild.name}
 With Reson : ${args || "No reason provided."}
 By : ${message.author}
**`)
.setColor("GREY")
.setFooter('Id ' + message.author.id, message.author.avatarURL())
member.send(mens);
}
});

//ticket commends

//ticket


client.on('message', message =>{
if(message.content === prefix +"create-log"){
message.guild.channels.create(`ticket-log`, { type: "text" })
message.channel.send('Done Create log channel , ☑️')
}
});


client.on('message', message =>{
if(message.content.startsWith(prefix + "new")){
  let args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.channel.send(`**__Ex :__ ${prefix}new Nitro**`);
message.react("✅")
message.react("❎")

  // Filters
  const yesFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id
  const noFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id

  const yes = message.createReactionCollector(yesFilter, {timer: 6000})
  const no = message.createReactionCollector(noFilter, {timer: 6000})
   yes.on('collect', (r, u) => {
      message.delete();
      message.reply("Done Create Your Ticket , ☑️")
      message.guild.channels.create(`ticket-${message.author.id}`, { type: "text" }).then(async channel => {
      channel.createOverwrite(message.guild.id, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false
      });
            channel.createOverwrite(message.author.id, {
        VIEW_CHANNEL: true,
        SEND_MESSAGES: true
      });
            channel.send(`<@${message.author.id}>`, new Discord.MessageEmbed()
            .setTitle("Welcome to your ticket!")
            .setColor("GREEN")
            .setDescription(`Reason : ${args}`)
            
            )
})       
          const log = client.channels.cache.find(channel => channel.name === 'ticket-log');
      const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("GREEN")
      .setTitle("Created Ticket 🎟️")
      .addField("Created By :" , `${message.author.username}`)
      .addField("Reason :" , `${args}`)
      .setFooter(message.author.id,message.author.avatarURL())
      log.send(embed)
  })

     no.on('collect', (r, u) => {
      message.delete();
  })

}
});

/*
- [ Copyright youssefgames ] -
*/


client.on('message', message =>{
if(message.content === prefix +"close"){
             if(!message.channel.name.includes("ticket-")) return message.channel.send("**❌ | This is Not Ticket Channel**");
message.channel.createOverwrite(message.guild.id, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false
});

message.channel.createOverwrite(message.author.id, {
        VIEW_CHANNEL: false,
        SEND_MESSAGES: false
});
       const log = client.channels.cache.find(channel => channel.name === 'ticket-log');
      const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("GREEN")
      .setTitle("Closed Ticket 🔒")
      .addField("Closed By :" , `${message.author.username}`)
      .setFooter(message.author.id,message.author.avatarURL())
      log.send(embed);
             if(!log) message.author.send("**لا يوجد روم لوق من فضلك قم بأنشاء روم اللوق**");

}
});

/*
- [ Copyright youssefgames ] -
*/

client.on('message', message =>{
if(message.content === prefix +"delete"){
    if (!message.member.hasPermission('MANAGE_GUILD')) {
message.channel.send(`**انت لا تمتلك البرمشن المطلوب MANAGE_GUILD**`);
};
         if(!message.channel.name.includes("ticket-")) return message.channel.send("**❌ | This is Not Ticket Channel**")
  message.react("✅")
message.react("❎")
  // Filters
  const yesFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id
  const noFilter = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id

  const yes = message.createReactionCollector(yesFilter, {timer: 6000})
  const no = message.createReactionCollector(noFilter, {timer: 6000})
     yes.on('collect', (r, u) => {
message.channel.delete();
       const log = client.channels.cache.find(channel => channel.name === 'ticket-log');
      const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("GREEN")
      .setTitle("Deleted Ticket 🗑️")
      .addField("Deleted By :" , `${message.author.username}`)
      .setFooter(message.author.id,message.author.avatarURL())
      log.send(embed)
  })
       no.on('collect', (r, u) => {
      message.delete();
  })

}
});

client.on('message', message =>{
if(message.content.startsWith(prefix + "rename")){
  if (!message.member.hasPermission('MANAGE_GUILD')) {
message.channel.send(`**انت لا تمتلك البرمشن المطلوب MANAGE_GUILD**`);
};
 if(!message.channel.name.includes("ticket-")) return message.channel.send("**❌ | This is Not Ticket Channel**")
     let args = message.content.split(" ").slice(1).join(" ");
    if (!args) return message.channel.send(`**__Ex :__ ${prefix}rename Done**`);
message.channel.setName(`${args}`)
    message.channel.send(
      `**Done rename ticket to ${args}  , ☑️**`
    );
           const log = client.channels.cache.find(channel => channel.name === 'ticket-log');
      const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("GREEN")
      .setTitle("Renamed Ticket 🔖")
      .addField("Renamed By :" , `${message.author.username}`)
      .addField("New Name Channel :" , `${args}`)
      .setFooter(message.author.id,message.author.avatarURL())
      log.send(embed)
}
});
/*
- [ Copyright youssefgames ] -
*/
///ممنوع السرقة youssefgames
client.on('message', message =>{
if(message.content.startsWith(prefix + "add")){
  if (!message.member.hasPermission('MANAGE_GUILD')) {
message.channel.send(`**انت لا تمتلك البرمشن المطلوب MANAGE_GUILD**`);
};
if(!message.channel.name.includes("ticket-")) return message.channel.send("**❌ | This is Not Ticket Channel**")
let member = message.mentions.members.first();
if (!member) return message.channel.send(`**Please mention the user**`);
    if (
      message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    )
      return message.channel.send(
        `This member already in this ticket , :rolling_eyes:`
      );
    message.channel.createOverwrite(member.id, {
      SEND_MESSAGES: true,
      VIEW_CHANNEL: true,
      READ_MESSAGE_HISTORY: true
    });
    message.channel.send(
      `**Done added <@${member.user.id}> to the ticket , ☑️**`
    );
    const log = client.channels.cache.find(channel => channel.name === 'ticket-log');
      const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("GREEN")
      .setTitle("Add Memeber for ticket 📥")
      .addField(" Added By :" , `${message.author.username}`)
      .addField("Member :" , `${member}`)
      .setFooter(message.author.id,message.author.avatarURL())
      log.send(embed)
}
});

///ممنوع السرقة youssefgames
/*
- [ Copyright youssefgames ] -
*/

client.on('message', message =>{
if(message.content.startsWith(prefix + "remove")){
    if (!message.member.hasPermission('MANAGE_GUILD')) {
message.channel.send(`**انت لا تمتلك البرمشن المطلوب MANAGE_GUILD**`);
};
if(!message.channel.name.includes("ticket-")) return message.channel.send("**❌ | This is Not Ticket Channel**")
let member = message.mentions.members.first();
if (!member) return message.channel.send(`**Please mention the user**`);
    if (
      message.channel
        .permissionsFor(member)
        .has(["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"])
    )

    message.channel.createOverwrite(member.id, {
      SEND_MESSAGES: false,
      VIEW_CHANNEL: false,
      READ_MESSAGE_HISTORY: false
    });
    message.channel.send(
      `**Done removed <@${member.user.id}> to the ticket , ☑️**`
    );

        const log = client.channels.cache.find(channel => channel.name === 'ticket-log');
      const embed = new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setColor("GREEN")
      .setTitle("Remove Memeber for ticket 📤")
      .addField("Removed By :" , `${message.author.username}`)
      .addField("Member :" , `${member}`)
      .setFooter(message.author.id,message.author.avatarURL())
      log.send(embed)

}
});

//Protection Commands

//antibot

let antibots = JSON.parse(fs.readFileSync('./antibots.json', 'utf8'));//require antihack.json file
client.on('message', message => {
  if (message.content.startsWith(prefix + "antibots on")) {
    if (!message.channel.guild) return message.reply('**This Command Only For Servers**');
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Sorry But You Dont Have Permission** `ADMINISTRATOR`');
    antibots[message.guild.id] = {
      onoff: 'On',
    }
    message.channel.send(`**✅ The AntiBots Is __𝐎𝐍__ !**`)
    fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }

})



client.on('message', message => {
  if (message.content.startsWith(prefix + "antibots off")) {
    if (!message.channel.guild) return message.reply('**This Command Only For Servers**');
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Sorry But You Dont Have Permission** `ADMINISTRATOR`');
    antibots[message.guild.id] = {
      onoff: 'Off',
    }
    message.channel.send(`**⛔ The AntiBots Is __𝐎𝐅𝐅__ !**`)
    fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
      if (err) console.error(err)
        .catch(err => {
          console.error(err);
        });
    });
  }

})

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id]) antibots[member.guild.id] = {
    onoff: 'Off'
  }
  if (antibots[member.guild.id].onoff === 'Off') return;
  if (member.user.bot) return member.kick()
})

fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
  if (err) console.error(err)
    .catch(err => {
      console.error(err);
    });

});

//antilink

let spread = JSON.parse(fs.readFileSync('./antilinks.json' , 'utf8'));
 
 
client.on('message', message => {
    if(message.content.startsWith(prefix + "antilinks off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**⛔ The AntiSpread Is __𝐎𝐅𝐅__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        client.on('message', message => {
    if(message.content.startsWith(prefix + "antilinks on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
spread[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**✅ The AntiSpread Is __𝐎𝐍__ !**`)
          fs.writeFile("./spread.json", JSON.stringify(spread), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
    client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.snapchat.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
 
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.instagram.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.twitter.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('http://www.facebook.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
});
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.youtube.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
 
});
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://www.discordapp.com/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
 
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('https://discord.gg/')){
            if(!spread[message.guild.id]) spread[message.guild.id] = {
        onoff: 'Off'
            }
        if(spread[message.guild.id].onoff === 'Off') return;
        message.delete()
    return message.reply(`**⛔ The Antispread ON ! So You Cant spread Here !**`)
    }
 
});

client.on("message", Russi => {
  if (Russi.content.includes("https://") || Russi.content.includes("Https://")) {
      if(Russi.member.hasPermission('ADMINISTRATOR')) return;
    console.log("Share links" + Russi.content + " from " + `${Russi.author.tag}` + "successful deleted")
      Russi.delete();
    Russi.channel.send("**No i delete your message you can not share links here , " + `<@${Russi.author.id}>**`)
  }
  if (Russi.content.includes("http://") || Russi.content.includes("Http://")) {
    if(Russi.member.hasPermission('ADMINISTRATOR')) return;
    console.log("Share links " + Russi.content + " from " + `${Russi.author.tag}` + "successful deleted")
    Russi.delete();
    Russi.channel.send("**No  I delete your message you can not share the links here, " + `<@${Russi.author.id}>**`)
  }
  if (Russi.content.includes("www.") || Russi.content.includes("Www.")) {
if(Russi.member.hasPermission('ADMINISTRATOR')) return;
    console.log("share links" + Russi.content + " from " + `${Russi.author.tag} + "successful deleted"`)
    Russi.delete();
    Russi.channel.send("**No , I delete your message , you can not share links here , " + `<@${Russi.author.id}>**`)
 }
});


//تقديم

client.on("message", message => {
  if (message.content.startsWith(prefix + "تقديم")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    let channel = message.guild.channels.cache.find(gg => gg.name === "التقديمات");
    if (!channel)
      return message.reply(
        "**لانشاء روم التقديمات ${prefix}room1 من فضلك اكتب الامر**"
      );
    if (channel) {
      message.channel.send(message.member + ", **:timer:**").then(m => {
        m.edit(message.member + ", **اسمك الحقيقى  ✍**");
        m.channel
          .awaitMessages(m1 => m1.author == message.author, {
            max: 1,
            time: 60 * 1000
          })
          .then(m1 => {
            m1 = m1.first();
            var name = m1.content;
            m1.delete();
            m.edit(message.member + ", **:timer:**").then(m => {
              m.edit(message.member + ", **كم عمرك 🎓**");
              setTimeout(() => {
                m.delete();
              }, 10000);
              m.channel
                .awaitMessages(m2 => m2.author == message.author, {
                  max: 1,
                  time: 60 * 1000
                })
                .then(m2 => {
                  m2 = m2.first();
                  var age = m2.content;
                  m2.delete();
                  message.channel
                    .send(message.member + ", **:timer:**")
                    .then(m => {
                      m.edit(message.member + ", **هل تتفاعل في الرتبه🎙**");
                      setTimeout(() => {
                        m.delete();
                      }, 10000);
                      m.channel
                        .awaitMessages(m1 => m1.author == message.author, {
                          max: 1,
                          time: 60 * 1000
                        })
                        .then(m3 => {
                          m3 = m3.first();
                          var ask = m3.content;
                          m3.delete();
                          message.channel
                            .send(message.member + ", **:timer:**")
                            .then(m => {
                              m.edit(
                                message.member + ", **هل ستحترم القوانين ؟ 📑**"
                              );
                              setTimeout(() => {
                                m.delete();
                              }, 10000);
                              m.channel
                                .awaitMessages(
                                  m1 => m1.author == message.author,
                                  { max: 1, time: 60 * 1000 }
                                )
                                .then(m4 => {
                                  m4 = m4.first();
                                  var ask2 = m4.content;
                                  m4.delete();
                                  message.channel
                                    .send(message.member + ", **:timer:**")
                                    .then(m => {
                                      m.edit(
                                        message.member +
                                          ", **لماذا يجب علينا ان نقبلك ؟ وما هي الرتبه التي تريدها 🤔**"
                                      );
                                      m.channel
                                        .awaitMessages(
                                          m1 => m1.author == message.author,
                                          { max: 1, time: 60 * 1000 }
                                        )
                                        .then(m5 => {
                                          m5 = m5.first();
                                          var ask3 = m5.content;
                                          m5.delete();
                                          m.edit(
                                            message.member +
                                              ", **....جارى جمع البيانات**"
                                          ).then(mtime => {
                                            setTimeout(() => {
                                              let embed = new Discord.MessageEmbed()
                                                .setColor("RANDOM")
                                                .setTitle(
                                                  `**تقديم على رتبه** [__**${message.guild.name}**__]`
                                                )
                                                .addField(
                                                  "**`الاسم`**",
                                                  `${name}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`العمر`**",
                                                  `${age}`,
                                                  true
                                                )
                                                .addField(
                                                  "**`هل سوف يتفاعل ؟`**",
                                                  `${ask}`
                                                )
                                                .addField(
                                                  "**`هل سوف يحترم القوانين ؟`**",
                                                  `${ask2}`
                                                )
                                                .addField(
                                                  "**`لماذا يجب علينا قبوله|وماهى الرتبه اللتي يريدها`**",
                                                  `${ask3}`
                                                )
                                                .setFooter(
                                                  `Name : ${message.author.username}\nID User : ${message.author.id}`,
                                                  "https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif"
                                                );
                                              channel.send(embed);
                                            }, 2500);
                                            setTimeout(() => {
                                              mtime.delete();
                                            }, 3000);
                                          });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
          });
      });
    }
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "room1")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("`MANAGE_CHANNELS"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    message.guild.channels.create("التقديمات", "text").then(c => {
      c.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("**✅ تم انشاء روم التقديمات بنجاح**");
  }
});
//bots
client.on("message", message => {
  if (message.content === prefix + "bots") {
    var list_all = [];
    message.guild.members.cache.forEach(bb => {
      if (!bb.user.bot) return;
      list_all.push(`<@${bb.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});

//help

client.on('message', message => {
    if (message.content.startsWith(prefix + 'help')) {
    let pages = [`
     **__Common commands__** :busts_in_silhouette:

     **__Prefix__:${prefix} **

     ${prefix}profile يعرض بروفايلك

     ${prefix}help يعرض اوامر البوت

     ${prefix}avatar يعرض صورة الشخص

     ${prefix}user يعرض معلومات الشخص

     ${prefix}bot معلومات عن البوت

     ${prefix}server لاضهار معلومات عن السرفر
     
     ${prefix}avatarserver لاضهار صورة السرفر

     ${prefix}ping لاضهار سرعة اتصال

     ${prefix}credit لاضهار المال

     ${prefix}daily لاخذ راتب يومي 

     ${prefix}trans لتحويل كردة

     ${prefix}tax لمعرفة الضريبة

     ${prefix}id لمعرفة الايدي حقك

     ${prefix}uptime لتعرف كم اشتغل البوت

     ${prefix}bans لتعرف كم واحد تبند

     ${prefix}fedback لاعطاء رايك

     ${prefix}report لتبليغ عن شخص

     ${prefix}sug لتعطي اقتراح 

     ${prefix}anime يعرض معلومات انيمي

     ${prefix}guilds لمعرفة السرفرات الى داخلها البوت

     ${prefix}boost لمعرفة لفل و عدد بوستات السرفر

     ${prefix}rules لمعرفة القوانين

     ${prefix}say اعادة الكلام

     ${prefix}bots يمنشنلك كل البوتات

     ${prefix}discrim يعرف شخصيتك

     ${prefix}top لفلك في الكتابة و الصوت

     ${prefix}top text لقلك الكتابي

     ${prefix}top voice لفلك الصوتي

     ${prefix}للتقديم للادارة تقديم
      `
    ,`
    **__Admin only__ :tools: **

    ${prefix}تفعيل
    
    ${prefix}hide اخفاء روم

    ${prefix}show اظهار روم

    ${prefix}lock قفل الروم

    ${prefix}unlock فتح الشات

    ${prefix}unban يشيل الحظر

    ${prefix}ban يحظر العضو

    ${prefix}unmute يشيل الاسكات

    ${prefix}mute يعطي ميوت

    ${prefix}vmute لاعطاء ميوت للشخص الى داخل روم صوطي

    ${prefix}vunmute يشيل عن الشخص ميوت صوطي

    ${prefix}vkick لطرد شخص من روم الصوطي

    ${prefix}role لاعطا عضو رول

    ${prefix}warn يعطي تحذير

    ${prefix}server يظهر معلومات السيرفر

    ${prefix}clear يمسح الشات

    ${prefix}cv انشاء روم صوتي

    ${prefix}cc انشاء روم كتابي

    ${prefix}ca category انشاء 

    ${prefix}setnick تغير اسم العضو

    ${prefix}short لاختصار الرابط

    ${prefix}room1 لصنع روم التقديم
      `
    ,`
     **__Fun commands__ :joy: **

     ${prefix}triggered

     ${prefix}trash

     ${prefix}deletes

     ${prefix}slap

     ${prefix}hug

     ${prefix}wanted

     ${prefix}meme

     ${prefix}nokta

     ${prefix}sara7a

     ${prefix}za7f

     ${prefix}winer

     ${prefix}game

     ${prefix}spank

     ${prefix}kill

     ${prefix}cut

     ${prefix}blur

     ${prefix}circle

     ${prefix}rip

     ${prefix}هل تعلم

     ${prefix}الاستغفار

     `

    ,`
     **__ticket commands__ :tickets: **

     ${prefix}new لفتح تذكرة
    
     ${prefix}close لتسكير التذكرة
     
     ${prefix}delete لمسح التذكرة
     
     ${prefix}add لاضافة شخص للتذكرة
     
     ${prefix}remove كيتشيل العضو من التذكرة
     
     ${prefix}rename لتسميت التذكرة
     
     ${prefix}create-log لفتح روم للتذكرة لوق
     `
    ,`
    **__invite commands :door: __**

     ${prefix}invite لمعرفت عدد دعواتك

     ${prefix}info لمعرفة التفاصيل

     ${prefix}topinvites لمعرفت مرتبتك في الانفايت
    `
    ,`
    **__brodcast commands__**
      
     ${prefix}ebc رسالة بامباد

     ${prefix}obc رسالة عادية

     ${prefix}bc يرسل الرسالة بشكل حلو
    `
    ,`
    **__Protection Commands__**

     ${prefix}antibots on

     ${prefix}antibots off

     ${prefix}antilinks on

     ${prefix}antilinks off

     ${prefix}antihack on

     ${prefix}antihack off
     `
     ,`
    **__room روم لازم تسويها__**
      
      ${prefix}cc report

      ${prefix}cc fedback

      ${prefix}cc suggestion
      
      ${prefix}cc welcome او Welcome ترحيب او الترحيب او 

      ${prefix}cc او خروج exit او bay
     `

     ,`
     قريبا

     `

     ,`

      قريبا
     
    `]
     let page = 1;
     
        let embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page-1])
     
        message.channel.send(embed).then(msg => {
     
            msg.react('◀').then( r => {
                msg.react('▶')
     
               setTimeout(() => {
            msg.delete
        }, 60 * 1000)
     
            const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
     
     
            const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
     
     
     
            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            })
        })
        }
    });



//welcome prv

client.on('guildMemberAdd', member => {
    member.createDM().then(function (channel) {
return channel.send("**مرحبا بك نورة السرفر بوجودك انشاله انكون عند حسن الضن**")
    }
    )});

//welcome room

client.on('guildMemberAdd', member => {

  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome','ترحيب','الترحيب','Welcome');
 
  if (!channel) return;
 
  channel.send(`Welcome to the server, ${member}`);
  channel.send('https://cise-egypt.com/wp-content/uploads/2019/09/WELCOME-ST-IVES.jpg')
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.mentions.has(client.user))
    {
    message.reply(`**My Prefix Is** : \`${prefix}\``)
    }
});

//blur

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "blur")) {
        var avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Blur().getImage(`${avatar}`,);
        let attach = new Discord.MessageAttachment(img, "Blur.png");;
        message.channel.send(attach)
    }
});

//cercle

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "circle")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Circle().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Circle.png");;
        message.channel.send(attach)
    }
});

//rip

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "rip")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Rip().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Ri.png");;
        message.channel.send(attach)
    }
});



client.on("guildMemberAdd", member =>{
let role = member.guild.roles.cache.find(role => role.name == "member") // هنا تحط اسم الرتبة 
if (!role) return;
  member.roles.add(role);

});
client.on("guildMemberAdd", member =>{
let role = member.guild.roles.cache.find(role => role.name == "Member") // هنا تحط اسم الرتبة 
if (!role) return;
  member.roles.add(role);

});
client.on("guildMemberAdd", member =>{
let role = member.guild.roles.cache.find(role => role.name == "اعضاء") // هنا تحط اسم الرتبة 
if (!role) return;
  member.roles.add(role);

});
client.on('message', msg => {
  if (msg.content === 'اهلا') {
    msg.reply('مرحبا بك');
  }
});
client.on('message', msg => {
  if (msg.content === 'هلا') {
    msg.reply('ولكم نورت');
  }
});
client.on('message', msg => {
  if (msg.content === 'كيف الحال') {
    msg.reply('الحمد الله نشكره على نعمه');
  }
});
client.on('message', msg => {
  if (msg.content === 'شكرا') {
    msg.reply('الشكر الله حياك باي وقت');
  }
});
client.on('message', msg => {
  if (msg.content === 'استغفر الله') {
    msg.reply('واتوب اليه');
  }
});
client.on('message', msg => {
  if (msg.content === 'هلا انا عضو جديد') {
    msg.reply('هلا والله نورة السرفر بوجودك');
  }
});
     
 //bay
 client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'exit','خروج','bay');
  if (!channel) return;
  channel.send(` ${member} مع السلامة تشرفنا بمعرفتك `);
});

client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let BcList = new Discord.MessageEmbed()
.setColor("#ffff")
.setThumbnail(message.author.avatarURL())
.setAuthor(`محـتوى الرسالة : ${args}`)
.setDescription(`**أضــغط على ✅ لارسال البرودكاست**`)
if (!args) return message.reply(':x: **يجب عليك كتابة رسالة لارسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('✅')
.then(() =>msg.react('✅'))
let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
EmbedBc.on("collect", r => {
message.channel.send(`✅**تـــم الارسال**`).then(m => m.delete(5000));
message.guild.members.cache.forEach(m => {
var bc = new
Discord.MessageEmbed()
.setColor('#ffff')
.setAuthor(`🔴 Server : ${message.guild.name}`)
.setDescription(`✉️ **Message :** 
**${args}**
―
🔰 **By :**
**${message.author.username}**
`)
.setFooter(client.user.tag,client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
m.send({ embed: bc })
msg.delete();
})
})
})
}
});










client.on("message", message => {
  if (message.content.startsWith(prefix + "discrim")) {
    var args1 = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let size = 1;
    if (message.author.bot) return;
    if (!message.guild.member) return;

    if (args1 == "") {
      var tagkplayer = message.author.discriminator;
    } else {
      var tagkplayer = args1;
      if (isNaN(args1))
        return message.channel.send(`**> ${prefix}help discrim**`);
      if (args1.length != 4) return message.channel.send("**> Put 4 numbers**");
    }

    var playersFind = new Discord.MessageEmbed()
      .setTitle(`**> Search tag : \`\`#${tagkplayer}\`\`**`)
      .setDescription(
        `**>  Members They have tag  : \`\`${
          client.users.cache.filter(m => m.discriminator == tagkplayer).size
        }\`\` .\n\n\`\`\`═════════════\n\n${client.users.cache
          .filter(m => m.discriminator == tagkplayer)
          .map(m => size++ + ". " + m.tag)
          .slice(0, 20)
          .join("\n") ||
          `i can't find member with this tag`}\n\n═════════════\`\`\`**`
      )
      .setColor("#ffffff")
      .setTimestamp()
      .setFooter(message.author.username, message.author.avatarURL());

    message.channel.send(playersFind);
    message.delete();
  }
});

client.on("message", message => {
  let cmd = message.content.toLowerCase().split(" ")[0];
  cmd = cmd.slice(prefix.length);
  if (cmd === "role") {
    if (!message.channel.guild || message.author.bot) return;
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    var role = message.content.split(" ").slice(2).join(" ").toLowerCase();
    var role1 = message.guild.roles.cache.filter(r => r.name.toLowerCase().indexOf(role) > -1).first();
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
      return message.channel.send(`I Need Permissions !!`);
    if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES"))
      return;
    if (!user) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
    if (!role) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
    if (!role1) return message.channel.send(`**>>> ${prefix}role <@mention or iD> role**`);
    if (user.roles.cache.find(c => c.id === role1.id))
      return user.roles.remove(role1).then(() => {
message.channel.send(`**>>> Role \`${role1.name}\` removed to ${user.user}**`);
}).catch(err => message.channel.send("Error: **" + err.message + "**"));
user.roles.add(role1).then(() => {
        message.channel.send(
          `**>>> Role \`${role1.name}\` added to ${user.user}**`
        );
      })
      .catch(err => message.channel.send("Error: **" + err.message + "**"));
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "vkick")) {
    let args = message.content.split(" ");
    let user = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[1])
    );
    if (!message.channel.guild || message.author.bot) return;
    if (!message.guild.member(message.author).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check Your Permission");
    if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS"))
      return message.channel.send("Please Check My Permission");
    if (!message.member.voice.channel)
      return message.channel.send("Your are not in voice channel");
    if (!user) return message.channel.send(`**>>> ${prefix}vkick <@mention or id>**`);
    if (!message.guild.member(user).voice.channel)
      return message.channel.send(
        `**${user.user.username}** Has not in Voice channel`
      );
    await user.voice.kick();
    message.channel.send(
      `**${user.user.username}** has been kicked from **Voice Channel**`
    );
  }
   });


client.on("message", message => {
if (message.content.startsWith(prefix + "vmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission!");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission!");
    let user = message.mentions.users.first();
        if (!user) return message.channel.send(`**>>> ${prefix}vmute <@mention or id>**`);
    if (!message.guild.member(user).voice.channel)
      return message.channel.send(
        `**${user.user.username}** this user has not in voice channel`
      );
    message.guild.member(user).voice.setMute(true);
    return message.channel.send(
      "@" + user.username + " Has Been Voice Muted! "
    );
  }
});
client.on("message", message => {
if (message.content.startsWith(prefix + "vunmute")) {
    if (!message.guild.member(message.author).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check Your Permission!");
    if (!message.guild.member(client.user).hasPermission("MUTE_MEMBERS"))
      return message.channel.send("Please Check My Permission!");
    let user = message.mentions.users.first();
            if (!user) return message.channel.send(`**>>> ${prefix}vunmute <@mention or id>**`);
    if (!message.guild.member(user).voice.channel)
      return message.channel.send(
        `**${user.user.username}** this user has not in voice channel`
      );
    message.guild.member(user).voice.setMute(false);
    return message.channel.send(
      "@" + user.username + " Has Been Voice Muted! "
    );
  }
});


var top = require("./top.json");
function save() {
    fs.writeFileSync("./top.json", JSON.stringify(top, null, 4));
}
client.on("voiceStateUpdate", async function(oldMember, newMember) {
    if (newMember.user.bot) return;
    if (!top[newMember.guild.id]) top[newMember.guild.id] = {};
    if (!top[newMember.guild.id][newMember.user.id]) top[newMember.guild.id][newMember.user.id] = {
        "text": 0,
        "voice": parseInt(Math.random()*10),
        "msgs": 0,
        "id": newMember.user.id
    }
    save();
    if (!oldMember.voice.channel && newMember.voice.channel) {
        var addXP = setInterval(async function () {
            top[newMember.guild.id][newMember.user.id].voice+=parseInt(Math.random()*4);
            save();
            if (!newMember.voice.channel) {
                clearInterval(addXP);
            }
        }, 60000);
    }
});
client.on("message", async function (message) {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!top[message.guild.id]) top[message.guild.id] = {};
    if (!top[message.guild.id][message.author.id]) top[message.guild.id][message.author.id] = {
        "text": parseInt(Math.random()*10),
        "voice": 1,
        "msgs": 0,
        "id": message.author.id
    }
    if (top[message.guild.id][message.author.id].msgs > 10) {
        top[message.guild.id][message.author.id].text += parseInt(Math.random()*4);
        top[message.guild.id][message.author.id].msgs = 0;
    }
    save();
    var args = message.content.split(" ");
    var cmd = args[0].toLowerCase();
    if (!message.content.startsWith(prefix)) return;
  if(message.content.startsWith(prefix + "top text")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 5).filter(user => user.text > 0 && message.guild.members.cache.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.MessageEmbed()
            .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL())
  .setColor("13B813")
        .addField(`**:speech_balloon: | TEXT LEADERBOARD**`, `${textStr}   \n\n\n **? | For More: \`${prefix}top text\`**`, true)  
        .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()
            message.channel.send({
                embed: embed
            });
     //   if (!message.content.startsWith(prefix)) return;
  } else {
    if(message.content.startsWith(prefix + "top voice")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 5).filter(user => user.voice > 0 && message.guild.members.cache.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.MessageEmbed()
            .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL())
  .setColor("13B813")
        .addField(`**:microphone2: | VOICE LEADERBOARD**`, `${voiceStr}   \n\n\n **:sparkles: More?** \`${prefix}top voice\``, true)
  
        .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()  
            message.channel.send({
                embed: embed
            });
      
 
     //  break;
       // if (!message.content.startsWith(prefix)) return;
  } else {
       if(message.content.startsWith(prefix + "top")) {
            var topArray = Object.values(top[message.guild.id]);
            var num = 0;
            var textStr = `${topArray.sort((a, b) => b.text - a.text).slice(0, 10).filter(user => user.text > 0 && message.guild.members.cache.get(user.id)).map(function (user) {
                if (user.text > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.text}\` **`
                }
            }).join("\n")}`;
            num = 0;
            var voiceStr = `${topArray.sort((a, b) => b.voice - a.voice).slice(0, 10).filter(user => user.voice > 0 && message.guild.members.cache.get(user.id)).map(function (user) {
                if (user.voice > 0) {
                    return `**#${++num} | <@${user.id}> XP: \`${user.voice}\` **`
                }
            }).join("\n")}`;
            var embed = new Discord.MessageEmbed()  
            .setAuthor("?? | Guild Score Leaderboards", message.guild.iconURL())
            .addField("**TOP 5 TEXT :speech_balloon:**", `${textStr}  \n\n  **:sparkles: More?** \`${prefix}top text\``, true)
            .addField("**TOP 5 VOICE :microphone2:**", `${voiceStr} \n\n **:sparkles: More?** \`${prefix}top voice\``, true)
            .setFooter(message.author.tag, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("13B813");
            message.channel.send({
                embed: embed
            
  
            });

      
       
        }
  }
  }
  
});


const Sra7a = [
  'صراحه  |  صوتك حلوة؟',
  'صراحه  |  التقيت الناس مع وجوهين؟',
  'صراحه  |  شيء وكنت تحقق اللسان؟',
  'صراحه  |  أنا شخص ضعيف عندما؟',
  'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
  'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
  'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
  'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
  'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
  'صراحه  |  أشجع شيء حلو في حياتك؟',
  'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
  'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
  'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
  'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
  'صراحه  |  نظرة و يفسد الصداقة؟',
  'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
  'صراحه  |  شخص معك بالحلوه والمُره؟',
  'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
  'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
  'صراحه  |  وش تتمنى الناس تعرف عليك؟',
  'صراحه  |  ابيع المجرة عشان؟',
  'صراحه  |  أحيانا احس ان الناس ، كمل؟',
  'صراحه  |  مع مين ودك تنام اليوم؟',
  'صراحه  |  صدفة العمر الحلوة هي اني؟',
  'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
  'صراحه  |  صفة تحبها في نفسك؟',
  'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
  'صراحه  |  تصلي صلواتك الخمس كلها؟',
  'صراحه  |  ‏تجامل أحد على راحتك؟',
  'صراحه  |  اشجع شيء سويتة بحياتك؟',
  'صراحه  |  وش ناوي تسوي اليوم؟',
  'صراحه  |  وش شعورك لما تشوف المطر؟',
  'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
  'صراحه  |  ما اكثر شي ندمن عليه؟',
  'صراحه  |  اي الدول تتمنى ان تزورها؟',
  'صراحه  |  متى اخر مره بكيت؟',
  'صراحه  |  تقيم حظك ؟ من عشره؟',
  'صراحه  |  هل تعتقد ان حظك سيئ؟',
  'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
  'صراحه  |  كلمة تود سماعها كل يوم؟',
  'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
  'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
  'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
  'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
  '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
  'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
  '‏صراحه | هل تحب عائلتك ام تكرههم؟',
  '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
  '‏صراحه  |  هل خجلت من نفسك من قبل؟',
  '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
  '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
  '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
 '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
  '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
  '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
  'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
  '‏صراحه  |  ما هو عمرك الحقيقي؟',
  '‏صراحه  |  ما اكثر شي ندمن عليه؟',
'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
client.on('message', message => {
if (message.content.startsWith(prefix + "sara7a")) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.MessageEmbed()
.setTitle("لعبة صراحة ..")
.setColor('RANDOM')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
               .setTimestamp()

message.channel.send(client);
message.react("??")
}
});

const Za7f = [
 "**صورة وجهك او رجلك او خشمك او يدك**.",
 "**اصدر اي صوت يطلبه منك الاعبين**.",
 "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
 "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
 "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
 "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
 "**ذي المرة لك لا تعيدها**.",
 "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
 "**صور اي شيء يطلبه منك الاعبين**.",
 "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
 "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
 "**سو مشهد تمثيلي عن مصرية بتولد**.",
 "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
 "**ذي المرة لك لا تعيدها**.",
 "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
 "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
 "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
 "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
 "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
 "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
 "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
 "**اتصل على امك و قول لها انك تحبها :heart:**.",
 "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
 "**قل لواحد ماتعرفه عطني كف**.",
 "**منشن الجميع وقل انا اكرهكم**.",
 "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
 "**روح المطبخ و اكسر صحن او كوب**.",
 "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
 "**قول لاي بنت موجود في الروم كلمة حلوه**.",
 "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
 "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
 "**قول قصيدة **.",
 "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
 "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
 "**اول واحد تشوفه عطه كف**.",
 "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
 "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
 "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
 "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
 "**تاخذ عقابين**.",
 "**قول اسم امك افتخر بأسم امك**.",
 "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
 "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
 "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
 "**تتصل على الوالده  و تقول لها خطفت شخص**.",
 "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
 "**����تصل على الوالده  و تقول لها  احب وحده**.",
   "**تتصل على شرطي تقول له عندكم مطافي**.",
   "**خلاص سامحتك**.",
   "** تصيح في الشارع انا  مجنوون**.",
   "** تروح عند شخص تقول له احبك**.",

]
client.on('message', message => {
if (message.content.startsWith(prefix + "za7f")) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.MessageEmbed()
.setTitle("لعبة زحف ..")
.setColor('RANDOM')
.setDescription(`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
               .setTimestamp()

message.channel.send(client);
message.react("??")
}
});


let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('message', message => { 
    if(message.content.startsWith(prefix + "antihack")) { 
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**'); 
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' ); 
        if(!antihack[message.guild.id]) antihack[message.guild.id] = { 
          onoff: 'Off'
        } 
          if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**✅ The AntiHack Is __𝐎𝐍__ !**`), antihack[message.guild.id].onoff = 'On']
          if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**⛔ The AntiHack Is __𝐎𝐅𝐅__ !**`), antihack[message.guild.id].onoff = 'Off']
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        });
        



client.login(process.env.token);
