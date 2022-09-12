import express from "express";

const app = express();

app.get("/ads", (request, response) => {
  return response.json([
    { id: 1, name: "Anuncio" },
    { id: 2, name: "Anuncio" },
    { id: 3, name: "Anuncio" },
    { id: 4, name: "Anuncio" },
  ]);
});

app.listen(3333);
