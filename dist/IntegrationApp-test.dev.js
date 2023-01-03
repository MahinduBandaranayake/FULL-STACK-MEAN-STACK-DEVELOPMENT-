"use strict";

var chai = require('chai');

var mocha = require('mocha');

var mongoose = require('mongoose');

var WebSocket = require('ws');

var listen = require('./websockets/index').listen;

var _require = require('./models/crop'),
    cropwpModel = _require.cropwpModel,
    cropcpModel = _require.cropcpModel,
    cropspModel = _require.cropspModel,
    cropupModel = _require.cropupModel,
    cropnpModel = _require.cropnpModel,
    cropnwpModel = _require.cropnwpModel,
    cropnsgModel = _require.cropnsgModel,
    cropncpModel = _require.cropncpModel;

var expect = chai.expect;
describe('Integration Tests', function () {
  before(function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(mongoose.connect('mongodb://localhost:27017/AGFSTRAIL'));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  after(function _callee2() {
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(mongoose.connection.close());

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
  it('should correctly import the crop models', function () {
    // Verify that the crop models are defined and contain the expected data
    expect(cropwpModel).to.be.a('function');
    expect(cropcpModel).to.be.a('function');
    expect(cropspModel).to.be.a('function');
    expect(cropupModel).to.be.a('function');
    expect(cropnpModel).to.be.a('function');
    expect(cropnwpModel).to.be.a('function');
    expect(cropnsgModel).to.be.a('function');
    expect(cropncpModel).to.be.a('function');
  });
  it('should correctly configure and connect the WebSocket server', function (done) {
    // Create a WebSocket server and listen on port 8080
    var wss = listen(null, {
      port: 8080
    });
    wss.on('connection', function (ws) {
      // Verify that the WebSocket server is correctly connected
      expect(ws).to.be.an.instanceOf(WebSocket); // Close the WebSocket server

      wss.close(done);
    }); // Connect to the WebSocket server

    var ws = new WebSocket('ws://localhost:8080');
  });
  it('should correctly listen on port 3000', function (done) {
    // Create an Express server and listen on port 3000
    var app = listen(null, {
      port: 3000
    });
    app.on('connection', function (conn) {
      // Verify that the Express server is correctly listening on port 3000
      expect(conn.localPort).to.equal(3000); // Close the Express server

      app.close(done);
    });
  });
});