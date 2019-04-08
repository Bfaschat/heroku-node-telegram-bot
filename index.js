'use strict';

process.chdir(__dirname);
const express = require('express');
const app = express();
// Utils
const { logError } = require('./utils/log');
/**
 * @type {Telegraf}
 * Bot
 */
 require("dotenv").config();

 var bot = require('./bots');
 require('./web')(bot);

bot.telegram.getMe().then((botInfo) => {
	bot.options.username = botInfo.username;
	bot.context.botInfo = botInfo;
}).then(() => {
  //bot.startWebhook('/webhook', null, '3000');
	//bot.startPolling();
});



bot.use(
	require('./handlers/middlewares'),
	require('./handlers/messages'),
	require('./plugins'),
	require('./handlers/commands'),
	require('./handlers/regex'),
	require('./handlers/unmatched'),
);


bot.catch(logError);
