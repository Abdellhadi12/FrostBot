
module.exports = {
    run: async (client, guild) => {
        const channel = client.channels.get("443603928098144267");
        const log = [
            '➖ **__Left guild!__**',
            `**__Name:__** ${guild.name} (${guild.id})`,
            `**__Owner:__** ${guild.owner.user.tag} (${guild.owner.user.id})`,
            `**__Members:__** ${guild.memberCount}`
        ].join('\n');
        channel.send(log);
    }
}