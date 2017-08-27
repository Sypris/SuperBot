const Commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

class Promoted extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'promoted',
            group: 'voice',
            memberName: 'promoted',
            description: 'PROMOTED!'
        })
    }
    async run(message) {
        const channel = message.member.voiceChannel;
        channel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=iyRJdFlHlO0', { filter : 'audioonly' });
            const dispatcher = connection.playStream(stream, streamOptions);
            dispatcher.on('end', () => connection.disconnect());
        })
        .catch(console.error);
    }
}

module.exports = Promoted;