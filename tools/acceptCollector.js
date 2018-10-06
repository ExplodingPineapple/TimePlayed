module.exports = function(acceptMessage) {
    const filter = (reaction, user) => reaction.emoji.toString() == "✅" && reaction.message.content.startsWith("​​​​") && reaction.message.author.id == client.user.id && user.id != client.user.id
    const collector = acceptMessage.createReactionCollector(filter);
    collector.on('collect', (reaction, user) => {
      user = reaction.users.last()
      var lang = JSON.parse(JSON.stringify(en));
      tools.setTerms(user.id, true, function() {
        reaction.message.channel.send(`<@${user.id}> Success!`).then(msg => {msg.delete(2000)})
      })
    })
  }