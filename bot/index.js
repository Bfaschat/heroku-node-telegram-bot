'use strict';

const Telegraf = require('telegraf');
const config = require('../config');
const express = require('express')
const expressApp = express()
const TOKEN = process.env.TOKEN;

const bot = new Telegraf(process.env.TOKEN);
if ( process.env.NODE_ENV === 'production') {
  expressApp.use(bot.webhookCallback('/' + TOKEN));
  bot.telegram.setWebhook(URL + TOKEN);
}

console.log('Your app is listening on port ' + 3000 + ' \u{1F604}');


module.exports = bot;
// cyclic dependency
// bot/index requires context requires actions/warn requires bot/index
Object.assign(bot.context, require('./context'));
