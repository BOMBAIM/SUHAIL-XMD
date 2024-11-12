const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923051391007";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_24_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MixcbiAgICAgICAgMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODAsXG4gICAgICAgIDI2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMixcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyNCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAzNixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU2LFxuICAgICAgICA4OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM1LFxuICAgICAgICA2MixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZCa0p6ZTJIR2VXUVR4MmxMeVhYc2NVbXBxdFIxNDViUVY2S0h3dDBsV3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4NTc1NzYzOTkyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiN0VBRkUwNkIyODNCN0UwN0JFRDYwNEE4NERDQjkzQ0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNDQ2NjkwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNjI4NTc1NzYzOTkyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTkxNTVBMTRCNEU1RTE2MUJBNURGMzg4QjJBMjNEODlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxNDQ2NjkxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkRkcnU4UUFOUTBlNzJaMWp2Z0pBV3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjIwYWI5OWMtMWFlZS00YmIzLThjN2EtMGVjYjFlMDhhZjViXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDYsXG4gICAgICA3NixcbiAgICAgIDI4LFxuICAgICAgMjQ2LFxuICAgICAgMTk2LFxuICAgICAgNjQsXG4gICAgICAxOTgsXG4gICAgICAyMDAsXG4gICAgICAxODksXG4gICAgICAxODIsXG4gICAgICA2NixcbiAgICAgIDE3NCxcbiAgICAgIDIxNCxcbiAgICAgIDEwNCxcbiAgICAgIDU2LFxuICAgICAgNjEsXG4gICAgICA2LFxuICAgICAgMTIyLFxuICAgICAgMTE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDI1MCxcbiAgICAgIDExMSxcbiAgICAgIDIxMixcbiAgICAgIDMzLFxuICAgICAgOCxcbiAgICAgIDEyNCxcbiAgICAgIDUzLFxuICAgICAgNjIsXG4gICAgICAyMDksXG4gICAgICA2NCxcbiAgICAgIDE5NCxcbiAgICAgIDc1LFxuICAgICAgMTA3LFxuICAgICAgMTAsXG4gICAgICAyMTcsXG4gICAgICAyMjksXG4gICAgICAxMTEsXG4gICAgICAxOSxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpHQko5RkNQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI2Mjg1NzU3NjM5OTI4OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiLlJcIixcbiAgICBcImxpZFwiOiBcIjMyMzg4NTgzNDI1NDY6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSktPMU5vREVKeVB6N2tHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI1M0p5c01vTS9RalcvN1pyUkREMCtsbHpoN0JlOU1IYlQybTdaZTRHUDBJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjFOZmpsSm43UUtRbWo0VVZoajhCNXVLdFdwb2JBdU83dzZDKzdCRllGU3QzSDFPRFpwTTU4My9ER1FGdjYrQ3R1eU1tZlZ4U0h0bVduS1E5UGdBa0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlaS0g1Sm1rMEFMOHNTK2V2NzVJazgzR1ZvTjN4YWJxSHZGNnFzd3VPL3VFK1hibCsvS1ZGc0xpeG9OTzhLcmYvdmZrRFFlWnZ6N0k4cFNnNXVEQUJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjYyODU3NTc2Mzk5Mjg6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE0NDY2ODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMTTJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxNMi5qc29uIjogIntcImtleURhdGFcIjpcIjVDTmRXWXlncDRsK25lbFVzU2IrSSs4b1dUKys4UVFieDhiSVdBSHJVQjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTk1NDI4MTE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAzNzgzOTQyOTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
