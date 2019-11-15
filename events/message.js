const kick = require('../commands/kick')
const pong = require('../commands/pong')
const censure = require('../commands/censure')

module.exports = (client, message) => {
   let args = message.content.split(" ").slice(1)
  if (message.content.startsWith('§kick')) {
    return kick(message)
  }
  if (message.content.startsWith('§ping')) {
    return pong(message)
  }
  if (message.content.startsWith('§censure')) {
  	
    return   censure(message,args);
  }

}

