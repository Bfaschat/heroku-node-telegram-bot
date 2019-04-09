'use strict';

const Telegraf = require('telegraf');
const config = require('../config');

const bot = new Telegraf(config.token);
const fs = require('fs');
const cron = require('cron');
const exec = require('child_process').exec;
let cronJob;

if (process.env.NODE_ENV === 'development') {
	bot.launch({
  webhook: {
    domain: "https://tspambot.herokuapp.com/webhook",
    port: 4000
  }
})
}

//bot.telegram.setWebhook(`${process.env.HEROKU_URL}/webhook`);
const http = require('http');
const express = require('express');
const app = express();
app.get("https://tspambot.herokuapp.com", (request, response) => {
  console.log(' \u{1F604}' + " Ping Received");
  response.sendStatus(200);
});
//app.listen(process.env.PORT);
setInterval(() => {
  http.get("https://tspambot.herokuapp.com/");
}, 280000);
app.listen(5000, () => {
    console.log('Your app is listening on port ' + 5000 + ' \u{1F604}');
  });
console.log('Your app is listening on port ' + 3000 + ' \u{1F604}');


module.exports = bot;

// cyclic dependency
// bot/index requires context requires actions/warn requires bot/index
Object.assign(bot.context, require('./context'));
