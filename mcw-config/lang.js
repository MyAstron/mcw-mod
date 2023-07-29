module.exports = {
    req: async (chosenMod, interaction, row, Discord, config, AtualMod) => {
        const EmbedBuilder = Discord.EmbedBuilder
        let colors = config.colors, emojis = config.emojis
        const AdEmbed = new EmbedBuilder()
            .setColor(colors.sketch)
            .setFooter({ text: "* At this moment it is only in English"}).setTimestamp()
            .setAuthor({ name: "It's Still New\t•\t"+interaction.member.user.tag, 
                iconURL: interaction.member.avatarURL()})
        interaction.update({
             embeds: [AdEmbed],
             components: [row],
             ephemeral: true
            })
    }
}