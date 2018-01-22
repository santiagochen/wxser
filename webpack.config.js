var path = require("path");
module.exports = {
  entry: {
    app: ["./emulator/js/index.js"]
  },
  output: {
    path: __dirname + '/',
    publicPath: "/",
    filename: "js/bundle.js"
  }
};