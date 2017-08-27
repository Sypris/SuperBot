const Commando = require('discord.js-commando');
let fetch = require('node-fetch');

class Joke extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'joke',
            group: 'fun',
            memberName: 'joke',
            description: 'Tells a random joke from http://api.icndb.com/jokes/random'
        })
    }
    async run(message) {
        fetch('http://api.icndb.com/jokes/random')
            .then(function(res) {
                return res.json();
            }).then(function(body) {
            message.say(body.value.joke);
        });
    }
}

module.exports = Joke;