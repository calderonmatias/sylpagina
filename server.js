const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/contacto", (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log("Datos recibidos:", { nombre, email, mensaje });
    res.status(200).send("Formulario recibido correctamente.");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
