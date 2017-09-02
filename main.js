const Commando = require('discord.js-commando');
const path = require('path');
const ytdl = require('ytdl-core');
const config = require('./config.json');

const client = new Commando.Client({
    owner: config.clientId
});

client.registry
    .registerGroups([
        ['fun', 'Fun and silly commands.'],
        ['voice', 'Obnoxious shit.'],
        ['other', 'Useful commands for pulling data.']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(client.user.username + " is online!");
    client.user.setPresence({ game: { name: '!help for commands', type: 0 } });
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
    const streamOptions = { seek: 0, volume: 1 };
    if(newMember.user.username === "Sypris") 
    {
        let channel = newMember.voiceChannel;
        try {
            channel.join().then(connection => {
                const stream = ytdl('https://www.youtube.com/watch?v=Uufq_PFXbpA', { filter : 'audioonly' });
                const dispatcher = connection.playStream(stream, streamOptions);        
            })
        } catch (e) {       
        }
    }
  })

//Testing code commit
client.login(config.token);