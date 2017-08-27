const Commando = require('discord.js-commando');
const path = require('path');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

const client = new Commando.Client({
    owner: '291039583947456544'
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

client.login('MjkxMDM5NTgzOTQ3NDU2NTQ0.DIElCQ.jzM94bAiTrww79FwxFXfl9p74EY');