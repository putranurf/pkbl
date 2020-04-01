var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var md5 = require("md5");
var jwtConfig = require("../../config/jwt/config");
const model = require("../../models").sequelize;
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.post("/", async function(req, res, next) {  
  const sql = `select * from pk_auth_verify where username = $1`
  await model.query(sql, {
    bind: [req.body.username], 
    type: model.QueryTypes.SELECT
  }).then(user => {    
    bcrypt.compare(req.body.password, user[0].password, async function(err, isMatch) {
      if (err) {
        throw err
      } else if (!isMatch) {
        // console.log("Password doesnt matches!")
        let title = 'Gagal Login'
        let text = 'Username atau Password Salah'
        res.status(400).send({ title: title , text: text })
      } else {
        // console.log("Password matches!")
        let [resultVerify] = await model.query(
        `select * from pk_auth_verify where username = :username `, {
          replacements: { username: req.body.username }
        });
        if (!resultVerify[0].verify) {        
          let title = "Akun PKBL belum di Verifikasi";        
          let text = "Silahkan Verifikasi Terlebih Dahulu di Email Anda";        
          res.status(400).send({ title: error, text: text })
        } else {
          console.log('Akun sudah di verifikasi')
          let accessToken = jwt.sign({ id: user[0].npp }, jwtConfig.secret, {
            expiresIn: jwtConfig.expireTime
          });
          let userData = Object.assign({}, user, { providerId: "jwt" });
          let response = {
            userData: userData,
            accessToken: accessToken
          };
          res.send([200, response]);
        }
        res.send(200);
      }
    })        
  }).catch(err => {
    let title = 'Gagal Login'
    let text  = 'Username Belum Terdaftar di Akun PKBL Online. Silahkan Buat Akun Terlebih Dahulu'
    res.status(400).send({ title: title, text: text });
  });
});

module.exports = router;
