const express = require("express");

const { OAuth2Client } = require("google-auth-library");
const { token } = require("morgan");

const ProtectedService = require("./protected-service");

const protectedRouter = express.Router();

const client = new OAuth2Client(process.env.CLIENT_ID);

async function verify() {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const payload = ticket.getPayload();
  const userid = payload["sub"];
}
verify().catch(console.error);

protectedRouter.route("/").get((req, res, next) => {
  ProtectedService.getAll(req.app.get("db"))
    .then((all) => {
      res.json();
    })
    .catch(next);
});

module.exports = protectedRouter;
