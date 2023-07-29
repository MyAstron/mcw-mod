/*
 *    This Configuration & Information Is only from the 
 *             Macaw's Furniture's Mod
 */
const Config = require('../data')
module.exports = {
  mod: 'Furniture',
  version: '3.0.2',
  
  description: ` Can't you find any suitable furniture for you home? Are you exhausted of looking for it? You are lucky you are here. Macaw started serious business by creating excellent furniture...just joke ${Config.emojis.mcw.smile}. Macaw offers you a mod for elegant furniture. You can "create" your own style of furniture by making different variations. Suits for every household. 11 / 10 Macaw's workers recommend ${Config.emojis.mcw.yes}.`,

  emoji: '1029860198417956904', //['<:furniture:830778122268966922>']
  
  mc: {
    fabric: '1.16.3',
    forge: '1.19.2'
  },
  
  link: {
    forge: 'https://www.curseforge.com/minecraft/mc-mods/macaws-furniture/files',
    youtube: 'https://youtu.be/14_Fl86-ivQ',
    img: {
      banner: 'https://i.imgur.com/wzjTntY.png',
      crafts: [
        'https://lh5.googleusercontent.com/oSQi9Pxbl30AHjj0b4PZTiZ2mh6016FdyrnBmutO4nXicAueZD4gZe2gk94sFrz8cqT8WxSZy3_igHJL3FBWHd0CuGLBSdIrz1OMV2mdqJGMs3svTXc6X5sEKs-13KV5NvZqzYDNhw=s0?imgmax=0',
        'https://docs.google.com/spreadsheets/d/1dBcTfrt-MH91NuCmJzqbFDjrLftuKMc08fp4bjGJCD4/edit#gid=1674715761']
    }
  }
}