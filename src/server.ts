import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("Hello World! With Typescript.");

  response.json(["Pedro", "Jotta", "Matheus"]);
});

app.listen(3333);
