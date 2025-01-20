# Laravel + React + Sanctum Authentication
### Por: Ian Ayala González

Este proyecto es una aplicación que utiliza **Laravel** en el backend y **React** en el frontend, con autenticación mediante **Sanctum** para manejar usuarios a través de tokens. El backend expone una API para la creación y autenticación de usuarios, mientras que el frontend consume esa API y permite a los usuarios interactuar con la **PokéAPI** para obtener información sobre Pokémon.

### Estructura del Proyecto

1. **Backend (Laravel)**
    - **Autenticación con Sanctum**: Laravel se encarga de gestionar la autenticación mediante tokens utilizando **Laravel Sanctum**. Esto permite que los usuarios se registren, inicien sesión y obtengan un token de autenticación que será necesario para acceder a recursos protegidos.
    - **Rutas y Controladores**: Se han configurado rutas API para el registro, login y logout de usuarios. Estas rutas están protegidas por middleware de autenticación, lo que significa que solo los usuarios autenticados pueden acceder a ciertas funcionalidades.
    - **CORS**: Se configura CORS (Cross-Origin Resource Sharing) para permitir la comunicación entre el frontend en React y el backend en Laravel.

2. **Frontend (React)**
    - **Dependencias**: Integre pnpm, vite, react-router-dom, axios y tailwindcss.
    - **Autenticación y Rutas**: En React, se gestionan las rutas utilizando **react-router-dom**. Existen páginas para login y una página de inicio que se muestra solo cuando el usuario está autenticado.
    - **Formulario de Login**: Los usuarios ingresan sus credenciales (correo electrónico y contraseña) a través de un formulario. Al hacer login, el frontend realiza una solicitud al backend para autenticar al usuario y recibir un token de acceso, que luego se guarda en el almacenamiento local (localStorage).
    - **Página de Inicio**: La página de inicio consume la **PokéAPI** para mostrar una lista de Pokémon. Esta página requiere que el usuario esté autenticado, por lo que se pasa el token de autenticación en las solicitudes a la API.
    - **Logout**: Cuando el usuario hace logout, el token de autenticación se elimina del almacenamiento local, y el usuario es redirigido a la página de login.

### Instrucciones de Uso

#### Backend (Laravel)
1. **Configuración de la Base de Datos**: Se debe configurar la conexión a la base de datos en el archivo `.env` de Laravel.
2. **Migraciones**: Se ejecutan migraciones para crear las tablas necesarias en la base de datos, incluyendo la tabla de usuarios.
3. **Instalación de Sanctum**: Se instala y configura Laravel Sanctum para manejar la autenticación mediante tokens.
4. **Rutas de API**: Se definen rutas para el registro, login y logout de usuarios. Estas rutas están protegidas con middleware para asegurar que solo los usuarios autenticados puedan acceder a ellas.
5. **CORS**: Se configura CORS para permitir que el frontend en React pueda hacer solicitudes a la API del backend.

#### Frontend (React)
1. **Configuración de Rutas**: Se instala **react-router-dom** para gestionar las rutas entre las páginas de login y la página de inicio.
2. **Login**: El formulario de login captura las credenciales del usuario y realiza una solicitud al backend para obtener un token de autenticación. Si el login es exitoso, el token se guarda en `localStorage`.
3. **Página de Inicio**: Una vez autenticado, el usuario puede acceder a la página de inicio, que muestra información de Pokémon obtenida de la **PokéAPI**. Las solicitudes a esta API requieren que el token de autenticación se pase en los encabezados.
4. **Logout**: El usuario puede cerrar sesión, lo que elimina el token de `localStorage` y lo redirige a la página de login.


![img.png](public/build/img.png)
![img_1.png](public/build/img_1.png)
![img_2.png](public/build/img_2.png)
![img_3.png](public/build/img_3.png)