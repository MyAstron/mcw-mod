module.exports = {
    req: async (interaction, row, Discord, config, AtualMod) => {
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
        let colors = config.colors, emojis = config.emojis, Mod, chosenMod;

        switch (AtualMod){
          case 0:
            process.env["MOD"] = 0
            chosenMod = 'bridge'
              Mod = Bridges
            break;
          case 1:
            process.env["MOD"] = 1
            chosenMod = 'door'
              Mod = Doors
            break;
          case 2:
            process.env["MOD"] = 2
            chosenMod = 'fence'
              Mod = Fences
            break;
          case 3:
            process.env["MOD"] = 3
            chosenMod = 'furniture'
              Mod = Furniture
            break;
          case 4:
            process.env["MOD"] = 4
            chosenMod = 'lights'
              Mod = Lights
            break;
          case 5:
            process.env["MOD"] = 5
            chosenMod = 'painting'
              Mod = Painting
            break;
          case 6:
            process.env["MOD"] = 6
            chosenMod = 'path'
              Mod = Paths
            break;
          case 7:
            process.env["MOD"] = 7
            chosenMod = 'roof'
              Mod = Roofs
            break;
          case 8:
            process.env["MOD"] = 8
            chosenMod = 'trapdoor'
              Mod = Trapdoors
            break;
          case 9:
            process.env["MOD"] = 9
            chosenMod = 'window'
              Mod = Windows
            break;
          case -1:
            process.env["MOD"] = -1
            chosenMod = 'home'
              Mod = "Home"
            break;
          case 'home':
            process.env["MOD"] = -1
            chosenMod = 'home'
              Mod = "Home"
            break;
          default:
            process.env["MOD"] = -1
            chosenMod = 'home'
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
              .setFooter({ text: "* Buttons Are in Beta\t•\tPage "+(AtualMod+1)+"/10"}).setTimestamp()
              .setImage(Mod.link.img.banner)
        }
        interaction.update({
          //  content: "You Chose: "+chosenMod,
           embeds: [HomeEmbed],
           components: [row],
           ephemeral: true
          })
        console.log(process.env["MOD"])
    }
}