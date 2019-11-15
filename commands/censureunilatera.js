module.exports = message => {
	async function censure() {
            message.delete(); 
            if (isNaN(args[0])) {
                message.channel.send('Met un nombre batard'); 
                return;
            }
            if (message.member.hasPermission("ADMINISTRATOR"))

            const fetched = await message.channel.fetchMessages({limit: 50}); {
     
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`erreur bip boop marche pas: ${error}`)); 
            return

        }
  }
}
