const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} **Bir Stres Çarkı Çevrildi**`,
            image: {
                url: "https://i.imgur.com/KJJxVi4.gif"
            }
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, **Stres Çarkın** ${bitiş.toFixed(2)} **Çok Hızlı**.`
            }
        });
    }, 5 * 1000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stress',
  description: 'Sizin için bir stres çarkı çevirir.',
  usage: 'stresçarkı'
};
