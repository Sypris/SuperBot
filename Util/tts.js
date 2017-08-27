module.exports = {
    banana: function (message) {
        message.say("bananananananabanabananabanannanabanananana.", {
            tts: true
        })
    },
    tts: function (message, text) {
        message.say(text, {
            tts: true
        })
    }
};
