const Commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

class Raul extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'raul',
            group: 'voice',
            memberName: 'raul',
            description: 'Raaaaaaauuulllllll'
        })
    }
    async run(message) {
        const channel = message.member.voiceChannel;
        channel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/v/mLhgH6tleeU?start=3&end=9', { filter : 'audioonly' });
            const dispatcher = connection.playStream(stream, streamOptions);
            dispatcher.on('end', () => connection.disconnect());
        })
        .catch(console.error);
    }
}

module.exports = Raul;