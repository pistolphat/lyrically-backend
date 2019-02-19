const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const songsController = require("./controllers/songs");
const artistsController = require('./controllers/artists')

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //interprets key value pairs in URLs
app.use(bodyParser.json()); //interprets a stringified JSON object on the request body
app.use(methodOverride("_method"));

//! Web URL uses anything after /songs based on controllers
app.use("/songs", songsController);
app.use("/artists", artistsController);

// app.listen(3000, () => {
//   console.log("Server running on Port 3000");
// });

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
