const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));

console.log("I am working!!");
app.get("/", (request, respond) => {
  respond.send("<h1>server</h1>");
});
app.get("/home", (request, respond) => {
  respond.sendFile(__dirname + "/views/Home.html");
});

app.get("/about", (request, respond) => {
  respond.sendFile(__dirname + "/views/About.html");
});

app.get("/work", (request, respond) => {
  respond.sendFile(__dirname + "/views/work.html");
});
console.log("hi");
app.listen(3001, () => {
  console.log("App is listening on port 3001");
});
