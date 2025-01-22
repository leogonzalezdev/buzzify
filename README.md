# Buzzify

Buzzify es una aplicación de chat en tiempo real diseñada para ofrecer una experiencia de comunicación rápida, segura y moderna. Construida con tecnologías modernas como React, Zustand y TailwindCSS en el frontend, y Node.js, Express y Socket.IO en el backend, Buzzify incluye características como autenticación JWT, mensajes encriptados con AES y notificaciones en tiempo real.

## Características

- **Mensajes en tiempo real** con Socket.IO.
- **Autenticación segura** con JSON Web Tokens (JWT).
- **Mensajes encriptados** usando AES para garantizar la privacidad.
- **Interfaz moderna** construida con TailwindCSS.
- **Gestión de estado eficiente** con Zustand.
- **Notificaciones en tiempo real** para nuevos usuarios y mensajes.

## Tecnologías utilizadas

### Frontend
- **React**: Librería para construir interfaces de usuario.
- **Zustand**: Gestión de estado simplificada.
- **TailwindCSS**: Framework de utilidades CSS para estilos modernos.

### Backend
- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework para crear APIs rápidas y escalables.
- **Socket.IO**: Comunicación en tiempo real.
- **MongoDB**: Base de datos NoSQL.

## Instalación y configuración

Sigue estos pasos para ejecutar Buzzify en tu entorno local:

### Prerrequisitos
- Node.js (v14 o superior)
- MongoDB
- Git

### 1. Clonar el repositorio
```bash
git clone https://github.com/tuusuario/buzzify.git
cd buzzify
```

### 2. Instalar dependencias
#### Backend
```bash
cd server
npm install
```
#### Frontend
```bash
cd ../client
npm install
```

### 3. Configurar variables de entorno
Crea un archivo `.env` en la carpeta `server` con el siguiente contenido:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/buzzify
JWT_SECRET=tu_jwt_secret
ENCRYPTION_KEY=tu_clave_de_32_caracteres
ENCRYPTION_IV=tu_vector_de_16_caracteres
```

### 4. Ejecutar la aplicación
#### Backend
```bash
cd server
npm start
```

#### Frontend
```bash
cd ../client
npm start
```

### 5. Abrir en el navegador
Visita `http://localhost:3000` para acceder a la aplicación.

## Scripts disponibles

### Backend
- `npm start`: Ejecuta el servidor.
- `npm run dev`: Ejecuta el servidor en modo desarrollo.

### Frontend
- `npm start`: Inicia el servidor de desarrollo de React.

## Contribuciones
¡Las contribuciones son bienvenidas! Por favor, sigue los siguientes pasos:
1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y haz un commit: `git commit -m "Agregada nueva funcionalidad"`.
4. Haz un push a tu rama: `git push origin feature/nueva-funcionalidad`.
5. Abre un pull request.

## Licencia
Este proyecto está licenciado bajo la [MIT License](LICENSE).

## Contacto
- **Autor**: Leonel González
- **Sitio web**: [leogonzalezdev.com](https://leogonzalezdev.com)
- **Email**: leogonzalezde@gmail.com

¡Gracias por usar Buzzify! 💬
