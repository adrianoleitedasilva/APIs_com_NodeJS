## Query Params

```javascript
const express = require("express");

const server = express();

server.get("/curso/", (req, res) => {
  //console.log("Acessou a rota!");

  // Query Params
  const nome = req.query.nome;

  return res.json({ curso: `Aprendendo ${nome}` });
});

server.listen(3000);
```

## Route Params

```javascript
const express = require("express");

const server = express();

server.get("/curso/:id", (req, res) => {
  const id = req.params.id;

  return res.json({ curso: `Curso: ${id}` });
});

server.listen(3000);
```
