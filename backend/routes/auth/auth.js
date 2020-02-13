var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var md5 = require("md5");
var jwtConfig = require("../../config/jwt/config");

const model = require("../../models").sequelize;

router.post("/", async function(req, res, next) {
  console.log(req.body);
  let pwd = md5(req.body.password);

  const [result] = await model.query(
    `select * from tabel_user where npp = :npp and password = :password `,
    {
      replacements: { npp: req.body.username, password: pwd }
    }
  );
  // console.log(result.length)
  if ((result.length = 1)) {
    const accessToken = jwt.sign({ id: result[0].npp }, jwtConfig.secret, {
      expiresIn: jwtConfig.expireTime
    });
    const userData = Object.assign({}, result, { providerId: "jwt" });
    const response = {
      userData: userData,
      accessToken: accessToken
    };
    res.send([200, response]);
  } else {
    const error = "Email Or Password Invalid";
    res.send(error);
  }
  res.send(200);
});

module.exports = router;
