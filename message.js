const kick = require('../commands/kick')
const pong = require('../commands/pong')
const censure = require('../commands/censure')
const censureunilatera = require('../commands/censureunilatera')

module.exports = (client, message) => {
   
  if (message.content.startsWith('§kick')) {
    return kick(message)
  }
  if (message.content.startsWith('§ping')) {
    return pong(message)
  }
  if (message.content.startsWith('§censure')) {
  	let args = message.content.split(" ").slice(1)
    return   censure(message,args);
  }
  if (message.content.startsWith('§ciblecensure')) {
    const user = message.mentions.users.first();
    const args = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    return   censureunilatera(message,args,user);
  }

}

