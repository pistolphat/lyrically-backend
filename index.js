const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

// const recipeController = require("./controllers/recipes");
const songsModels = require("./models/Songs");

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //interprets key value pairs in URLs
app.use(bodyParser.json()); //interprets a stringified JSON object on the request body
app.use(methodOverride("_method"));


app.get("/", (req, res) => {
  songsModels.find({}).then(songs => {
    res(console.log('songs'));
  });
});


app.listen(3000, () => {
  console.log("Server running on Port 3000");
});



// app.set("port", process.env.PORT || 3001);
// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });
