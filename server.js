require("dotenv").config();
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const categoriasRoutes = require("./routes/categoriasRoutes");
const productosRoutes = require("./routes/productosRoutes");
const usuarioRouter = require("./routes/usuarioRouter");
const empresaRouter = require("./routes/empresaRouter");
const Usuario = require("./models/usuario");
const marcasRoutes = require("./routes/marcasRoutes");
const jwt = require("jsonwebtoken");

const app = express();

app.use(logger("dev"));

app.use(express.json());
app.use(cors());

app.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    console.log(token);
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    console.log(verified);
    if (!verified) return res.json(false);

    const { rows } = await Usuario.getById(verified.id);
    const user = rows[0];
    console.log(user);
    if (!user) return res.json(false);

    return res.json({
      isValid: true,
      user: {
        id: user.id_user,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {}
});

//Routes
app.use("/categorias", categoriasRoutes);
app.use("/productos", productosRoutes);
app.use("/login", usuarioRouter);
app.use("/empresa", empresaRouter);
app.use("/marcas", marcasRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
