// const express = require('express');
// const router = express.Router();
// const authJwt = require('./verifyToken');

module.exports = function(app) { 

    const mitra  = require('../controller/mitra/mitra.js')
    const daftar = require('../controller/daftar/daftar.js')
    const lupapassword = require('../controller/lupapassword/lupapassword.js')

    app.post('/api/mitra', mitra.setProposalMitra);
    app.put('/api/datasuamiistri', mitra.setProposalSuamiIstriMitra);
    app.post('/api/daftarUser', daftar.daftarUser);
    app.get('/api/verifyUser/:rand/:username', daftar.verifyUser);
    app.post('/api/lupapassword', lupapassword.lupaPassword);
    app.post('/api/pulihkanpassword', lupapassword.pulihkanPassword);


};