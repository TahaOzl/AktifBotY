const Discord = require('discord.js');

const cevaplar = [
    "Olabilir Mantıklı",
    "Olamaz Okadar Mantıklı Değil",
    "Sorunu Anlamadım Bidaha Sorarmısın",
    "Bu Sorunun Cevabını Bilmiyorum",
    "Şuan Kafam Dağınık Sonra Sor Lutfen",
    "Bunu Yaparsan Helal Olsun"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('**Bir Soru Sorman Gerek (ÖRNK: +küre (SORUNUZ.))**')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'küre',
  description: 'Sihirli küre sorularınızı cevaplar',
  usage: 'küre <soru>'
};
