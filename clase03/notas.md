# Clase 3

### Express generator
- express generator: es una herramienta que genera la estructura simple (template) de una aplicacion
- link: [express generator](https://expressjs.com/en/starter/generator.html)
```bash
npx express-generator --view=hbs my_app
```
Para instalarlo de manera global:
```bash
npm install -g express-generator
```

### Variables de entorno
- Para variables de entorno utilizamos la libreria `dotenv`
- Se crea en el proyecto un archivo `.env` y dentro se configuran cada una de las variables de entorno.

### Peticiones

### Middleware
- Son funciones que se encuentran entre la peticion y la respuesta (`app.use`)
- Un middleware es una función que se ejecuta antes de que una solicitud HTTP llegue a su destino final (una ruta específica) o antes de que una respuesta sea enviada al cliente.

Un middleware tiene acceso a tres objetos clave:

- **req**: El objeto de solicitud, que contiene información sobre la petición del cliente (método HTTP, encabezados, cuerpo, etc.).
- **res**: El objeto de respuesta, que se utiliza para enviar la respuesta al cliente.
- **next**: Una función que se llama para pasar el control al siguiente middleware o a la ruta final.
