const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cors = require('cors')
const app = express();

const songsController = require("./controllers/songs");
const artistsController = require('./controllers/artists')
const createController = require('./controllers/creation')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })); //interprets key value pairs in URLs
app.use(bodyParser.json()); //interprets a stringified JSON object on the request body
app.use(methodOverride("_method"));

//! Web URL uses anything after /songs & /artists - based on controller routes.
app.use("/songs", songsController);
app.use("/artists", artistsController);
app.use('/create', createController)

//this is something of the idea of what we need to do, but we have to adapt it
// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
