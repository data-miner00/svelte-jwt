require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const crypto = require("crypto");

function hash256(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

const app = express();

app.use(cors());
app.use(express.json());

const posts = [
  {
    username: "Kyle",
    title: "Post 1",
  },
  {
    username: "Gim",
    title: "Post 2",
  },
];

users = [
  {
    username: "Kyle",
    passwordHash:
      "6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090",
  },
  {
    username: "Gim",
    passwordHash:
      "6ca13d52ca70c883e0f0bb101e425a89e8624de51db2d2392593af6a84118090",
  },
];

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username == req.user.name));
});

app.post("/login", (req, res) => {
  // Authenticate User
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find((n) => n.username == username);
  if (!user) {
    return res.status(404).send("User not found");
  }
  if (hash256(password) !== user.passwordHash) {
    return res.status(403).send("Wrong password");
  }

  const userobj = {
    name: username,
  };

  const accessToken = jwt.sign(userobj, process.env.ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).send("No Token provided");

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send("Forbidden");
    req.user = user;
    next();
  });
}

app.listen(process.env.EXPRESS_APP_PORT);
