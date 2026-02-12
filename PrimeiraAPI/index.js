const express = require("express");

const server = express();

const cursos = ["Node JS", "JavaScript", "React Native", "Java", "Scrum"];

// localhost:3000/curso/:id
server.get("/curso/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

server.listen(3000);
