var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");

const model = require("../models").sequelize;

router.post("/", async (req, res, next) => {
  const [result] = await model.query(
    `select * from tabel_user where npp = :npp and password = :password `,
    {
      replacements: { npp: req.body.npp , password: req.body.password}
    }
  );

  // console.log(result)
  const jwtConfig = {
    secret: "dd5f3089-40c3-403d-af14-d0c228b05cb4",
    expireTime: 8000
  };
  console.log(result)
  if (result) {
    try {
      const accessToken = jwt.sign({ id: result[0].npp }, jwtConfig.secret, {
        expiresIn: jwtConfig.expireTime
      });
      const userData = Object.assign({}, result, { providerId: "jwt" });
      const response = {
        userData: userData,
        accessToken: accessToken
      };      
      // return [200, response];
      res.sendStatusd([200, response]);
    } catch (e) {
      error = e;
    }
  } else {
    error = "Email Or Password Invalid";
    res.sendStatus(error)
  }

  // return [200, { error }];
  res.send(200)
});

module.exports = router;
