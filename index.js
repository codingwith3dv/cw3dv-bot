require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', () => {
  console.log('Logged in');
})

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.channel.send('pong');
  } else if (mesage.content === 'Hello' || message.content === 'Hi') {
    message.channel.send('Hi')
  }
})

client.login(process.env.TOKEN)