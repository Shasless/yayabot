module.exports = message => {
  const member = message.mentions.members.first()
    if (message.member.hasPermission("ADMINISTRATOR")==true){
    if (!member) {
      return message.channel.send(`Et je dois deviner qui, c'est ca ?`)
    }

    if (!member.kickable) {
      return message.channel.send(`peux pas dsl`)
    }

    return member
      .kick()
      .then(() => message.channel.send(`${member.user.tag} est mort dans d'atroce soufrance.`))
      .catch(error => message.channel.send(`pas reussie dsl`))
  
}
return message.channel.send(`T'as pas les droits mongolo`)
}

