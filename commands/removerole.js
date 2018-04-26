const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return ("❌ You do not have the correct permissions to execute this command. You require the permission - MANAGE_ROLES in this guild!");
  if(args[0] == "help"){
    message.reply("Usage: ~removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("❌ The user you have specified can not be found, please try again later with a valid username!");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("❌ Error: Please make sure you have specified a valid role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("❌ Error: Please make sure you have specified a valid role!");

  if(!rMember.roles.has(gRole.id)) return message.reply("❌ The user you have speified does not currently have that role!");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`❌ You have been removed from the ${gRole.name} role in ${message.guild.name} ID: ${message.guild.id}.`)
  }catch(e){
    message.channel.send(`<@${rMember.id}>, We removed ${gRole.name} from them however their DM's must be locked as I can not message them!`)
  }
}

module.exports.help = {
  name: "removerole"
}