const Commando = require('discord.js-commando');

class Sprinkler extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'sprinkler',
            group: 'fun',
            memberName: 'sprinkler',
            description: 'Makes Sprinkler Noise'
        })
    }
    async run(message) {
        message.say("My sprinkler goes like thisstststststststststststststststststststststststst and comes back like ttttttttte.", {
            tts: true
        })
    }
}

module.exports = Sprinkler;