const express = require('express');
const router = express.Router();

module.exports = (db) => {

  router.get("/", (req, res) => {
    const sql = `SELECT * FROM users;
    `
    db.query(sql)
    .then((results) => {
      res.send(results.rows)
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
  })

  router.post("/login", (req, res) => {
    console.log(req.body);

    const sql = `SELECT * FROM users
    WHERE email = '${req.body.email}' AND password = '${req.body.password}';
    `
    db.query(sql)
    .then((results) => {
      if(results.rows.length > 0) {
        res.status(200).json(results.rows[0])
      } else {
        res.sendStatus(401)
      }
    })
    .catch((e) => {
      console.error(e);
      res.send(e);
    });
  })

  return router;
};