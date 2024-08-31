// ES5

const http = require("http");
const os = require("os");


// creacion del servidor
const servidor = http.createServer(function (peticion, respuesa) {
  console.log(peticion);
  const url = peticion.url;

  switch (url) {
    case "/":
      respuesa.writeHead(200, { "Content-Type": "text" });
      respuesa.end("Hola mundo");
      break;
    case "/productos":
      respuesa.writeHead(200, { "Content-Type": "text/html" });
      respuesa.end('<h1>Productos en venta</h1>');
      break;

  }
});


const PORT = 3000;
servidor.listen(PORT, function () {
    console.log(`Port: ${PORT}`);
});