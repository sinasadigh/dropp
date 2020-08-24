const autoBind = require("auto-bind");

const { validationResult } = require("express-validator/check");

module.exports = class controller {
  constructor() {
    autoBind(this);
  }

  async validationData(req) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      const errors = result.array();
      const messages = [];

      errors.forEach((err) => messages.push(err.msg));

        return { status:false,message : messages};
    }

      return { status: true };
  }
  back(req, res) {
    return res.redirect(req.header("Referer") || "/");
  }
};
