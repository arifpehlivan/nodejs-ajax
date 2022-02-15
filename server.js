const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

var arrayNumber = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
];

function init() {
  for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {
      arrayNumber[x][y] = Math.floor(Math.random() * 10) + 1;
    }
  }
}

var a, b, c;

app.post("/", (req, res) => {
  res.json([
    {
      xCoor: req.body.coorX,
      yCoor: req.body.coorY,
    },
  ]);
  a = JSON.parse(req.body.coorX);
  b = JSON.parse(req.body.coorY);
  console.log(a, b, arrayNumber[a][b]);
  c = arrayNumber[a][b];
});

app.get("/ajax", (req, res) => {
  var d = {
    x: a,
    y: b,
    arr: c,
  };
  res.json(d);
});

init();

app.listen(3000);
