const express = require("express");
const ProtectedService = requier("./protected-service");

const protectedRouter = express.Router();

protectedRouter.route("/").get(requireAuth, (req, res, next) => {
  ProtectedService.getAll(req.app.get("db"))
    .then((all) => {
      res.json();
    })
    .catch(next);
});
