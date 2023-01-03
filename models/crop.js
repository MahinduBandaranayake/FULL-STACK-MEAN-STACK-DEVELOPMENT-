/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  CropType: String,
  CropQuantity: Number,
  QuantityUnit: String,
  PaymentNo: Number,
  PaidAmount: mongoose.Types.Decimal128,
  DeficitAmount: mongoose.Types.Decimal128,
  Time: String,
  date: Number,
  CultivationSeason: String,
  FertilizersUsed: String,
  DistrictNo: Number,
  MarketLocation: String,
  CropCultivationLocation: String,
  CVName: String,
  CVAge: Number,
  CVNICNo: Number,
  CVTradeNo: Number,
  CBName: String,
  CBAge: Number,
  CBNICNo: Number,
  CBTradeNo: Number,
});

const cropwpModel = mongoose.model('cropwp', cropSchema);
const cropcpModel = mongoose.model('cropcp', cropSchema);
const cropspModel = mongoose.model('cropsp', cropSchema);
const cropupModel = mongoose.model('cropup', cropSchema);
const cropnpModel = mongoose.model('cropnp', cropSchema);
const cropnwpModel = mongoose.model('cropnwp', cropSchema);
const cropncpModel = mongoose.model('cropncp', cropSchema);
const cropnsgModel = mongoose.model('cropsg', cropSchema);

module.exports = {
  cropwpModel,
  cropcpModel,
  cropspModel,
  cropupModel,
  cropnpModel,
  cropnwpModel,
  cropncpModel,
  cropnsgModel
  

};
