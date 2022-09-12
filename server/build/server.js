"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/ads", (request, response) => {
    return response.json([
        { id: 1, name: "Anuncio" },
        { id: 2, name: "Anuncio" },
        { id: 3, name: "Anuncio" },
    ]);
});
app.listen(3333);
