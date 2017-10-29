import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function fibonacci(num) {
  var a = 1,
    b = 2,
    temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

app.post("/api/fibonacci", (req, res) => {
  console.log(req.body);
  var result = fibonacci(req.body.data.count);
  console.log(result);
  res.status(200).json({ result });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(9000, () => console.log("Running on 9000"));
