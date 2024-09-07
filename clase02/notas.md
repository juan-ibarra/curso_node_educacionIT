# Notas de la clase 2

## Extensiones en Nodejs

Cuando trabajamos con JavaScript en Node.js, nos encontramos con dos extensiones de archivo principales: `.js` y `.mjs`. Aunque ambas representan archivos de código JavaScript, existen diferencias significativas en la forma en que Node.js los trata, especialmente en lo que respecta a los módulos.

**.js: El estándar tradicional**
- **CommonJS**: Los archivos .js están asociados tradicionalmente con el sistema de módulos CommonJS, que fue el primer estándar de módulos para Node.js.
- **Sintaxis**: Utilizan require() para importar módulos y module.exports para exportar.
- **Evaluación síncrona**: La importación de módulos en CommonJS es síncrona, lo que significa que el código se detiene hasta que se carga el módulo.
  
**.mjs: Adoptando los módulos ES**
- **Módulos ES**: Los archivos .mjs indican que se está utilizando el sistema de módulos ECMAScript (ES) o módulos ES, que es el estándar más reciente para módulos en JavaScript.
- **Sintaxis**: Utilizan import para importar módulos y export para exportar.
- **Evaluación asíncrona**: La importación de módulos en ES es asíncrona por defecto, lo que permite un mejor rendimiento y evita bloqueos.

|Característica|	.js (CommonJS)	|.mjs (ES Modules)|
|-----|---|---|
|Sintaxis de importación/exportación	|require() y module.exports	|import y export|
|Ámbito léxico	|Cada módulo tiene su propio ámbito	|Ámbito léxico más estricto|
|Carga de módulos	|Síncrona por defecto	|Asíncrona por defecto|
|Top-level await	|No soportado	|Soportado|
|Dinámica	|Más dinámico, permite más flexibilidad	|Más estático, promueve un código más estructurado|

## Http
Levantamos un servidor de forma nativa con nodejs

```javascript
const http = require("http");
const os = require("os");

// creacion del servidor
const servidor = http.createServer(function (peticion, respuesa) {
  console.log(peticion);
  const url = peticion.url;

});
//
const PORT = 3000;
servidor.listen(PORT, function () {
    console.log(`Port: ${PORT}`);
});

```
---

Levantamos una aplicacion simple con express 
(para esto necesitamos instalar express `npm i express`)

```javascript
const express = require('express');
const app = express();

app.get()
app.post()
app.put()
app.delete()
```
-----
## Modulos e Importaciones

extension `archivo.mjs` 

**CommonJS**

**Sintaxis**: Utilizada tradicionalmente en Node.js, CommonJS emplea la función require() para importar módulos.
**Ejecución**: Los módulos se ejecutan de manera síncrona, lo que significa que la ejecución se detiene hasta que el módulo se carga completamente.
**Exportación**: Se utiliza module.exports para exportar valores desde un módulo.

**Ejemplo**: 
```javascript
// modulo.js
module.exports = {
  mensaje: 'Hola desde CommonJS'
};

// index.js
const modulo = require('./modulo');
console.log(modulo.mensaje);
```

**ES6 (ES Modules)**

**Sintaxis**: Más moderna y limpia, utiliza las palabras clave import y export.
**Ejecución**: Los módulos se pueden cargar de forma síncrona o asíncrona.
**Exportación**: Se utiliza export para exportar valores y default para exportar un valor por defecto.

**Ejemplo**:

```javascript
// modulo.js
export const mensaje = 'Hola desde ES6';
export default function saludar() {
  console.log('¡Saludos!');
}

// index.js
import { mensaje } from './modulo';
import saludar from './modulo';

console.log(mensaje);
saludar();
```
---
Exportar
`export {
    app,
    sumar
}`

Importar
`import {
    app,
    sumar
}from './index.mjs'
`