const express = require("express");
const router = express.Router();
const Artists = require('../models/Artists')

//! GET - homepage displaying ALL ARTISTS
router.get("/", (req, res) => {
  Artists.find({}).then(json => {
    res.send(json);
  });
});


// //! Click to show and redirect to specific /:id
// router.get("/:id", (req, res) => {
//   Artists.findOne({ _id: req.params.id }).then(json => {
//     res.send(json);
//   });
// });


// //! Update specific item by ID
// router.put("/:id", (req, res) => {
//   Artists.findOneAndUpdate({ _id: req.params.id }, req.body).then(json => {
//     res.send(json);
//   });
// });

// Clicked to add new item - take to new page
// router.get("/new", (req, res) => {
//   res.render("recipes/new");
// });

// // Create new json based on model - from homepage
// router.post("/", (req, res) => {
//   Artists.create({
//     title: req.body.title,
//     ingredients: req.body.ingredients,
//     instructions: req.body.instructions
//   }).then(json => {
//     res.redirect("/");
//   });
// });

// // Delete
// router.delete("/:id", (req, res) => {
//   Artists.findOneAndDelete({ _id: req.params.id }).then(() => {
//     res.redirect("/");
//   })
// });

module.exports = router;