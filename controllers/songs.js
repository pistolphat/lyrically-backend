const express = require("express");
const router = express.Router();
const Songs = require("../models/Songs");

//! GET - homepage displaying ALL SONGS
router.get("/", (req, res) => {
  Songs.find({}).then(json => {
    res.send(json);
  });
});

//! Click to show and redirect to specific /:id
router.get("/:id", (req, res) => {
  Songs.findOne({ _id: req.params.id }).then(json => {
    res.send(json);
  });
});

//! Update specific item by ID
router.put("/:id", (req, res) => {
  Songs.findOneAndUpdate({ _id: req.params.id }, req.body).then(json => {
    console.log(req.body);
    res.send(json);
  });
});

//! Delete
router.delete("/:id", (req, res) => {
  Songs.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.send('Delete Success');
  })
});

//! Create new json based on model - from homepage
router.post("/", (req, res) => {
  Songs.create({
    Title: req.body.Title,
    Artist: req.body.Artist,
    Lyrics: req.body.Lyrics
  }).then(json => {
    res.send(json);
  });
});

// Clicked to add new item - take to new page
// router.get("/new", (req, res) => {
//   res.render("recipes/new");
// }); 

module.exports = router;
