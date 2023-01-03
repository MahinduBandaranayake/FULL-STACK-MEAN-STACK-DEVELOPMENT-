"use strict";

/* eslint-disable no-undef */

/* eslint-disable @typescript-eslint/no-var-requires */
var WebSocket = require('ws');

module.exports.listen = function (app) {
  var wss = new WebSocket.Server({
    server: app
  });
  wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
      var data = JSON.parse(message);
      var collection;

      if (data.type === 'cropwp') {
        collection = cropwp;
      } else if (data.type === 'cropcp') {
        collection = cropcp;
      } else if (data.type === 'cropsp') {
        collection = cropsp;
      } else if (data.type === 'cropup') {
        collection = cropup;
      } else if (data.type === 'cropnp') {
        collection = cropnp;
      } else if (data.type === 'cropnwp') {
        collection = cropnwp;
      } else if (data.type === 'cropncp') {
        collection = cropncp;
      } else if (data.type === 'cropsg') {
        collection = cropsgp;
      } else {
        /* empty */
      }

      var doc = new collection({
        CropType: data.CropType,
        CropQuantity: data.CropQuantity,
        QuantityUnit: data.QuantityUnit,
        PaymentNo: data.PaymentNo,
        PaidAmount: data.PaidAmount,
        DeficitAmount: data.DeficitAmount,
        Time: data.Time,
        date: data.date,
        CultivationSeason: data.CultivationSeason,
        FertilizersUsed: data.FertilizersUsed,
        DistrictNo: data.DistrictNo,
        MarketLocation: data.MarketLocation,
        CropCultivationLocation: data.CropCultivationLocation,
        CVName: data.CVName,
        CVAge: data.CVAge,
        CVNICNo: data.CVNICNo,
        CVTradeNo: data.CVTradeNo,
        CBName: data.CBName,
        CBAge: data.CBAge,
        CBNICNo: data.CBNICNo,
        CBTradeNo: data.CBTradeNo
      });
      doc.save(function (error) {
        if (error) {
          console.log(error);
        } else {
          console.log('Crop Information saved successfully!');
        }
      });
    });
  });
};