const Commando = require('discord.js-commando');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

class Cena extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'cena',
            group: 'voice',
            memberName: 'cena',
            description: 'John Cena drops by for some fun'
        })
    }
    async run(message) {
        const channel = message.member.voiceChannel;
        channel.join().then(connection => {
            const stream = ytdl('https://www.youtube.com/watch?v=Uufq_PFXbpA', { filter : 'audioonly' });
            const dispatcher = connection.playStream(stream, streamOptions);
            dispatcher.on('end', () => connection.disconnect());
        })
        .catch(console.error);
    }
}

module.exports = Cena;