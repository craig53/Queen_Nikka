//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaGJAMAAO7RR0PxFEk3e";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaGJAMAAO7RR0PxFEk3e";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://imgur.com/a/9etcJPe";
global.devs = "2348167574039";
global.sudo = process.env.SUDO || "2349112171078,2347018486818";
global.owner = process.env.OWNER_NUMBER || "2348167574039";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURNeWJyQ1I1NTEyM0JzM2NMZ0ZuMU1sczRvVG5ZTHIvdzRFaWlZSXAyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclo4WWN1TlVINzFOUk5SakVOREx1dkVwTCt2aHFMK3RYNjJKTXpQZnZCbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTW5XL0VDU1RZMlE2UmJGQkMycDFhY2dUM1NaY2NHcWF4Q2JldTY3eW5RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmWTlFditFNURNSmx3M1A0OVRqS1N1STVCWVFaOWYrajYyT2tiK055Y204PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVBcHBtcXhpZmVNcFdxWGNBMG4vc3ZJdmdhbVRwNzNqSVk0eGMyd2lNV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNFeDYwa0NUZHJYMEhyLzE3eTFoNnBvYk1FWnNDZU4zUk9TK2ZCRkN2M009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUxmTjl3NVJWWTNDenR1QkJhWXdTczFjOFdmcWVRZEF0Z0pZQkJJdzEzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHVUeFlHNHVDMU0yTEVieERTckR3UDl5WXpqMWZzNEhKMys4aWlyeThtMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZDeXJFVTdXdjJ1cXpCcklPcU9ndmNWQzA4dUhrZkRnQmNNM3BKSUVwRTlvaXpyeEFjTTNTM3N5YzV0TFB0WmtwQjNpQ29HKzZ2QTI0bWlUN0NvdEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjEsImFkdlNlY3JldEtleSI6Iit4ZGVGNjBIa3hUdG00eS9jOWEzbElsdlFhc3gyRHBUcDNTaUh5ZnhGdXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdDYWRZZGtuVEw2N3Y5NHg5SmVUWmciLCJwaG9uZUlkIjoiYTc2OWUxYmItNTQxZC00NTY1LWE0OGItMjRjZTJiMDk3OTM4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJuNlE2cGVFYm1sZ1U3dmMvUXBVa3ZyNkdHdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDc1pxNnErbjNDa1NYenp5a3p6VXlpQmdmVnM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUEQ0Ukc5UUoiLCJtZSI6eyJpZCI6IjIzNDgxNjc1NzQwMzk6ODFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04zZ3Rjb0VFTy9RaTdnR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZSZHFyUmdIL1RzRGt5cUlIcVhHZUxiaW80VVlSTXlqUWlhVUlZN1Z4SE09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdpQnVyVXdHOTJDQ1Y1TFV1VDRQalM4Q0Q1a1daaHV2RE9xYXZDdDR4TlM5aUkxVW84ZGY5dUdaUlhxbGdjSk1DUFBrNnpaOVZEV0JpQTlzajdNaEF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJjRFBYT2xCYTRrTDNocG5GUCt5TW13QWxTaWFleHBlbFZaa0tmYlpadEU3b290VGhoQStINThSeVd3YVlNVVprcGw5dmk2aUZGcHFKM1ZJRGR0bmtEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNjc1NzQwMzk6ODFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlVYYXEwWUIvMDdBNU1xaUI2bHhuaTI0cU9GR0VUTW8wSW1sQ0dPMWNSeiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODI0MzgzNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEeEwifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "ELON",
  packname: process.env.PACK_NAME || "DREX",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "ELON",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
