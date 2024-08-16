const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000; // Use the port provided by the host or default to 3000
const CORS_OPTIONS = {
  origin: "*",
  methods: "GET,POST",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const BLACK_PLAYER = "black";
const WHITE_PLAYER = "white";

const app = express();
app.use(express.json());
app.use(cors(CORS_OPTIONS));
app.options("*", cors());

let games = {};

app.post("/api/create/:game_id", (req, res) => {
  let game_id = req.params.game_id;
  games[game_id] = {
    currentTurn: WHITE_PLAYER,
    board: [
      [1, "N", 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, "p", 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, "B", 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, "r", "k", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, "n", "Q", 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, "b", "P", 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
  };
  res.send(games[game_id]);
});

app.post("/api/join/:game_id", (req, res) => {
  let game_id = req.params.game_id;
  if (!games[game_id]) {
    return res.sendStatus(404);
  }
  res.send(games[game_id]);
});

app.post("/api/move/:game_id", (req, res) => {
  let game = games[req.params.game_id];
  game.board = req.body;
  if (game.currentTurn === WHITE_PLAYER) {
    game.currentTurn = BLACK_PLAYER;
  } else {
    game.currentTurn = WHITE_PLAYER;
  }

  res.send(game);
});

app.get("/api/game/:game_id", (req, res) => {
  res.send(games[req.params.game_id]);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
