const mongoose = require("mongoose");

// if (process.env.NODE_ENV == "production") {
//   mongoose.connect(process.env.MLAB_URL)
// } else {
  mongoose.connect("mongodb://localhost/Songs");
// }

//enable Promise functions
mongoose.Promise = Promise;

//Export mongoose
module.exports = mongoose;