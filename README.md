Este proyecto fue creado con Create React App y ha sido modificado para incluir funcionalidades de autenticación de usuarios.
Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:
npm start

Ejecuta la aplicación en modo de desarrollo.\
Abre http://localhost:3000 para verlo en tu navegador.

La página se recargará cuando hagas cambios.\
También puedes ver cualquier error de lint en la consola.
npm test

Inicia el corredor de pruebas en el modo de observación interactivo.\
Consulta la sección sobre ejecución de pruebas para obtener más información.
npm run build

Construye la aplicación para producción en la carpeta build.\
Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación está minimizada y los nombres de archivo incluyen los hashes.\
¡Tu aplicación está lista para ser desplegada!

Consulta la sección sobre despliegue para obtener más información.
Funcionalidades del Proyecto
Este proyecto incluye las siguientes funcionalidades:

- Registro de usuarios: Los usuarios pueden crear una cuenta proporcionando su correo electrónico y una contraseña.
- Inicio de sesión: Los usuarios pueden iniciar sesión en su cuenta proporcionando su correo electrónico y contraseña.
- Autenticación: La autenticación del usuario se maneja a través de tokens JWT almacenados en el almacenamiento local del navegador.
- Navegación condicional: Los enlaces de navegación se muestran u ocultan dependiendo de si el usuario está autenticado o no.
- Mensajes de error: Se muestran mensajes de error al usuario cuando el registro o el inicio de sesión fallan.