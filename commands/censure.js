module.exports = (message,args) => {
	
	async function purge() {
            message.delete(); 
            if (message.member.hasPermission("ADMINISTRATOR")==true){
	            if (isNaN(args[0])) {
	                message.channel.send('Met un nombre batard'); 
	                return;
	            }

	            const fetched = await message.channel.fetchMessages({limit: args[0]}); 
	     
	            message.channel.bulkDelete(fetched)
	                .catch(error => message.channel.send(`erreur bip boop marche pas: ${error}`)); 

	             return

        }
     
        return message.reply("T'as pas les droits mongolo")}
    
    return   purge();
}