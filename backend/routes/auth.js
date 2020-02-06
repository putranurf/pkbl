var express = require("express");
var router = express.Router();

const model = require("../models").sequelize;

router.post("/", async (req, res, next) => {
  const [result] = await model.query(
    `select * from tabel_user where npp = '06010'`
  );

  if (result === null) {
    console.log("Not found!");
  } else {
    res.send(result);
  }
});

module.exports = router;
