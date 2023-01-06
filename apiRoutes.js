const router = require("express").Router();
const fs = require("fs");
let dbNote = require("./db/db.json");

// base url for this file is local host 3001/api
router.get("/notes", (req, res) => {
  res.json(dbNote);
});
// 
router.post("/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    // id for future delete
    // id: ./db.db.json.JSON.parse(./db.db.json),
  };
  dbNote.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(dbNote));
  res.json(dbNote);
});

module.exports = router;
