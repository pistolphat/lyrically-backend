const express = require("express");
const router = express.Router();
const Artists = require('../models/Artists')

//! GET - homepage displaying ALL ARTISTS
router.get("/", (req, res) => {
  Artists.find({}).then(json => {
    res.send(json);
  });
});

//! Click to show and redirect to specific /:id
router.get("/:id", (req, res) => {
  Artists.findOne({ _id: req.params.id }).then(json => {
    res.send(json);
  });
});

//! Update specific item by ID
router.put("/:id", (req, res) => {
  Artists.findOneAndUpdate({ _id: req.params.id }, req.body).then(json => {
    res.send(json);
  });
});

//! Delete
router.delete("/:id", (req, res) => {
  Artists.findOneAndDelete({ _id: req.params.id }).then(() => {
    res.send("Delete Success")
    // res.redirect("/");
  })
});

// //! Create new json based on model.
// router.post("/", (req, res) => {
//   Artists.create({
//     name: req.body.Name,
//     genre: req.body.Genre
//   }).then(json => {
//     res.send(json)
//     // res.redirect("/");
//   });
// });

// //! Click to show and redirect to specific /:id
// router.get("/:id", (req, res) => {
//   Artists.findOne({ _id: req.params.id }).then(json => {
//     res.send(json);
//   });
// });

// router.get("/new", (req, res) => {
//   res.render("recipes/new");
// });

module.exports = router;