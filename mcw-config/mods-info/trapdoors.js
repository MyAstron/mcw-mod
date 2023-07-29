/*
 *    This Configuration & Information Is only from the 
 *             Macaw's Trapdoor's Mod
 */
const Config = require('../data')
module.exports = {
  mod: 'Trapdoor',
  version: '1.0.7',
  
  description: ` Are you a "master of escapes"? If your answer is "yes", trapdoors are your daily routine, but in normal Minecraft you are a bit limited. Let's make it different! This mod is similiar to Macaw's Doors. You can make more styles of trapdoors using different materials. No more fails when escaping. ${Config.emojis.mcw.glass} `,

  emoji: '1029859698217861231', //['<:trapdoor:830778109954883605>']
  
  mc: {
    fabric: '1.19.2',
    forge: '1.19.2'
  },
  
  link: {
    forge: 'https://www.curseforge.com/minecraft/mc-mods/macaws-trapdoors/files',
    youtube: 'https://youtu.be/5rCpU9apUVw',
    img: {
      banner: 'https://i.imgur.com/irYCi48.png',
      crafts: [
        'https://lh6.googleusercontent.com/vDjWXFHlONeEzmvZSRCRBfPkdIBzaH1wHwGzimbrGurMj7SgZLZ9_EOCxOeb15ph2Y-F850Fp2MpR6DRoOHZGWZ-tQklufGyQS_qgl5H5GuOWhxz-0NsF5vK2qJHR-26qk3DRfCkRQ=s0?imgmax=0',
        'https://docs.google.com/spreadsheets/d/1dBcTfrt-MH91NuCmJzqbFDjrLftuKMc08fp4bjGJCD4/edit#gid=472963468']
    }
  }
}