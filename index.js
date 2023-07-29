const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('I\'m Ready Bv')
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()
// // // // // //      \\ \\ \\ \\ \\ \\
const Discord = require("discord.js")
const DSC_REST= require('@discordjs/rest')

const REST = DSC_REST.REST
const Routes = Discord.Routes
const ActionRowBuilder = Discord.ActionRowBuilder
const ButtonBuilder = Discord.ButtonBuilder
const ButtonStyle = Discord.ButtonStyle
const SlashCommandBuilder = Discord.SlashCommandBuilder
const Bot = new Discord.Client({ intents: 32767 })
const config = require("./mcw-config/data.js")


const rest = new REST({ version: '10' }).setToken(process.env["token"]);
const commads = [
	new SlashCommandBuilder()
        .setName('mod').setDescription('Check All the mods for Macaw\'s Sketch')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('Choose One Do You want Check')
                .setRequired(true)
                .addChoices(
                    { name: 'Bridges', value: 'bridge' },
                    { name: 'Doors', value: 'door' },
                    { name: 'Fences and Walls', value: 'fence' },
                    { name: 'Furniture', value: 'furniture' },
                    { name: 'Lights and Lamps', value: 'lights' },
                    { name: 'Paintings', value: 'painting' },
                    { name: 'Paths and Pavings', value: 'path' },
                    { name: 'Roofs', value: 'roof' },
                    { name: 'Trapdoors', value: 'trapdoor' },
                    { name: 'Windows', value: 'window' },
                )),
	new SlashCommandBuilder()
        .setName('networks').setDescription('See the Network\'s from Sketch')
]
const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('lang')
            .setStyle(ButtonStyle.Danger)
            .setEmoji('1030213319845494935')
            .setDisabled(false)
        )
    .addComponents(
        new ButtonBuilder()
            .setCustomId('back')
            .setStyle(ButtonStyle.Secondary)
            .setEmoji('1029845036499742812')
            .setDisabled(false)
        )
    .addComponents(
        new ButtonBuilder()
            .setCustomId('home')
            .setStyle(ButtonStyle.Primary)
            .setEmoji('1029845838211592212')
            .setDisabled(false)
        )
    .addComponents(
        new ButtonBuilder()
            .setCustomId('next')
            .setStyle(ButtonStyle.Secondary)
            .setEmoji('1029845037506379817')
            .setDisabled(false)
        )
    .addComponents(
        new ButtonBuilder()
            .setCustomId('end')
            .setStyle(ButtonStyle.Success)
            .setEmoji('1030205928152248363')
            .setDisabled(false)
        )
Bot.on("ready", async() => {
    process.env["MOD"] = -1
    console.clear()
    await rest.put(
        Routes.applicationCommands(process.env["clientId"]),
        { body: commads },
    )
        .then(() => console.log('\n\n\nRegistrados los (/) commands'))
        .catch(console.error);
    
    Bot.user.setPresence({
        status: "idle",
        activities: [{
            name: " MacawSlahs | /mod",
            typeof: "PLAYING"
        }]
    })
    console.log("Log. With: " + Bot.user.tag+"\n\n\n")
    console.log(process.env["MOD"])
})
Bot.on("interactionCreate", async(interaction) => {
    let AtualMod = process.env["MOD"], chosenMod;
    const lng = require("./mcw-config/lang.js"),
          btn = require("./mcw-config/buttons.js"),
          mod = require("./mcw-config/mods.js")
  
    if (interaction.commandName == "mod"){
        chosenMod = interaction.options.getString('category');
        mod.req(chosenMod, interaction, row, Discord, config)
    }
    else if (interaction.customId == "lang") {
        lng.req(chosenMod, interaction, row, Discord, config, AtualMod)
    }
    else if (interaction.customId == "back") {
        if (AtualMod >= -1)
            AtualMod--
        btn.req(interaction, row, Discord, config, AtualMod)
    }
    else if (interaction.customId == "home") {
        chosenMod = 'home'
        mod.req(chosenMod, interaction, row, Discord, config)
    }
    else if (interaction.customId == "next") {
        if (AtualMod <= 9)
            AtualMod++
        btn.req(interaction, row, Discord, config, AtualMod)
    }else if (interaction.customId == "end"){
        AtualMod = 9
        btn.req(interaction, row, Discord, config, AtualMod)
    }
})
Bot.login(process.env["token"])