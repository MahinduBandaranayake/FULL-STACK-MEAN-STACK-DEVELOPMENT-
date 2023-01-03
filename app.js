/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');

const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/AGFSTRAIL');

const {
  cropwpModel,
  cropcpModel,
  cropspModel,
  cropupModel,
  cropnpModel,
  cropnwpModel,
  cropnsgModel,
  cropncpModel
} = require('./models/crop');


const wss = require('./websockets');
const WebSocket = require('ws');



wss.listen(app, { port: 8080 }, () => {
  console.log('WebSocket server is connected to port 8080');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});