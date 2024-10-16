//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "shuaibemmanuel7@gmail.com";
global.location = "lagos, Nigeria";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0J3TmtDOVRlQkZ3NXZkcEhoNnNXUFB4c0FJb1ViWGJnbE91dURkYzBGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGJ2T1ZVM3pGMTh0RnF2S0NCanViRElOaVZERXN0Vm5kNXQrNFFWNExudz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFT3ArblcrMmo0dm1rQkVZMWtTYjF4dnEyV3EzeUFUQWZLb2tpSmVuQkhnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRGczdnQ0MVkrOUliSkcrdXF2MHlZZ0ZuejRaNnU0Wm5BZUNNSjh1aVgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKeTZYUXBwNERRWTZrZ1NkdDlJTlBMd2VzYWN6YjVVQVFxdTBmNFRGRk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBVYVZiUEsrb1BvbmUyTnJGUk1FOXBCRmRsOXV5UndLcTJFdDZ0eW5SQ0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NmTmV1RGEwM0tXd1NtWlFCT1FOV1ArODliS2FSRzBGYTlwNGIvT0pFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkdZdktaSHZuNkpxMFk3cjBoaTBaTTllVXhFeWlqK3pxUGpZWTZFcmJBQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhkTkt1VGdTdU5udkVDOU9hWGRqMmEyN1BJSGVBM2pSZmIrZFNLUjg5Q0x5dGF4VjM2M3NvQlhQMW5TZEl3OGl0NWRIZkRTaGg1dzN0bVBqQm90a2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI0LCJhZHZTZWNyZXRLZXkiOiJEVGlDbUNVaXdqMEdXeUdCTmVCS3g1MEJLRlNyUzN2M1ovNXZqbmtkUnRFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNDI1NDExNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCRkQ1ODU0MEJDMDkzOUNBNkQ0NENCQzM4MjY2MzAwNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI5MDg2MDgwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjUDB5cDJ1N1RKMlF3ZUVWaVViUE9RIiwicGhvbmVJZCI6IjNlYzQ3OGY5LTU2YTUtNDc0Ni1iZDliLTA3MGUwZjViOGQwNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUXR1Uk10VnEwWUluWnN0V3lYTEZQSWRBWXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3k2TGVwdU1ldTBOaUFoTTRQZ2Q3NCsvK1BrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxHTU1NSFJOIiwibWUiOnsiaWQiOiIyNjM3MTQyNTQxMTU6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT1BTNWJnR0VPNkV2N2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUGFxaEQzQ0ROQVRIL1dQOUcvZUlnOTRHTW8rL2hLQlkvam5oQmpEbVpXQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicmNpVVdXZ0RCUU42MHpndFM0eEQ5bnBtNTJLV0xuVjZwU0R1QTFUN1h6eXdBdTViSEZjVXBPTEQ5S3dIYjFUTExjSjMvdm5JVkMvS21qbVdQQjQvRHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImFFc1VBSGkySU9PUUtOQnZzM256QVNoQW1BeDdINkUrelB1Sk1DbTNkcXZxMDM1NnF4TlRLbjI4SWVjOGUwcC8wTENrV2RCZjJ3c0d4dzNaM0JZMWhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzE0MjU0MTE1OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVDJxb1E5d2d6UUV4LzFqL1J2M2lJUGVCaktQdjRTZ1dQNDU0UVl3NW1WZyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTA4NjA3NX0=" // session id here
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
