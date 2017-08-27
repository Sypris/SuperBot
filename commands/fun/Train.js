const Commando = require('discord.js-commando');

class Train extends Commando.Command {
    constructor(client) {
        super(client, {
           name: 'train',
           group: 'fun',
           memberName: 'train',
           description: 'Makes Choo Choo noise'
        })
    }
    async run(message) {
        message.say("Choo Choo.", {
            tts: true
        })
    }
}

module.exports = Train;