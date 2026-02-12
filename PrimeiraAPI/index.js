const express = require("express");

const server = express();

server.use(express.json());

// Criando um CRUD(Create, Read, Update e Delete)

const cursos = ["Node JS", "JavaScript", "React Native", "Java", "Scrum"];

// Middleware GLOBAL
server.use((req, res, next) => {
  console.log(`URL Chamada: ${req.url}`);

  return next();
});

// Função para validar se o Curso está sendo criado corretamente
function checkCurso(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Nome do Curso é OBRIGATÓRIO!" });
  }
  return next();
}

// Listando Todos os Cursos
server.get("/cursos", (req, res) => {
  return res.json(cursos);
});

// Listando um Curso com base no index
server.get("/cursos/:index", (req, res) => {
  const { index } = req.params;

  return res.json(cursos[index]);
});

// Criando um Novo Curso
server.post("/cursos", checkCurso, (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

//Atualizando um Curso
server.put("/cursos/:index", checkCurso, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

// Deletando um Curso
server.delete("/cursos/:index", (req, res) => {
  const { index } = req.params;

  cursos.splice(index, 1);
  return res.json({ message: "Curso deletado com sucesso!" });
});

server.listen(3000);
