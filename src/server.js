const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

let planos = []

app.get("/", (req, res) => {
  res.send("API FitLife funcionando!");
});

app.get("/planos", (req, res) => {
  res.json(planos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.post("/planos", (req, res) => {
  const { nome, categoria, preco } = req.body;

  if (!nome || !categoria || preco === undefined || preco <= 0) {
    return res.status(400).json({
      mensagem: "Preencha todos os campos corretamente.",
    });
  }

  const novoPlano = {
    id: Date.now(),
    nome,
    categoria,
    preco: Number(preco),
  };

  planos.push(novoPlano);

  res.status(201).json({
    mensagem: "Plano cadastrado com sucesso!",
    plano: novoPlano,
  });


app.listen(PORT, () => {
  console.log(`Servidor FitLife rodando na porta ${`${process.env.NEXT_PUBLIC_API_URL}/planos`}`);
});

})