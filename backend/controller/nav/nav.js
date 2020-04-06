const model = require("../../models").sequelize;
const auth = require('../../models').pk_auth_verify

exports.nav = (async (req, res) => {
  const sql = ` SELECT * FROM pk_nav_item `
  await model.query(sql, {
    // replacements: { username: req.body.username }, 
    type: model.QueryTypes.SELECT
  }).then(data => {
    console.log(data[0])
  }).catch(error => {
    consolelog(error)
  })

})