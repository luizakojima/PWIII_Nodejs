const express = require("express");

const app = require("./src");

const PORT =   3000;

app.listen(PORT, () => {
  consle.log('Servidor iniciado na porta ${PORT}');
});
