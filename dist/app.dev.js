"use strict";

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-undef */

/* eslint-disable @typescript-eslint/no-var-requires */
var express = require('express');

var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/AGFSTRAIL');

var _require = require('./models/crop'),
    cropwpModel = _require.cropwpModel,
    cropcpModel = _require.cropcpModel,
    cropspModel = _require.cropspModel,
    cropupModel = _require.cropupModel,
    cropnpModel = _require.cropnpModel,
    cropnwpModel = _require.cropnwpModel,
    cropnsgModel = _require.cropnsgModel,
    cropncpModel = _require.cropncpModel;

var wss = require('./websockets');

var WebSocket = require('ws');

wss.listen(app, {
  port: 8080
}, function () {
  console.log('WebSocket server is connected to port 8080');
});
var port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port ".concat(port));
});