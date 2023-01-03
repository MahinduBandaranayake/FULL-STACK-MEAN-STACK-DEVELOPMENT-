const chai = require('chai');
const mocha = require('mocha');
const mongoose = require('mongoose');
const WebSocket = require('ws');
const listen = require('./websockets/index').listen;

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

const { expect } = chai;

describe('Integration Tests', () => {
  before(async () => {
    // Connect to the MongoDB database
    await mongoose.connect('mongodb://localhost:27017/AGFSTRAIL');
  });

  after(async () => {
    // Close the connection to the MongoDB database
    await mongoose.connection.close();
  });

  it('should correctly import the crop models', () => {
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

  it('should correctly configure and connect the WebSocket server', (done) => {
    // Create a WebSocket server and listen on port 8080
    const wss = listen(null, { port: 8080 });

    wss.on('connection', (ws) => {
      // Verify that the WebSocket server is correctly connected
      expect(ws).to.be.an.instanceOf(WebSocket);

      // Close the WebSocket server
      wss.close(done);
    });

    // Connect to the WebSocket server
    const ws = new WebSocket('ws://localhost:8080');
  });

  it('should correctly listen on port 3000', (done) => {
    // Create an Express server and listen on port 3000
    const app = listen(null, { port: 3000});

    app.on('connection', (conn) => {
      // Verify that the Express server is correctly listening on port 3000
      expect(conn.localPort).to.equal(3000);

      // Close the Express server
      app.close(done);
    });
  });
});