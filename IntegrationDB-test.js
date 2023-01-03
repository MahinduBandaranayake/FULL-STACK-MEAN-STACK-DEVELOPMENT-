/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const chai = require('chai');
const expect = chai.expect;
const WebSocket = require('ws');
const listen = require('./websockets/index');

describe('Integration tests', function() {
  let server;
  let ws;

  beforeEach(function(done) {

    server = listen.listen(8080);
    ws = new WebSocket('ws://localhost:8080');
    ws.on('open', function open() {
      done();
    });
  });

  afterEach(function(done) {
   
    ws.close();
    server.close(done);
  });

  it('Should save data with the "cropwp" type to the "cropwp" collection', function(done) {
    ws.send(JSON.stringify({
      type: 'cropwp',
      CropType: 'Rice',
      CropQuantity: 100,
      QuantityUnit: 'kg',
      PaymentNo: 123456,
      PaidAmount: 1000,
      DeficitAmount: 0,
      Time: '10:00',
      date: '2022-01-01',
      CultivationSeason: 'Yala',
      FertilizersUsed: 'Agrochemicals',
      DistrictNo: 13,
      MarketLocation: 'Nawala',
      CropCultivationLocation: 'Matale',
      CVName: 'Maithrapala',
      CVAge: 35,
      CVNICNo: '1234567890123',
      CVTradeNo: '12345',
      CBName: 'Kumaradasa',
      CBAge: 40,
      CBNICNo: '2345678901234',
      CBTradeNo: '23456'
    }));
    ws.on('message', function incoming(message) {
      expect(message).to.equal('Crop Information saved successfully to cropwp collection!');
      done();
    });
});


it('should save data with the "cropcp" type to the "cropcp" collection', function(done) {
    ws.send(JSON.stringify({
      type: 'cropcp',
      CropType: 'Condiments',
      CropQuantity: 30,
      QuantityUnit: 'kg',
      PaymentNo: 2879,
      PaidAmount: 3900,
      DeficitAmount: 1200,
      Time: '13:00',
      date: '2022-02-17',
      CultivationSeason: 'Maha',
      FertilizersUsed: 'Urea',
      DistrictNo: 12,
      MarketLocation: 'Gampaha',
      CropCultivationLocation: 'Dambulla',
      CVName: 'Anil',
      CVAge: 35,
      CVNICNo: '2456123492',
      CVTradeNo: '9011',
      CBName: 'Kamal',
      CBAge: 40,
      CBNICNo: '4562890720',
      CBTradeNo: '3004'
    }));
    ws.on('message', function incoming(message) {
      expect(message).to.equal('Crop Information saved successfully to cropcp collection');
      done();
    });
});


it('should save data with the "cropsp" type to the "cropsp" collection', function(done) {
    ws.send(JSON.stringify({
      type: 'cropsp',
      CropType: 'Root Crops',
      CropQuantity: 160,
      QuantityUnit: 'kg',
      PaymentNo: 2819,
      PaidAmount: 3500,
      DeficitAmount: 1210,
      Time: '14:00',
      date: '2022-02-19',
      CultivationSeason: 'Maha',
      FertilizersUsed: 'Urea and Agrochemicals',
      DistrictNo: 3,
      MarketLocation: 'Jaffna',
      CropCultivationLocation: 'Dambulla',
      CVName: 'Kuhathasan',
      CVAge: 37,
      CVNICNo: '2901234563',
      CVTradeNo: '8099',
      CBName: 'Wimal',
      CBAge: 41,
      CBNICNo: '7892890720',
      CBTradeNo: '3023'
    }));
    ws.on('message', function incoming(message) {
      expect(message).to.equal('Crop Information saved successfully to cropsp collection');
      done();
    });
});


it('should save data with the "cropup" type to the "cropup" collection', function(done) {
    ws.send(JSON.stringify({
      type: 'cropup',
      CropType: 'Carrot',
      CropQuantity: 200,
      QuantityUnit: 'kg',
      PaymentNo: 2912,
      PaidAmount: 13370,
      DeficitAmount: 1510,
      Time: '19:00',
      date: '2022-03-29',
      CultivationSeason: 'Maha',
      FertilizersUsed: 'Urea and Agrochemicals',
      DistrictNo: 18,
      MarketLocation: 'Nuweraeliya',
      CropCultivationLocation: 'Maradana',
      CVName: 'Kirthi',
      CVAge: 39,
      CVNICNo: '2901090031',
      CVTradeNo: '8099',
      CBName: 'Wimal',
      CBAge: 44,
      CBNICNo: '9002890720',
      CBTradeNo: '3089'
    }));
    ws.on('message', function incoming(message) {
      expect(message).to.equal('Crop Information saved successfully to cropup collection');
      done();
    });
});


it('should save data with the "cropnp" type to the "cropnp" collection', function(done) {
    ws.send(JSON.stringify({
      type: 'cropnp',
      CropType: 'Leeks',
      CropQuantity: 220,
      QuantityUnit: 'kg',
      PaymentNo: 2122,
      PaidAmount: 10370,
      DeficitAmount: 1410,
      Time: '21:00',
      date: '2022-04-29',
      CultivationSeason: 'Maha',
      FertilizersUsed: 'Urea and Agrochemicals',
      DistrictNo: 25,
      MarketLocation: 'Dambulla',
      CropCultivationLocation: 'Kandy',
      CVName: 'Thilakasiri',
      CVAge: 75,
      CVNICNo: '8923456731',
      CVTradeNo: '4099',
      CBName: 'Sushantha',
      CBAge: 49,
      CBNICNo: '9045671320',
      CBTradeNo: '5089'
    }));
    ws.on('message', function incoming(message) {
      expect(message).to.equal('Crop Information saved successfully to cropnp collection');
      done();
    });
});

it('should save data with the "cropnwp" type to the "cropnwp" collection', function(done) {
    ws.send(JSON.stringify({
      type: 'cropnwp',
      CropType: 'Mushroom',
      CropQuantity: 120,
      QuantityUnit: 'kg',
      PaymentNo: 2182,
      PaidAmount: 14370,
      DeficitAmount: 3430,
      Time: '21:46',
      date: '2022-12-10',
      CultivationSeason: 'Yala',
      FertilizersUsed: 'Urea and Agrochemicals',
      DistrictNo: 21,
      MarketLocation: 'Mattakkuliya',
      CropCultivationLocation: 'Jaffna',
      CVName: 'Sumanasiri',
      CVAge: 67,
      CVNICNo: '657823451',
      CVTradeNo: '4349',
      CBName: 'Amalsiri',
      CBAge: 69,
      CBNICNo: '1012234523',
      CBTradeNo: '8989'
    }));
    ws.on('message', function incoming(message) {
      expect(message).to.equal('Crop Information saved successfully to cropnwp collection');
      done();
    });
});

it('should save data with the "cropncp" type to the "cropncp" collection', function(done) {
    ws.send(JSON.stringify({
      type: 'cropncp',
      CropType: 'Tomatoes',
      CropQuantity: 620,
      QuantityUnit: 'kg',
      PaymentNo: 9182,
      PaidAmount: 12370,
      DeficitAmount: 3530,
      Time: '11:46',
      date: '2022-12-20',
      CultivationSeason: 'Yala',
      FertilizersUsed:  'Agrochemicals',
      DistrictNo: 15,
      MarketLocation: 'Pilimathawala',
      CropCultivationLocation: 'Matale',
      CVName: 'Ginadi',
      CVAge: 69,
      CVNICNo: '1200200030',
      CVTradeNo: '7623',
      CBName: 'Mewan',
      CBAge: 30,
      CBNICNo: '1012201112',
      CBTradeNo: '9089'
    }));
    ws.on('message', function incoming(message) {
      expect(message).to.equal('Crop Information saved successfully to cropncp collection');
      done();
    });
});

it('should save data with the "cropsg" type to the "cropsg" collection', function(done) {
    ws.send(JSON.stringify({
      type: 'cropsg',
      CropType: 'Coarse Grains',
      CropQuantity: 240,
      QuantityUnit: 'kg',
      PaymentNo: 7182,
      PaidAmount: 19070,
      DeficitAmount: 6730,
      Time: '13:49',
      date: '2022-07-25',
      CultivationSeason: 'Yala',
      FertilizersUsed:  'Agrochemicals',
      DistrictNo: 13,
      MarketLocation: 'Maharagama',
      CropCultivationLocation: 'Trincomalee',
      CVName: 'Piyadasa',
      CVAge: 43,
      CVNICNo: '456700030',
      CVTradeNo: '7343',
      CBName: 'Shewantha',
      CBAge: 78,
      CBNICNo: '8634123300',
      CBTradeNo: '9819'
    }));
    ws.on('message', function incoming(message) {
      expect(message).to.equal('Crop Information saved successfully to cropncp collection');
      done();
    });
});

})

