const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const conexion = mongoose
  .connect(process.env.MONGO_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((err) => console.log("Error en la conexion a MongoDB",err));

module.exports = {
  conexion,
};

/*
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Conectado a MongoDB");
});
*/
