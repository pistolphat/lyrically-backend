const express = require("express");
const router = express.Router();
const Artists = require("../models/Artists");
const Songs = require("../models/Songs");

router.post("/artist", (req, res) => {
  Artists.create({
    Name: req.body.Name,
    Genre: req.body.Genre
  }).then(json => {
    res.send(json);
    res.console.log(req)
  });
});


router.post("/song", (req, res) => {
  Songs.create({
    title: req.body.title,
    artist: req.body.artist,
    lyrics: req.body.lyrics
  }).then(json => {
    res.send(json);
  });
});

module.exports = router;
