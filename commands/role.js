exports.run = (client, message, args) =>{
  let chRole = message.guild.roles.find("name", args.join(" "));
  if (!chRole){
    message.guild.createRole({
      name: `${args.join(" ")}`
    }).then(role=>{
      message.member.addRole(role.id);
      message.reply(`The role ${args.join(" ")} has been created and added to you.`);
    })
  }else{
    if(message.member.roles.has(chRole.id)){
      message.member.removeRole(chRole.id).catch(console.error);
      message.reply(`You have been removed from **${chRole.name}** role.`);
    }else{
      message.member.addRole(chRole.id).then(a=>{
        message.reply(`You have been added to the **${chRole.name}** role.`);
      }).catch(()=>{
        message.reply("You do not have permissions.");
        return;
      });
    }
  }
}
