require('dotenv').config();
const { Client, Intents } = require('discord.js'); // Discord in general
// const fetch = require('node-fetch'); // HTTP request

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// API_URL = ''; // URL

// For ready
client.on('ready', () => {
    console.log(`Log in as ${client.user.tag}!`);
})

// Message
client.on('message', async message => { // Request html => API => async
    if (message.author.bot) { // Ignore bot
        return;
    };

    // Form to send API
    const payload = { // payload
        inputs: {
            text: message.context
        }
    };
    // const headers = { // header
    //     'Authorization': 'Bearer ' + process.env.HUGGINGFACE_TOKEN
    // };

    // message.channel.messageCreate();
    await message.channel.sendTyping();

    // const response = await fetch(API_URL, {method: 'post', body: JSON.stringify(payload), headers: headers});
    // const data = await response.json();
    // let botResponse = '';
    // if (data.hasOwnProperty('generated_text')) {
    //     botResponse = data.generated_text;
    // } else if (data.hasOwnProperty('error')) { // error condition
    //     botResponse = data.error;
    // }
    botResponse = "I catch that...";
    message.reply(botResponse);
})

client.login(process.env.DISCORD_TOKEN);