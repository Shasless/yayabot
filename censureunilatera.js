module.exports = (message,args,user) => {
message.delete(); 
// Parse args
if (message.member.hasPermission("ADMINISTRATOR")==true){
if (!args) return message.reply('Ok j en suprime 0');
if (!args && !user) return message.reply('fait ton travail et met les arguments');
// Fetch 100 messages (will be filtered and lowered up to max args requested)
message.channel.fetchMessages({
 limit: 100,
}).then((messages) => {
 if (user) {
 const filterBy = user ? user.id : Client.user.id;
 messages = messages.filter(m => m.author.id === filterBy).array().slice(0, args);
 }
 message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
}
if (message.member.hasPermission("ADMINISTRATOR")==false){
    message.channel.send("T'as pas les droits mongolo"); 
}}