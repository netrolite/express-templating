import express from "express";
const app = express();
const port = 4000;
import path from "path";


const viewsPath = path.join(__dirname, "../public/views");

app.get("/", (req, res) => {
  res.sendFile(`${viewsPath}/index.html`);
})

app.get("/about", (req, res) => {
  res.sendFile(`${viewsPath}/about.html`);
})

app.get("/about-us", (req, res) => {
  console.log("redirect!!!");
  res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
})

// 404 page
app.use((req, res) => {
  res.sendFile(`${viewsPath}/404.html`)
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});