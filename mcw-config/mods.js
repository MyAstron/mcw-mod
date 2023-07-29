module.exports = {
    req: async (chosenMod, interaction, row, Discord, config) => {
        const EmbedBuilder = Discord.EmbedBuilder
        const Bridges = require("./mods-info/bridges.js")
        const Doors = require("./mods-info/doors.js")
        const Fences = require("./mods-info/fences.js")
        const Furniture = require("./mods-info/furniture.js")
        const Lights = require("./mods-info/lights.js")
        const Painting = require("./mods-info/paintings.js")
        const Paths = require("./mods-info/paths.js")
        const Roofs = require("./mods-info/roofs.js")
        const Trapdoors = require("./mods-info/trapdoors.js")
        const Windows = require("./mods-info/windows.js")
        let colors = config.colors, emojis = config.emojis, Mod;

        switch (chosenMod){
          case 'bridge':
            process.env["MOD"] = 0
              Mod = Bridges
            break;
          case 'door':
            process.env["MOD"] = 1
              Mod = Doors
            break;
          case 'fence':
            process.env["MOD"] = 2
              Mod = Fences
            break;
          case 'furniture':
            process.env["MOD"] = 3
              Mod = Furniture
            break;
          case 'lights':
            process.env["MOD"] = 4
              Mod = Lights
            break;
          case 'painting':
            process.env["MOD"] = 5
              Mod = Painting
            break;
          case 'path':
            process.env["MOD"] = 6
              Mod = Paths
            break;
          case 'roof':
            process.env["MOD"] = 7
              Mod = Roofs
            break;
          case 'trapdoor':
            process.env["MOD"] = 8
              Mod = Trapdoors
            break;
          case 'window':
            process.env["MOD"] = 9
              Mod = Windows
            break;
          case 'home':
            process.env["MOD"] = -1
              Mod = "Home"
            break;
          default:
            process.env["MOD"] = -1
              Mod = "Home"
            break;
        }
        const HomeEmbed = new EmbedBuilder()
            .setAuthor({ name: interaction.member.user.tag, 
                iconURL: interaction.member.avatarURL()})
            .setDescription(
            "**╭— Select The Mod —╮**\n"+
            "> ⇒ <:bridges:"+Bridges.emoji+"> 〃 "+Bridges.mod+"s \n"+
            "> ⇒ <:doors:"+Doors.emoji+"> 〃 "+Doors.mod+"s \n"+
            "> ⇒ <:fences:"+Fences.emoji+"> 〃 "+Fences.mod+"s \n"+
            "> ⇒ <:furniture:"+Furniture.emoji+"> 〃 "+Furniture.mod+"s \n"+
            "> ⇒ <:lights:"+Lights.emoji+"> 〃 "+Lights.mod+"s \n"+
            "> ⇒ <:paintings:"+Painting.emoji+"> 〃 "+Painting.mod+"s \n"+
            "> ⇒ <:paths:"+Paths.emoji+"> 〃 "+Paths.mod+"s \n"+
            "> ⇒ <:roofs:"+Roofs.emoji+"> 〃 "+Roofs.mod+"s \n"+
            "> ⇒ <:trapdoors:"+Trapdoors.emoji+"> 〃 "+Trapdoors.mod+"s \n"+
            "> ⇒ <:windows:"+Windows.emoji+"> 〃 "+Windows.mod+"s \n"+
            "**╰——————————╯**")
            .setFooter({ text: "* Buttons Are in Beta\t•\tPage Menu"}).setTimestamp()
            .setColor(colors.sketch)
        // const ModEmbed = new EmbedBuilder()
        if (Mod != "Home"){
          HomeEmbed
              .setTitle("<:"+chosenMod+":"+Mod.emoji+"> Macaw's 「 "+Mod.mod+"s 」 Mod ")
              .setURL(Mod.link.forge)
              .setDescription(
              Mod.description+"\n"+
              "**╭——— Versions ———** \n"+
              "> **Mod**: `"+Mod.version+"` \n"+
              "> - Minecraft Version Suggested - \n"+
                  "> **Fabric**: `"+Mod.mc.fabric+"` \n"+ 
                  "> **Forge**: `"+Mod.mc.forge+"` \n"+
              "**╰——————————**\n"+
      emojis.mcw.clip+" **Links**: ["+emojis.youtube+"]("+Mod.link.youtube+") - ["+emojis.forge+"]("+Mod.link.forge+") - ["+emojis.craft+"]("+Mod.link.img.crafts[1]+")"
              )
              .setFooter({ text: "* Buttons Are in Beta\t•\tPage "+(process.env["MOD"]+1)+"/10"}).setTimestamp()
              .setImage(Mod.link.img.banner)
        } else {}
        if (Mod != "Home")
          interaction.reply({
            //  content: "You Chose: "+chosenMod,
            embeds: [HomeEmbed],
            components: [row],
            ephemeral: true
            })
        else
          interaction.update({
            //  content: "You Chose: "+chosenMod,
            embeds: [HomeEmbed],
            components: [row],
            ephemeral: true
            })
        console.log(process.env["MOD"])
      }
}