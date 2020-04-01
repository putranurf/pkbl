// const express = require('express');
// const router = express.Router();
// const authJwt = require('./verifyToken');

module.exports = function(app) { 

    const mitra  = require('../controller/mitra/mitra.js')
    const daftar = require('../controller/daftar/daftar.js')

    app.post('/api/mitra', mitra.setProposalMitra);
    app.put('/api/datasuamiistri', mitra.setProposalSuamiIstriMitra);
    app.post('/api/daftarUser', daftar.daftarUser);
    app.get('/api/verifyUser/:rand/:username', daftar.verifyUser);


};