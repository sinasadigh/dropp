const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

module.exports = class Application {
  constructor() {
    this.setupExpress();
    this.setMongoConnection();
    this.setConfig();
      this.setRouters();
      app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({ error : err });
      });
  }

  setupExpress() {
    // const server = http.createServer(app);
    app.listen(config.port, () =>
      console.log(`Listening on port ${config.port}`)
    );
  }

  setMongoConnection() {
    mongoose.connect(config.database.url);
    mongoose.connection.on("error", (error) => console.log(error));
    mongoose.Promise = global.Promise;
  }

  /**
   * Express Config
   */
  setConfig() {
    require("./passport/passport-local");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
  }

  setRouters() {
    app.use(require("app/routes/api"));
  }
};
