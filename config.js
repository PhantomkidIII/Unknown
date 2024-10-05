//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2349123731026";
global.sudo = process.env.SUDO || "2349043812778";
global.owner = process.env.OWNER_NUMBER || "2349043812778";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tpemt6T0ZlamZKK2NmRlhQNWZ4VmxxRVNuTmJSQlZLNW8rRVgyMVZYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlUxUjNLSGR5LzltSVR3anJwd1dQSHVTV3FkUUg0ZGZHRXdQOUVoSHZtaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzS3VnTis1M1E3NTZwV2JYaXZ1SUtVWDRyby9nNzRIUlF1eTBDbWcwQldBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuV0JOR0d0T1dYb1g1QTRiRG5ZVjIyOU1NcXRFYVJPT2hTYlZDaGUyWEVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGbXFzWEJNamFQa1pOMWkzRUlyUFdmbVR5OVlENGtKbXRJalllUlpjbUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndWb1pWdm1oazlQQWNRSTNCcEc3Z05Cb1BJZ051RFRpKzNRbGEzcG44bEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdHQUxXSW56N09EVmp1YnJCclZVOExyK3ozV0gyQzM3VVI3bzJsUklVOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1dnWVNwUUZHUFpNT1JQWDllV1lWRUNLVTk4RjBaSURKT1E1aW5oUWZYYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxCQjNYcVNIV2U3NU11SkpWUmlPaXdXOUQ1RGV1c0NaK1dwMjFodUVyNVU3b1RyREdzUFdLVFBhcVlXYUJlcmZyMW9KQ1E2Q2owcUFQWDd1ZFhneUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MywiYWR2U2VjcmV0S2V5IjoiUzY3eTFvR0ptMzloNmp4empTNWg5M1RFS2srTlF2MEwxc1ZzVjdoYUZJRT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiU2l4RFBqZG5RSnFWRWF1NHV3VDJxQSIsInBob25lSWQiOiI1MDlmZjE3MS1hMjgzLTRhNjUtYjJmNy1hNzFiYzRiMGUyZjQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXZHeUJaZGkwQzZVcEdzc1htYnAwNUlReWEwPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklvbXNLTlFIUUo3QUZpY0drZFNqSG16aVFkZz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI2MjEyUjJXQyIsIm1lIjp7ImlkIjoiMjM0OTA0MzgxMjc3ODo2OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVTktOT1dOIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMNlU5a3NRNWYyRnVBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI3Vk53SEdKcFhrQjd5dFJHbUtaZVdNSC9aa3Rtd0tROTRSam8rME03SzAwPSIsImFjY291bnRTaWduYXR1cmUiOiJlbGppejJHamJUd2VlRzAvL052eHFVYmRtZE1jZ1ZVSFY4bG5rMkp4dFhSVXE2LzhnKzdiWjhQM01UZU1uQjlwUHlvc0xpUFF5T2tId3VScnhCS0JDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoib2ZnOW41b3lISTlYWHRrczFFb0ViYXJRUVRVN09vSDNpaXFPWVFibmtrRFJBajRPY2pCL0RtZ3pTZXZ1b0psR2t4ZDlEVyt2dDdrMWZzdy94SDJVQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDQzODEyNzc4OjY5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmUxVGNCeGlhVjVBZThyVVJwaW1YbGpCLzJaTFpzQ2tQZUVZNlB0RE95dE4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjgxNTEyODQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTkpPIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
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
