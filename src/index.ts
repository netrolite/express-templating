import express from "express";
import { engine } from "express-handlebars";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index");
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
})