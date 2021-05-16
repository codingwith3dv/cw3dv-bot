require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', () => {
  console.log('Logged in');
})

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.channel.send('pong');
  }
})

client.login(process.env.TOKEN)