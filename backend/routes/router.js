// const express = require('express');
// const router = express.Router();
// const authJwt = require('./verifyToken');

module.exports = function(app) { 

    const mitra = require('../controller/mitra/mitra.js')

    app.post('/api/mitra', mitra.setProposalMitra);


};