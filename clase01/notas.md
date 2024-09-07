# NOTAS DEL CURSO

## ¿Qué es NPM?

NPM, que significa Node Package Manager, es un gestor de paquetes de Node.js. Se encarga de gestionar los paquetes (o módulos) de software que se utilizan en los proyectos. Imagina que NPM es como una tienda de aplicaciones para desarrolladores de JavaScript, donde podemos encontrar y descargar una gran variedad de herramientas, bibliotecas y utilidades para los proyectos.

**¿Para qué sirve NPM?**

- Instalar paquetes: NPM te permite buscar y descargar paquetes desde el registro de npm, que es un repositorio público de paquetes de Node.js. Estos paquetes pueden contener código, documentación y otros recursos que puedes utilizar en tus proyectos.
- Gestionar dependencias: Cada proyecto Node.js tiene sus propias dependencias, es decir, los paquetes que necesita para funcionar. NPM se encarga de rastrear y gestionar estas dependencias, asegurando que siempre tengas las versiones correctas instaladas.
- Ejecutar scripts: NPM te permite definir scripts personalizados en tu proyecto, como tareas de compilación, pruebas, o inicio del servidor. Puedes ejecutar estos scripts directamente desde la línea de comandos.
- Compartir código: Si has creado una biblioteca o herramienta útil, puedes publicarla en el registro de npm para que otros desarrolladores puedan utilizarla.

**Inicializar un proyecto node con npm**
Para inicializar un proyecto con node ejecutamos el comando: `npm init -y` esto crea un fichero `package.json`

**Instalar librerias:**

- instalar librerias de manera local: `npm install mi_libreria -save` (el _-save_ es opcional)
- instalar librerias de manera global: `npm install mi_libreria -g`
- instalar librerias de manera en modo desarrollo: `npm install -D mi_libreria` otra manera es: `npm install mi_libreria --save-dev`
---
## NVM

NVM, acrónimo de Node Version Manager, es una herramienta de línea de comandos diseñada para gestionar múltiples versiones de Node.js en un mismo sistema operativo. Imagina que tienes varios proyectos, cada uno con requerimientos de Node.js distintos. NVM te permite instalar y cambiar entre estas versiones de forma sencilla y eficiente, evitando conflictos y asegurando que cada proyecto utilice la versión correcta de Node.js.
¿Para qué sirve NVM?

- Gestión de múltiples versiones: Instala, actualiza y elimina diferentes versiones de Node.js en tu sistema.
- Cambio rápido de versiones: Cambia entre las versiones instaladas con un solo comando.
- Creación de entornos aislados: Puedes crear entornos de Node.js específicos para cada proyecto, evitando conflictos de dependencias.
- Compatibilidad: Asegúrate de que cada proyecto utilice la versión de Node.js con la que fue desarrollado.
- Pruebas: Prueba nuevas versiones de Node.js sin afectar tus proyectos en producción.

**¿Cómo funciona NVM?**

NVM crea un directorio en tu sistema donde almacena las diferentes versiones de Node.js. Cuando ejecutas un comando NVM, este modifica las variables de entorno para que apunten a la versión de Node.js que deseas utilizar.

Ejemplo de uso:

- Instalar una version especifica: `nvm install 16`
- Listar las versiones instaladas: `nvm ls`
- Cambiar a una version: `nvm use 16`
- Ver la version actual: `nvm -v`
  
---
## Nodemon

Nodemon es una herramienta de línea de comandos que se utiliza en el desarrollo de aplicaciones Node.js para automatizar el reinicio del servidor cada vez que se detecta un cambio en los archivos de tu proyecto. Esto significa que ya no es necesario reiniciar manualmente la aplicación después de cada modificación en el código.
- Monitorea los archivos: Nodemon vigila constantemente los archivos del proyecto.
- Detecta cambios: Cuando se detecta un cambio en alguno de los archivos, Nodemon reinicia el servidor de forma automática.
- Ejecuta tu script: Nodemon ejecuta el script de Node.js que especificamos al iniciar la herramienta.

Instalación:
``` bash
npm install -D nodemon
```

Ejecucion:
```bash
nodemon index.js
```
---
## Express

 Express, es un framework minimalista y flexible para desarrollar aplicaciones web y API en Node.js. Se basa en la plataforma Node.js, que permite ejecutar JavaScript fuera de un navegador web, y proporciona una capa adicional de abstracción y funcionalidades para construir aplicaciones web de manera más eficiente.

**¿Para qué sirve Express.js?**

- Crear servidores web: Express te permite crear servidores HTTP que escuchan por solicitudes y envían respuestas. Puedes definir rutas, manejar diferentes métodos HTTP (GET, POST, PUT, DELETE) y configurar middleware para realizar tareas antes o después de manejar una solicitud.
- Desarrollar APIs: Express es ideal para construir APIs RESTful, que son interfaces de programación que permiten que diferentes aplicaciones se comuniquen entre sí. Puedes definir endpoints, manejar solicitudes de datos y devolver respuestas en formatos como JSON.
- Crear aplicaciones web: Si bien Express es principalmente conocido por sus capacidades para crear APIs, también se puede utilizar para desarrollar aplicaciones web completas, incluyendo la gestión de rutas, vistas y la interacción con bases de datos.

**Características principales de Express**

- Ruteo: Define rutas para manejar diferentes solicitudes HTTP.
- Middleware: Permite ejecutar funciones antes o después de manejar una solicitud para realizar tareas como autenticación, logging, etc.
- Vistas: Integración con motores de plantillas para generar HTML dinámico.
- Manejo de errores: Proporciona mecanismos para manejar errores y enviar respuestas apropiadas.