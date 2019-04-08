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
const bot = require('./bot');
require('./web')(bot);

bot.telegram.getMe().then((botInfo) => {
	bot.options.username = botInfo.username;
	bot.context.botInfo = botInfo;
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
