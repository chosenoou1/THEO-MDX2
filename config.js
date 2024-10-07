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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_10_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MixcbiAgICAgICAgOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDM4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI4LFxuICAgICAgICA3NixcbiAgICAgICAgMjIzLFxuICAgICAgICAzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDkyLFxuICAgICAgICA2MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg2LFxuICAgICAgICA2NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICAyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgODMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNCxcbiAgICAgICAgOTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYwLFxuICAgICAgICAyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzLFxuICAgICAgICA3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0LFxuICAgICAgICA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDY4LFxuICAgICAgICAyOCxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDYxLFxuICAgICAgICA1MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICA4LFxuICAgICAgICAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY5LFxuICAgICAgICA4MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAsXG4gICAgICAgIDMzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdvQ0lyU1h0cFlNNTUxZWdjSE9pb2xkTDVMb09nZTNMRW1MTDh5bFlsam89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA4MzA4NjExOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E2NDU1MjQ1OEIwRUUwNzNDNDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3Njg3NDQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA4MzA4NjExOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0FEQTY4QkVFMDk2NDVDNzg2RDlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3Njg3NDQ0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZEdXhEQ0ZXUTdlS01udDR0R0RzMEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWMxZjRlYjUtMjY2OS00NTM1LWFiMDAtNjcyYzUxZDViYWUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDIwNCxcbiAgICAgIDE4OCxcbiAgICAgIDIxNSxcbiAgICAgIDIzNCxcbiAgICAgIDM5LFxuICAgICAgMzEsXG4gICAgICAxNDQsXG4gICAgICA2MyxcbiAgICAgIDI1MixcbiAgICAgIDExMyxcbiAgICAgIDQ1LFxuICAgICAgMTgzLFxuICAgICAgNjQsXG4gICAgICA2NyxcbiAgICAgIDE1LFxuICAgICAgNTgsXG4gICAgICAyMjUsXG4gICAgICAyMTYsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMjExLFxuICAgICAgMTQzLFxuICAgICAgNCxcbiAgICAgIDM5LFxuICAgICAgNTUsXG4gICAgICAyLFxuICAgICAgMzcsXG4gICAgICA2NSxcbiAgICAgIDM5LFxuICAgICAgMTcwLFxuICAgICAgMTU1LFxuICAgICAgNzMsXG4gICAgICA3MyxcbiAgICAgIDIzMyxcbiAgICAgIDI1LFxuICAgICAgMTgwLFxuICAgICAgMjE4LFxuICAgICAgMTM3LFxuICAgICAgOTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUE1NzJMUDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODMwODYxMTk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDI4MDQxNDc0NTAwMjI6MkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDSE9TRU7wn5Ka8J+SmlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0orT28vd09FSXJXNmJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWCt0WllSZjdsQk1Oak5yaDIxWjFpaW5kenF3TUs1UFNXdTdmQTczVGpBaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPUVZxNUhrdkhwcXRFL2lQTit0R3A1M2ZYcHVkSUhYR0IrWEgzTTFtYWJYREhhZjd1TFIzbHlLdGdJMGF4RzROclh6ZjNDM2docjRoZFMyc3MvT2VpUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIOFBuVCt1Z2ZDRkZpTWdCcE5EY3BHL3JFT3JSTnk3V1VPZzRBOVpQVTdCQWtWTXg4STFEWEdFS3Z4MENNWVlCa2hCZG5sWnN5VlRuWlRpM3RaMHdpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDgzMDg2MTE5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzY4NzQzOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtRNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1E2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEJwalBSWGtIQ1d1c3JGbkJ3YW0rb3hLTFhGYUpGOUZQckJTNlg0S2Jhaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MDE4NzE4NDk1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjc2ODc0MzkzMjJcIn0iCn0="  // PUT your SESSION_ID 


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
