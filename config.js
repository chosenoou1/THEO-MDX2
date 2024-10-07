const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/4yX4WJs5/Theo-hacker-1.jpg" || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923xxx Your Number";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/4yX4WJs5/Theo-hacker-1.jpg" // "image" // set Image/video urls here
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

global.api_smd = "https://api.junn4.my.id" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_43_10_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDcyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNixcbiAgICAgICAgNzcsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDksXG4gICAgICAgIDc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDczLFxuICAgICAgICA0MyxcbiAgICAgICAgMTUzLFxuICAgICAgICA2NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg0LFxuICAgICAgICA2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDczLFxuICAgICAgICA4OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDcxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDUzLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzksXG4gICAgICAgIDY1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMixcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDM0LFxuICAgICAgICA4NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5d2RGN3lyWjlRWXkveTZ5NWFzc0svdGRhdmduUkZ2dVBtcUNHYzhTL2QwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODMwODYxMTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBODIyQTEyNjY0MjNFRTIzQzM0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODI5MDU5N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrVXRlY1F6X1JyU2VsYWpfY3BqcXlRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI2ZmY3M2U0LWQ5MjMtNDQ2Yi1hYTU3LTkzZTk0NjUzZjM1NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDUsXG4gICAgICAxNTEsXG4gICAgICA4OSxcbiAgICAgIDk5LFxuICAgICAgMTI0LFxuICAgICAgMTQ1LFxuICAgICAgMTU0LFxuICAgICAgNDEsXG4gICAgICA4NixcbiAgICAgIDI4LFxuICAgICAgMTM2LFxuICAgICAgMTQxLFxuICAgICAgMTA1LFxuICAgICAgNzYsXG4gICAgICAxNDksXG4gICAgICA4NixcbiAgICAgIDM1LFxuICAgICAgNTQsXG4gICAgICAxNDQsXG4gICAgICAxMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMTc4LFxuICAgICAgMjI3LFxuICAgICAgMTI2LFxuICAgICAgMTI4LFxuICAgICAgMTQ2LFxuICAgICAgMjIwLFxuICAgICAgMjM3LFxuICAgICAgMjIxLFxuICAgICAgMzUsXG4gICAgICAxNjksXG4gICAgICA3MyxcbiAgICAgIDI0NixcbiAgICAgIDk3LFxuICAgICAgMjQzLFxuICAgICAgMTk2LFxuICAgICAgMTIsXG4gICAgICAyMTUsXG4gICAgICAxNzMsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzY0MzkzWVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODMwODYxMTk6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDI4MDQxNDc0NTAwMjI6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDSE9TRU7wn5Ka8J+SmlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xhczl0MEpFSnkranJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWCt0WllSZjdsQk1Oak5yaDIxWjFpaW5kenF3TUs1UFNXdTdmQTczVGpBaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHN2p6UzJHYXpJTjkwRXd3SWRsNHRHMS9UdjJRN1NkcGVHSDFIeDB6N1BDVTh6R2g3RzhKZjNPb0JSanJiV2dtY2xjRXUyUGpHdkZmd3JtM09WMzBpQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXK2tIdTltOFRrV2JDQW9jV3NlODNmamFSdHdwV0NwVFVuWTRUdFdhWjhjVU1sSGtnZFVjQWZETDNmbFR6TitoNHU2QWVwNmZBNHA1Qy9FSnpKREFBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDgzMDg2MTE5OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODI5MDU5MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVablwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRVpuLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZVhDOXlYNlZWSUN6TmlZNFRLcGo5eThSRDhLYWRrcU1SQlVlQlNCcnF1TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyNjEyODkzMjM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgyOTA1OTMzNDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO-MD ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MDX2",
  ownername:process.env.OWNER_NAME|| "Theo_Idolo😎♒💨",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
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
