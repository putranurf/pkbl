var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var md5 = require("md5");

const model = require("../models").sequelize;

router.post("/",  function(req, res, next) {
  let pwd = md5(req.body.password);
  const [result] =  model.query(
    `select * from tabel_user where npp = :npp and password = :password `,
    {
      replacements: { npp: req.body.npp, password: pwd }
    }
  );
  const jwtConfig = {
    secret: "dd5f3089-40c3-403d-af14-d0c228b05cb4",
    expireTime: 8000
  };
  if (result.length) {
    // try {
      const accessToken = jwt.sign({ id: result[0].npp }, jwtConfig.secret, {
        expiresIn: jwtConfig.expireTime
      });
      const userData = Object.assign({}, result, { providerId: "jwt" });
      const response = {
        userData: userData,
        accessToken: accessToken
      };
      // return [200, response];
      res.send([200, response]);
    // } catch (e) {
    //   error = e;
    // }
    // console.log("asup");
  } else {
    const error = "Email Or Password Invalid";
    res.send(error)
    // console.log("heunteu");
  }
  // return [200, { error }];
  res.send(200);
});

module.exports = router;
