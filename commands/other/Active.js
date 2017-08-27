const Commando = require('discord.js-commando');

class Active extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'active',
            group: 'other',
            memberName: 'active',
            description: 'Gets a list of active users.'
        })
    }
    async run(message) {
        let userList = [];
        this.client.users.forEach(user => {
            if(user.presence.status !== "offline" && user.presence.status !== "idle" && user.bot !== true)
                userList.push("\nUser: " +
                    user.username +
                    "\n In Game: " + getGameName(user.presence.game));
        });
        message.code(userList);
    }
}

function getGameName(gameObject) {
    let game = "I am unable to find a game.";
    if(gameObject) {
        game = gameObject.name
    }
    return game;
}

module.exports = Active;