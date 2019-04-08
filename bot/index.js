'use strict';

const Telegraf = require('telegraf');
const config = require('../config');
const bot = new Telegraf(process.env.TOKEN);
module.exports = bot;
// cyclic dependency
// bot/index requires context requires actions/warn requires bot/index
Object.assign(bot.context, require('./context'));
