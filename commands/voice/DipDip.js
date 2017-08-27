const Commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

class DipDip extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'dipdip',
            group: 'voice',
            memberName: 'dipdip',
            description: 'Potato Chip!'
        })
    }
    async run(message) {
        const channel = message.member.voiceChannel;
        channel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=VaM8e7bcwR0', { filter : 'audioonly' });
            const dispatcher = connection.playStream(stream, streamOptions);
            dispatcher.on('end', () => connection.disconnect());
        })
        .catch(console.error);
    }
}

module.exports = DipDip;